<template>
  <div class="container overflow-hidden pb-28 pt-14">
    <div class="text-center text-headline-2 text-turquoise-500 lg:text-headline-3">
      {{ title }}
    </div>
    <div
      class="mx-auto grid max-w-5xl grid-cols-6 gap-4 pt-20 lg:grid-cols-5 sm:grid-cols-4"
    >
      <template v-for="(item, index) in partners" :key="index">
        <a
          class="relative block pb-[55%]"
          v-if="item && item.image"
          :href="item.url"
          rel="nofollow"
          target="_blank"
        >
          <StrapiImage
            class="block h-full w-full"
            image-class="absolute absolute-cover object-cover"
            :src="item.image.url"
            :modifiers="{ width: 250 }"
            width="100px"
            :lazy="true"
          />
        </a>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BlockPartnersLogos } from '~/models/page-block-components'
import StrapiImage from '~/components/ui/StrapiImage.vue'

const props = withDefaults(defineProps<BlockPartnersLogos>(), {})
</script>

<style scoped></style>
