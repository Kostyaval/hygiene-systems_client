<template>
  <div
    class="relative flex h-[500px] items-center justify-center lg:h-[420px] md:h-[380px]"
  >
    <h1
      class="container max-w-[580px] text-center text-headline-2 text-neutral-100 lg:text-headline-3"
    >
      {{ title }}
    </h1>
    <StrapiImage
      class="object-cover"
      image-class="absolute absolute-cover object-cover z-[-1] object-right-top"
      v-if="image"
      :src="`http://localhost:1337${image.url}`"
    />
  </div>
  <div
    v-if="articleData.length"
    class="container grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] justify-items-center gap-6 pt-20 lg:pt-12"
  >
    <nuxt-link
      v-for="(item, index) in articleData"
      :to="`/blog/${item.slug}`"
      class="group block max-w-[456px] rounded-xl bg-neutral-200"
      :key="index"
    >
      <div
        v-if="item.image"
        class="relative overflow-hidden rounded-t-xl bg-neutral-100 pb-[72.5%] text-center"
      >
        <StrapiImage
          image-class="mx-auto group-hover:scale-105 transition-transform absolute absolute-cover object-cover"
          :src="`http://localhost:1337${item.image.url}`"
          :modifiers="{ resize: '336x208', fit: 'cover' }"
          :lazy-fallback="true"
        >
        </StrapiImage>
      </div>
      <div class="px-4 pb-6">
        <div class="pt-5 text-button-s capitalize text-turquoise-500">
          {{ formatDate(item.date) }}
        </div>
        <div class="pt-3 text-subtitle-3 capitalize text-neutral-700">
          {{ item.title }}
        </div>
        <div class="line-clamp-3 min-h-[85px] pt-3 text-body-2 text-neutral-600">
          {{ item.description }}
        </div>
        <TheButton
          class="mt-8"
          variant="secondary"
          color-text="turquoise"
          :to="`/products/${item.slug}`"
          size="small"
          tag="nuxt-link"
        >
          Read
        </TheButton>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { BlockArticlesGrid } from '~/models/page-block-components'
import StrapiImage from '~/components/ui/StrapiImage.vue'
import TheButton from '~/components/ui/buttons/TheButton.vue'
import { ArticleInput } from '~/models/strapi-types/auto-generated'
import { SinglePageResponse } from '~/models/api'
import { FetchError } from 'ofetch'
import { formatDate } from '../../utils/helpers'
const config = useRuntimeConfig()

const props = withDefaults(defineProps<BlockArticlesGrid>(), {})
const { data: articleData, error: articleError } = await useFetch('/api/articles', {
  method: 'GET',
  baseURL: config.public.baseURL,
  query: {
    'fields[0]': 'title',
    'fields[1]': 'slug',
    'fields[2]': 'date',
    'fields[3]': 'description',
    'populate[image][populate]': 'deep,6',
  },
  transform: (response: { data: ArticleInput[] }) => {
    return response?.data || null
  },
})
</script>

<style scoped></style>
