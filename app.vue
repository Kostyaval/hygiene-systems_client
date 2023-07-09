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
import type { CompanyInformationResponse, ProductCardsResponse } from '~/models/api'
import { CompanyInformationState, ProductCardsState } from '~/models/single-types'
const config = useRuntimeConfig()

const companyInformationPromise = useFetch<CompanyInformationResponse>(
  '/api/company-information?populate=deep',
  {
    method: 'GET',
    baseURL: config.public.baseURL,
    transform: (response): CompanyInformationState => {
      return response?.data || null
    },
  }
)

const productCardsPromise = useFetch<ProductCardsResponse>(
  '/api/products-pages?populate[productCard][populate]=*&fields[0]=productCard&fields[1]=pageUrl&fields[2]=navigationTitle',
  {
    method: 'GET',
    baseURL: config.public.baseURL,
    transform: (response): ProductCardsState => {
      return response?.data || null
    },
  }
)

const [
  { data: companyInformationData, error: companyInformationError },
  { data: productCardsData, error: productCardsError },
] = await Promise.all([companyInformationPromise, productCardsPromise])

if (
  companyInformationError.value ||
  !companyInformationData.value ||
  productCardsError.value ||
  !productCardsData.value
) {
  throw createError({
    fatal: true,
    statusCode: 404,
  })
}

const productCards = useState<ProductCardsState>(
  'productCards',
  () => productCardsData.value as ProductCardsState
)

const companyInformation = useState<CompanyInformationState>(
  'companyInformation',
  () => companyInformationData.value as CompanyInformationState
)

onMounted(() => {
  if (!companyInformation.value.headerPromoTags) {
    const root = document.documentElement
    root.style.setProperty('--header-height', '72px')
  }
})

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
