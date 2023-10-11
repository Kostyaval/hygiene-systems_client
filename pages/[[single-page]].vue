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
import { formatComponentName } from '~/utils/helpers'
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
if (error.value || !data) {
  throw createError({
    fatal: true,
    statusCode: 404,
  })
}
const blocks = []

const getComponent = (componentName: string) => {
  try {
    return defineAsyncComponent(
      () => import(`~/components/blocks/${formatComponentName(componentName)}.vue`)
    )
  } catch (e) {
    console.log(e)
    return undefined
  }
}

const pageBlocks = data.value?.pageBlocks || []

for (const index in pageBlocks) {
  // @ts-ignore
  const component = pageBlocks[index]?.__component
  // @ts-ignore
  const { __component, ...props } = pageBlocks[index]
  const asyncComponent = getComponent(component)
  console.log(asyncComponent)
  if (asyncComponent) {
    blocks.push({ component: getComponent(component), props })
  }
}
</script>

<style scoped></style>
