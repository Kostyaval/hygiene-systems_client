<template>
  <pre>{{ data }}</pre>
</template>

<script setup lang="ts">
import type { SinglePageResponse } from '~/models/api'
const route = useRoute()
const config = useRuntimeConfig()

const singlePage = route.path.replaceAll('/', '') || 'home'
const { data, error } = await useAsyncData(
  singlePage,
  () =>
    $fetch<SinglePageResponse>('/api/single-pages', {
      method: 'GET',
      baseURL: config.baseURL,
      query: { 'filters[pageUrl]': singlePage, populate: 'deep,6' },
    }),
  {
    transform(response) {
      const data = response.data
      return {
        pageBlocks: data[0]['Blocks'],
        seoDetails: data[0]['seo'],
      }
    },
  }
)
const companyInformation = useState('companyInformation')

if (error.value || !data) {
  throw createError({
    fatal: true,
    statusCode: 404,
  })
}
</script>

<style scoped></style>
