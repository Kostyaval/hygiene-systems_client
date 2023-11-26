<template>
  <article class="container max-w-4xl text-body-2">
    <div class="flex items-center justify-between pt-6">
      <TheButton
        variant="tertiary"
        color-text="turquoise"
        class="min-w-0 pl-0"
        to="/blog"
        size="medium"
        tag="nuxt-link"
        icon-left="action/back"
      >
        Back
      </TheButton>
      <span class="text-button-m text-orange-500">
        {{ formatDate(date) }}
      </span>
    </div>
    <div
      v-if="image"
      class="relative mt-7 overflow-hidden rounded-xl bg-neutral-100 pb-[44.5%] text-center"
    >
      <StrapiImage
        image-class="mx-auto group-hover:scale-105 transition-transform absolute absolute-cover object-cover"
        :src="image.url"
        :modifiers="{ resize: '936x417', fit: 'cover' }"
      >
      </StrapiImage>
    </div>
    <h1 class="mb-7 mt-12 text-headline-2 text-turquoise-500">{{ title }}</h1>
    <template v-for="(item, index) in body" :key="index">
      <div
        v-if="item.image"
        class="relative my-8 overflow-hidden rounded-xl bg-neutral-100 pb-[44.5%] text-center"
      >
        <StrapiImage
          image-class="mx-auto group-hover:scale-105 transition-transform absolute absolute-cover object-cover"
          :src="item.image.url"
          :modifiers="{ resize: '936x417', fit: 'cover' }"
        >
        </StrapiImage>
      </div>
      <markdown-renderer
        v-if="item.richtext"
        text-style="article"
        :markdown="item.richtext || ''"
      />
    </template>
  </article>
  <div class="mt-32 bg-neutral-200 py-20">
    <div class="text-center text-headline-2 text-turquoise-500">What to read next?</div>
    <div
      v-if="articles"
      class="container grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] justify-items-center gap-6 pt-20 lg:pt-12"
    >
      <nuxt-link
        v-for="(item, index) in articles"
        :to="`/blog/${item.slug}`"
        class="group block max-w-[456px] rounded-xl bg-neutral-100"
        :key="index"
      >
        <div
          v-if="item.image"
          class="relative overflow-hidden rounded-t-xl bg-neutral-100 pb-[72.5%] text-center"
        >
          <StrapiImage
            image-class="mx-auto group-hover:scale-105 transition-transform absolute absolute-cover object-cover"
            :src="item.image.url"
            :modifiers="{ resize: '336x208', fit: 'cover' }"
            :lazy-fallback="true"
          >
          </StrapiImage>
        </div>
        <div class="px-4 pb-6">
          <div class="pt-5 text-button-s capitalize text-turquoise-500">
            {{ formatDate(date) }}
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
  </div>
</template>

<script setup lang="ts">
import type { Article } from '~/models/strapi-types/auto-generated'
import StrapiImage from '~/components/ui/StrapiImage.vue'
import TheButton from '~/components/ui/buttons/TheButton.vue'
import { formatDate } from '~/utils/helpers'
import MarkdownRenderer from '~/components/ui/MarkdownRenderer.vue'

const props = withDefaults(defineProps<Article>(), {})
</script>

<style scoped></style>
