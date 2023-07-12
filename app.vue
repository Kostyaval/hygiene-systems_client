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
import {
  CompanyInformationState,
  NavigationItem,
  ProductCardsState,
} from '~/models/single-types'
import { SinglePagesResponse } from '~/models/api'
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

const headerNavigationPromise = useFetch<SinglePagesResponse>('/api/single-pages', {
  method: 'GET',
  baseURL: config.public.baseURL,
  transform: (response): NavigationItem[] => {
    return response?.data || null
  },
})

const [
  { data: companyInformationData, error: companyInformationError },
  { data: productCardsData, error: productCardsError },
  { data: headerNavigationData, error: headerNavigationError },
] = await Promise.all([
  companyInformationPromise,
  productCardsPromise,
  headerNavigationPromise,
])

if (
  companyInformationError.value ||
  !companyInformationData.value ||
  productCardsError.value ||
  !productCardsData.value ||
  headerNavigationError.value ||
  !headerNavigationData.value
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

const headerNavigation = useState<NavigationItem[]>(
  'headerNavigation',
  () => headerNavigationData.value as NavigationItem[]
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
