<template>
  <div class="container py-20">
    <div class="grid grid-cols-2 gap-12 md:grid-cols-1">
      <template v-for="(item, index) in infoBlocks" :key="index">
        <div v-if="item" class="mx-auto max-w-lg">
          <div v-if="item.image">
            <img :src="item.image.url" :alt="item.image.alternativeText" />
          </div>
          <div class="pt-8 text-headline-4 text-neutral-700 lg:text-subtitle-2">
            {{ item.title }}
          </div>
          <div class="pt-5">
            <MarkdownRenderer
              class="text-body-1 text-neutral-600 lg:text-body-2"
              :markdown="item.description || ''"
            />
          </div>
        </div>
      </template>
    </div>
    <div
      class="mt-20 grid grid-cols-2 overflow-hidden rounded-2xl bg-turquoise-100 lg:mt-12 lg:grid-cols-1"
      v-if="banner"
    >
      <div class="max-w-xl py-14 pl-16 lg:pl-4 lg:pr-4">
        <div v-if="banner.title" class="pb-8 text-headline-4 text-turquoise-500">
          {{ banner.title }}
        </div>
        <div class="pb-16 text-subtitle-2 text-turquoise-400">
          {{ banner.description }}
        </div>
        <ButtonWrapper :secondary-first="true" :buttons="banner.buttons || []" />
      </div>
      <StrapiImage
        image-class="ml-auto h-full object-left lg:mr-auto"
        v-if="banner.image"
        :src="banner.image.url"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { BlockThreeInfoBlocks } from '~/models/page-block-components'
import MarkdownRenderer from '~/components/ui/MarkdownRenderer.vue'
import ButtonWrapper from '~/components/ui/buttons/ButtonWrapper.vue'
import StrapiImage from '~/components/ui/StrapiImage.vue'

const props = withDefaults(defineProps<BlockThreeInfoBlocks>(), {})
</script>

<style scoped></style>
