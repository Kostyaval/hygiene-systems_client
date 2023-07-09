<template>
  <component
    :is="block.component"
    v-for="(block, index) in blocks"
    :key="index"
    v-bind="block.props"
  />
</template>

<script setup lang="ts">
import type { SinglePageResponse } from '~/models/api'
import { CompanyInformationState, ProductCardsState } from '~/models/single-types'
const route = useRoute()
const config = useRuntimeConfig()

const singlePage = route.path.replaceAll('/', '') || 'home'
const { data, error } = await useAsyncData(
  singlePage,
  () =>
    $fetch<SinglePageResponse>('/api/single-pages', {
      method: 'GET',
      baseURL: config.public.baseURL,
      query: { 'filters[pageUrl]': singlePage, populate: 'deep,6' },
    }),
  {
    transform(response) {
      const data = response.data
      return {
        pageBlocks: data[0].Blocks,
        seoDetails: data[0].seo,
      }
    },
  }
)
const companyInformation = useState<CompanyInformationState>('companyInformation')
if (error.value || !data) {
  throw createError({
    fatal: true,
    statusCode: 404,
  })
}
const products = useState<ProductCardsState>('productCards')
if (error.value || !data) {
  throw createError({
    fatal: true,
    statusCode: 404,
  })
}
console.log(products.value)
console.log(companyInformation)
onMounted(() => {
  console.log(data.value?.pageBlocks)
})
const blocks = []
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
    () => import(`~/components/blocks/${formatComponentName(componentName)}.vue`)
  )

const pageBlocks = data.value?.pageBlocks || []

console.log(pageBlocks)
for (const index in pageBlocks) {
  // @ts-ignore
  const component = pageBlocks[index]?.__component
  // @ts-ignore
  const { __component, ...props } = pageBlocks[index]
  blocks.push({ component: getComponent(component), props })
}
</script>

<style scoped></style>
