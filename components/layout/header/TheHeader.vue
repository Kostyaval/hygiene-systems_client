<template>
  <div class="sticky top-0 xl:hidden">
    <HeaderPromoTags :promo-text="promoTags" />
    <HeaderNavigationDesktop :navigation="navigation" :logo="logo" />
  </div>
  <div class="sticky top-0 hidden xl:block">
    <HeaderNavigationMobile
      :logo="logoMobile"
      @mobile-aside-triggered="toggleMobileAside"
    />
    <HeaderAsideMobile
      v-if="mobileAsideActive"
      ref="mobileAside"
      :logo="logo"
      :navigation="navigation"
      :promo-text="promoTags"
      @mobile-aside-triggered="toggleMobileAside"
    />
  </div>
</template>
<script setup lang="ts">
import HeaderNavigationDesktop from '~/components/layout/header/HeaderNavigationDesktop.vue'
import { CompanyInformationInput } from '~/models/strapi-types/auto-generated'
import HeaderPromoTags from '~/components/layout/header/HeaderPromoTags.vue'
import HeaderNavigationMobile from '~/components/layout/header/HeaderNavigationMobile.vue'
import HeaderAsideMobile from '~/components/layout/header/HeaderAsideMobile.vue'

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

const {
  logo,
  logoMobile,
  headerPromoTags = '',
} = useState<CompanyInformationInput>('companyInformation').value

const promoTags = headerPromoTags?.split(',').map((item) => item.trim())
const navigation: Array<{ name: string; href: string }> = [
  {
    name: 'About Us',
    href: '/',
  },
  {
    name: 'Services',
    href: '#',
  },
  {
    name: 'Products',
    href: '#',
  },
  {
    name: 'Hoop 247',
    href: '#',
  },
  {
    name: 'Contact Us',
    href: '#',
  },
]
</script>
