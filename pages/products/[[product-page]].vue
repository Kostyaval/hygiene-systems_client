<template>
  <component
    :is="block.component"
    v-for="(block, index) in blocks"
    :key="index"
    v-bind="block.props"
  />
</template>

<script setup lang="ts">
import { ProductsPageResponse } from '~/models/api'
const route = useRoute()
const config = useRuntimeConfig()

const productPage = route.path.replaceAll('/', '').replaceAll('products', '')
const { data, error } = await useAsyncData(
  productPage,
  () =>
    $fetch<ProductsPageResponse>('/api/products-pages', {
      method: 'GET',
      baseURL: config.public.baseURL,
      query: { 'filters[pageUrl]': productPage, populate: 'deep,8' },
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

const blocks = []
const formatComponentName = (name: string) => {
  // Replace 'block.' with '' and split at '-'
  const parts = name.replace('block.', '').split('-')

  // Convert each part to start with an uppercase letter
  const formattedParts = parts.map(
    (part) => part.charAt(0).toUpperCase() + part.slice(1)
  )

  console.log(`Block${formattedParts.join('')}`)

  return `Block${formattedParts.join('')}`
}
const getComponent = (componentName: string) =>
  defineAsyncComponent(
    () => import(`../../components/blocks/${formatComponentName(componentName)}.vue`)
  )

const pageBlocks = data.value?.pageBlocks || []

for (const index in pageBlocks) {
  // @ts-ignore
  const component = pageBlocks[index]?.__component
  // @ts-ignore
  const { __component, ...props } = pageBlocks[index]
  blocks.push({ component: getComponent(component), props })
}
</script>

<style scoped></style>
