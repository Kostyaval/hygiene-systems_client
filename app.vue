<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <ModalRoot />
  </div>
</template>
<script setup lang="ts">
import { useFont } from '#fonty'
import ModalRoot from '~/components/ui/modals/ModalRoot.vue'
import type { CompanyInformationResponse } from '~/models/api'
// import { CompanyInformationInput } from '~/models/single-types'

const config = useRuntimeConfig()
const { data, error } = await useAsyncData(
  `company-information`,
  () =>
    $fetch<CompanyInformationResponse>('/api/company-information?populate=deep', {
      method: 'GET',
      baseURL: config.baseURL,
    }),
  {
    transform(response) {
      return response.data || null
    },
  }
)

if (error.value || !data.value) {
  throw createError({
    fatal: true,
    statusCode: 404,
  })
}

// const companyInformation = useState<CompanyInformationInput>(
//   'companyInformation',
//   () => data.value as CompanyInformationInput
// )

useFont([
  {
    src: '/fonts/gotham-black.woff2',
    family: 'Gotham',
    fallback: ['sans-serif'],
    weight: '800',
  },
  {
    src: '/fonts/gotham-bold.woff2',
    family: 'Gotham',
    fallback: ['sans-serif'],
    weight: '700',
  },
  {
    src: '/fonts/gotham-book.woff2',
    family: 'Gotham',
    fallback: ['sans-serif'],
    weight: '400',
  },
])
</script>
