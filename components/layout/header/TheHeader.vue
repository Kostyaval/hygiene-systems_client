<template>
  <div class="sticky top-0 z-10 xl:hidden">
    <HeaderPromoTags v-if="promoTags" :promo-text="promoTags" />
    <HeaderNavigationDesktop
      :navigation="headerNavigationReady"
      :logo="logo"
      @open-contact-modal="openContactModal"
    />
  </div>
  <div class="sticky top-0 z-10 hidden xl:block">
    <HeaderNavigationMobile
      :logo="logoMobile"
      @open-contact-modal="openContactModal"
      @mobile-aside-triggered="toggleMobileAside"
    />
  </div>
  <HeaderAsideMobile
    v-if="mobileAsideActive"
    ref="mobileAside"
    :logo="logo"
    :navigation="headerNavigationReady"
    :promo-text="promoTags"
    @mobile-aside-triggered="toggleMobileAside"
    @open-contact-modal="openContactModal"
  />
</template>
<script setup lang="ts">
import HeaderNavigationDesktop from '~/components/layout/header/HeaderNavigationDesktop.vue'
import type { CompanyInformationState, NavigationItem } from '~/models/single-types'
import HeaderPromoTags from '~/components/layout/header/HeaderPromoTags.vue'
import HeaderNavigationMobile from '~/components/layout/header/HeaderNavigationMobile.vue'
import HeaderAsideMobile from '~/components/layout/header/HeaderAsideMobile.vue'
import { $modal } from '~/components/ui/modals'

const { $bodyScrollLock } = useNuxtApp()
const mobileAsideActive = ref(false)
const mobileAside = ref<HTMLInputElement | null>(null)

async function toggleMobileAside(isOpen: boolean) {
  mobileAsideActive.value = isOpen
  await nextTick()
  if (isOpen && mobileAside.value) {
    $bodyScrollLock.disableBodyScroll(mobileAside.value)
  } else {
    $bodyScrollLock.clearAllBodyScrollLocks()
  }
}

const openContactModal = () => {
  const modalContactComponent = defineAsyncComponent(
    async () => await import('~/components/ui/modals/content/ModalContact.vue')
  )
  $modal.open(modalContactComponent).then((res) => console.log(res))
}

const {
  logo,
  logoMobile,
  headerPromoTags = '',
} = useState<CompanyInformationState>('companyInformation').value

const promoTags = headerPromoTags?.split(',').map((item) => item.trim())

const headerNavigation = useState<NavigationItem[]>('headerNavigation')
const headerNavigationReady = headerNavigation.value
  .filter((el) => el.pageUrl !== 'home')
  .sort((el) => (el.Rank || 0) - (el.Rank || 0))
headerNavigationReady.push({ navigationTitle: 'Hoop247', pageUrl: 'hoop247' })
</script>
