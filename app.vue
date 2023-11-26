<template>
  <div>
    <img
      class="lcp"
      style="
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 99vw;
        height: 99vh;
        max-width: 100%;
        max-height: 100%;
      "
      width="99999"
      height="99999"
      src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
    />
    <NuxtLayout>
      <NuxtLoadingIndicator
        color="repeating-linear-gradient(to right,#ffffff 0%,#6AD3DC 100%)"
      />
      <NuxtPage />
    </NuxtLayout>
    <ModalRoot />
    <div class="fixed bottom-8 right-6 z-10 -m-2 inline-flex flex-wrap">
      <the-button
        to="https://nz.hoop247.com/quote"
        class="border border-turquoise-400"
        external-link
        icon-left="button/cart"
        >Online Quote</the-button
      >
      <ZendeskChat
        :script="zendesk"
        class="ml-2 border border-turquoise-400 md:min-w-0 md:pl-4 md:pr-2"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import ModalRoot from '~/components/ui/modals/ModalRoot.vue'
import type { CompanyInformationResponse, ProductCardsResponse } from '~/models/api'
import {
  CompanyInformationState,
  NavigationItem,
  ProductCardsState,
} from '~/models/single-types'
import { SinglePagesResponse } from '~/models/api'
import ZendeskChat from '~/components/common/ZendeskChat.vue'
import TheButton from '~/components/ui/buttons/TheButton.vue'
import ButtonWrapper from '~/components/ui/buttons/ButtonWrapper.vue'
import Hotjar from '@hotjar/browser'

const config = useRuntimeConfig()

const { zendesk, hotjarId } = config.public

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
  '/api/products-pages?populate[productCard][populate]=*&fields[1]=pageUrl&fields[2]=navigationTitle',
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
  console.log(parseInt(hotjarId))
  Hotjar.init(parseInt(hotjarId), 6)
})
</script>
