<template>
  <nuxt-link
    :to="`/products/${pageUrl}`"
    class="group block max-w-[336px] rounded-lg bg-neutral-200 p-2"
  >
    <div
      v-if="productCard.image"
      class="relative overflow-hidden rounded-md bg-neutral-100 pb-[72.5%] text-center"
    >
      <StrapiImage
        image-class="mx-auto group-hover:scale-105 transition-transform absolute absolute-cover object-cover"
        :src="productCard.image.url"
        :modifiers="{ width: 314 }"
        :lazy-fallback="true"
        :parent-section="parentSection"
      >
      </StrapiImage>
    </div>
    <div class="px-4 pb-6">
      <div class="pt-5 text-subtitle-2 capitalize text-neutral-600">
        {{ productCard.title }}
      </div>
      <div class="min-h-[85px] pt-3 text-body-2 text-neutral-600">
        {{ productCard.description }}
      </div>
      <div class="flex flex-wrap gap-2">
        <div
          class="inline-flex rounded-full bg-neutral-100 px-2 py-2 text-body-2 leading-none text-neutral-600"
          v-for="(tag, index) in productCard.tags.split(',')"
          :key="`${index}-tag`"
        >
          {{ tag }}
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import { BlockProductCard } from '~/models/page-block-components'
import StrapiImage from '~/components/ui/StrapiImage.vue'

const props = withDefaults(
  defineProps<BlockProductCard & { parentSection: HTMLElement | null }>(),
  {}
)
</script>

<style scoped></style>
