<template>
  <footer class="relative overflow-hidden bg-neutral-800">
    <div class="container pb-24 pt-14 text-neutral-100">
      <StrapiImage
        v-if="backgroundImage"
        image-class="md:absolute-x-center absolute -top-24 -right-40 select-none opacity-10 md:top-0 md:w-[150%] md:max-w-none"
        :src="backgroundImage.url"
        :alt="backgroundImage.alternativeText"
      />
      <div class="mx-auto grid max-w-[1300px] grid-cols-12 gap-4 md:gap-1">
        <div class="col-span-3 col-start-1 xl:col-span-6 md:col-span-12">
          <div>
            <img
              v-if="logoWhite"
              :src="logoWhite.url"
              :alt="logoWhite.alternativeText"
            />
          </div>
          <div class="pt-12">
            <a class="block text-button-m underline" :href="`tel:${mobileNumber}`">{{
              mobileNumber
            }}</a>
            <a class="block text-button-m underline" :href="`mailto:${email}`">{{
              email
            }}</a>
          </div>
          <div class="pt-8 text-body-2 text-neutral-500">
            <MarkdownRenderer v-if="address" :markdown="address" />
          </div>
          <div class="space-x-2 pt-12">
            <template v-for="(item, index) in socialLinks">
              <!--              <TheButton-->
              <!--                v-if="item"-->
              <!--                :key="index"-->
              <!--                :icon-only="`social/${item.icon}-1`"-->
              <!--                :href="item.href || '#'"-->
              <!--                tag="a"-->
              <!--                target="_blank"-->
              <!--                color-background="black"-->
              <!--                color-text="gray"-->
              <!--                variant="social"-->
              <!--              />-->
              <TheButtonIconOnly
                v-if="item"
                :key="index"
                :icon="`social/${item.icon}-1`"
                tag="nuxt-link"
                :external-link="!!item.externalLink"
                :to="item.href"
                target="_blank"
                color-background="black"
                color-text="gray"
              />
            </template>
          </div>
        </div>
        <div
          class="relative z-[1] col-span-2 col-start-5 space-y-2 pt-12 xl:col-span-6 xl:col-start-7 md:col-span-12 md:col-start-1"
        >
          <nuxt-link
            v-for="(item, index) in footerNavigationReady"
            :key="index"
            :href="`/${item.pageUrl}`"
            class="block whitespace-nowrap py-1 text-body-2 hover:border-turquoise-500 hover:text-turquoise-500"
          >
            {{ item.navigationTitle }}
          </nuxt-link>
        </div>
        <div
          class="relative z-[1] col-span-2 col-start-7 space-y-2 pt-12 xl:col-span-6 xl:col-start-1 md:col-span-6 md:col-start-1"
        >
          <nuxt-link
            v-for="(item, index) in firstProducts"
            :key="index"
            :href="item.href"
            class="block whitespace-nowrap py-1 text-body-2 capitalize text-neutral-400 hover:border-turquoise-500 hover:text-turquoise-500"
          >
            {{ item.name }}
          </nuxt-link>
        </div>
        <div
          class="relative z-[1] col-span-2 col-start-9 space-y-2 pt-12 xl:col-span-6 xl:col-start-7 md:col-span-6 md:col-start-7"
        >
          <nuxt-link
            v-for="(item, index) in secondProducts"
            :key="index"
            :href="item.href"
            class="block whitespace-nowrap py-1 text-body-2 capitalize text-neutral-400 hover:border-turquoise-500 hover:text-turquoise-500"
          >
            {{ item.name }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type {
  CompanyInformationState,
  NavigationItem,
  ProductCardsState,
} from '~/models/single-types'
import MarkdownRenderer from '~/components/ui/MarkdownRenderer.vue'
import TheButton from '~/components/ui/buttons/TheButton.vue'
import StrapiImage from '~/components/ui/StrapiImage.vue'
import TheButtonIconOnly from '~/components/ui/buttons/TheButtonIconOnly.vue'
const { logoWhite, mobileNumber, email, address, backgroundImage, socialLinks } =
  useState<CompanyInformationState>('companyInformation').value
const navigation: Array<{ name: string; href: string }> = [
  {
    name: 'About Us',
    href: '#',
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

const headerNavigation = useState<NavigationItem[]>('headerNavigation')
const footerNavigationReady = headerNavigation.value
  .filter((el) => el.pageUrl !== 'home')
  .sort((el) => (el.Rank || 0) - (el.Rank || 0))
footerNavigationReady.push({ navigationTitle: 'Hoop247', pageUrl: 'hoop247' })

const products = useState<ProductCardsState>('productCards')
const productsArray = products.value
  .map((el) => ({
    name: el.navigationTitle,
    href: `/products/${el.pageUrl}`,
  }))
  .sort((a, b) => {
    if (a.name < b.name) {
      return -1
    }
    if (a.name > b.name) {
      return 1
    }
    return 0
  })

let middle = Math.ceil(productsArray.length / 2)

let firstProducts = productsArray.slice(0, middle)
let secondProducts = productsArray.slice(middle)
</script>

<style scoped></style>
