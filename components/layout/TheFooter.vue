<template>
  <footer class="container pt-8 pb-10">
    <div
      class="container relative overflow-hidden rounded-2xl bg-neutral-800 pt-14 pb-10 text-neutral-100"
    >
      <StrapiImage
        image-class="md:absolute-x-center absolute -top-24 -right-40 select-none opacity-10 md:top-0 md:w-[150%] md:max-w-none"
        :src="backgroundImage.url"
        :alt="backgroundImage.alternativeText"
      />
      <div class="mx-auto grid max-w-[1300px] grid-cols-12 gap-4 md:gap-1">
        <div class="col-span-3 col-start-1 md:col-span-12 xl:col-span-6">
          <div><img :src="logoWhite.url" :alt="logoWhite.alternativeText" /></div>
          <div class="pt-12">
            <a class="text-button-m block underline" :href="`tel:${mobileNumber}`">{{
              mobileNumber
            }}</a>
            <a class="text-button-m block underline" :href="`mailto:${email}`">{{
              email
            }}</a>
          </div>
          <div class="text-body-2 pt-8 text-neutral-500">
            <MarkdownRenderer :markdown="address" />
          </div>
          <div class="space-x-2 pt-12">
            <TheButton
              v-for="(item, index) in socialLinks"
              :key="index"
              :icon-only="`social/${item.icon}-1`"
              :href="item.href"
              tag="a"
              target="_blank"
              color-background="black"
              color-text="gray"
              variant="social"
            />
          </div>
        </div>
        <div
          class="col-span-2 col-start-5 space-y-2 pt-12 md:col-span-12 md:col-start-1 xl:col-span-6 xl:col-start-7"
        >
          <nuxt-link
            v-for="(item, index) in navigation"
            :key="index"
            :href="item.href"
            class="hover:border-turquoise-500 hover:text-turquoise-500 text-body-2 block whitespace-nowrap py-1"
          >
            {{ item.name }}
          </nuxt-link>
        </div>
        <div
          class="col-span-2 col-start-7 space-y-2 pt-12 md:col-span-6 md:col-start-1 xl:col-span-6 xl:col-start-1"
        >
          <nuxt-link
            v-for="(item, index) in navigation"
            :key="index"
            :href="item.href"
            class="hover:border-turquoise-500 hover:text-turquoise-500 text-body-2 block whitespace-nowrap py-1 text-neutral-400"
          >
            {{ item.name }}
          </nuxt-link>
        </div>
        <div
          class="col-span-2 col-start-9 space-y-2 pt-12 md:col-span-6 md:col-start-7 xl:col-span-6 xl:col-start-7"
        >
          <nuxt-link
            v-for="(item, index) in navigation"
            :key="index"
            :href="item.href"
            class="hover:border-turquoise-500 hover:text-turquoise-500 text-body-2 block whitespace-nowrap py-1 text-neutral-400"
          >
            {{ item.name }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { CompanyInformationInput } from '~/models/strapi-types/auto-generated'
import MarkdownRenderer from '~/components/ui/MarkdownRenderer.vue'
import TheButton from '~/components/ui/TheButton.vue'
import StrapiImage from '~/components/ui/StrapiImage.vue'
const { logoWhite, mobileNumber, email, address, backgroundImage, socialLinks } =
  useState<CompanyInformationInput>('companyInformation').value
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
</script>

<style scoped></style>
