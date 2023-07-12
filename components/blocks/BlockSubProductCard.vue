<template>
  <div
    @click="openSubProductModal"
    class="group block max-w-[336px] rounded-lg bg-neutral-100 p-2"
  >
    <div
      v-if="image"
      class="relative overflow-hidden rounded-md bg-neutral-200 pb-[72.5%] text-center"
    >
      <StrapiImage
        image-class="mx-auto group-hover:scale-105 transition-transform absolute absolute-cover object-cover"
        :src="image.url"
        :modifiers="{ width: 212 }"
        :lazy-fallback="true"
        :parent-section="parentSection"
      >
      </StrapiImage>
    </div>
    <div class="px-4 pb-6">
      <div class="pt-5 text-subtitle-2 capitalize text-neutral-600">
        {{ title }}
      </div>
      <div class="min-h-[85px] pt-3 text-body-2 text-neutral-600">
        {{ description }}
      </div>
      <div v-if="tags" class="flex flex-wrap items-center gap-2">
        <div
          class="inline-flex rounded-full bg-neutral-200 px-2 py-2 text-body-2 leading-none text-neutral-600"
          v-for="(tag, index) in tags.split(',')"
          :key="`${index}-tag`"
        >
          {{ tag }}
        </div>
        <div class="inline-flex space-x-1">
          <template v-for="(item, index) in colors">
            <div
              v-if="item"
              :key="index"
              class="h-6 w-6 rounded-full border border-neutral-400"
              :style="`background-color: ${item.color};`"
            ></div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { BlockSubProductCard } from '~/models/page-block-components'
import StrapiImage from '~/components/ui/StrapiImage.vue'
import { $modal } from '~/components/ui/modals'
import ModalSubProductPage from '~/components/ui/modals/content/ModalSubProductPage.vue'

const props = withDefaults(
  defineProps<BlockSubProductCard & { parentSection: HTMLElement | null }>(),
  {}
)
const openSubProductModal = () => {
  $modal
    .open(ModalSubProductPage, {
      title: props.detailsTitle,
      subtitle: props.detailsSubtitle,
      description: props.detailsDescription,
      image: props.image,
    })
    .then()
}
</script>
<style scoped></style>
