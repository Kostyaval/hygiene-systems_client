<template>
  <component
    :is="block.component"
    v-for="(block, index) in blocks"
    :key="index"
    v-bind="block.props"
  />
</template>

<script setup lang="ts">
import { SinglePageResponse } from '~/models/api'
import { ArticleInput } from '~/models/strapi-types/auto-generated'

const route = useRoute()
const config = useRuntimeConfig()
const fetchArray = []

const articleSlug = computed<string | null>(
  () => route.params?.article?.toString() || null
)

const articlePromise = useFetch('/api/articles', {
  method: 'GET',
  baseURL: config.public.baseURL,
  query: {
    'filters[slug]': articleSlug.value,
    'populate[image][populate]': '*',
    'populate[body][populate]': 'deep,8',
    'populate[body][populate][0]': 'image',
    'populate[articles][populate][0]': 'title',
    'populate[articles][populate][1]': 'slug',
    'populate[articles][populate][2]': 'date',
    'populate[articles][populate][3]': 'description',
    'populate[articles][populate][4]': 'image',
  },
  transform: (response: { data: ArticleInput[] }) => {
    return response?.data || null
  },
})

const blogPagePromise = useFetch('/api/single-pages', {
  method: 'GET',
  baseURL: config.public.baseURL,
  query: { 'filters[pageUrl]': 'blog', populate: 'deep,6' },
  transform: (response: SinglePageResponse) => {
    const data = response.data
    return {
      pageBlocks: data[0].Blocks,
      seoDetails: data[0].seo,
    }
  },
})

fetchArray.push(blogPagePromise)
if (articleSlug.value) {
  fetchArray.push(articlePromise)
}

const responses = await Promise.all(fetchArray)
console.log(responses)
const blogPageResponse = responses[0]
const articleResponse = responses[1]

const blogPageData = blogPageResponse?.data ?? null
const [articleData] = (articleResponse?.data.value || []) as ArticleInput[]

let blocks = []
const formatComponentName = (name: string) => {
  // Replace 'block.' with '' and split at '-'
  const parts = name.replace('block.', '').split('-')

  // Convert each part to start with an uppercase letter
  const formattedParts = parts.map(
    (part) => part.charAt(0).toUpperCase() + part.slice(1)
  )

  return `Block${formattedParts.join('')}`
}
const getComponent = (componentName: string) =>
  defineAsyncComponent(
    () => import(`../../components/blocks/${formatComponentName(componentName)}.vue`)
  )
const excludeBlock = (blocks: any[], blockForExclude: string[]) => {
  for (let i = blocks.length - 1; i >= 0; i--) {
    if (blockForExclude.includes(blocks[i].name)) {
      blocks.splice(i, 1)
    }
  }
}

const pageBlocks = blogPageData.value?.pageBlocks || []

for (const index in pageBlocks) {
  // @ts-ignore
  const component = pageBlocks[index]?.__component
  // @ts-ignore
  const { __component, ...props } = pageBlocks[index]

  blocks.push({
    component: getComponent(component),
    props,
    name: formatComponentName(__component),
  })
}

if (articleSlug.value) {
  excludeBlock(blocks, ['BlockArticlesGrid'])
  blocks.unshift({
    component: defineAsyncComponent(
      () => import(`../../components/blocks/BlockArticle.vue`)
    ),
    props: articleData,
    name: 'BlockArticle',
  })
}
</script>

<style scoped></style>
