<template>
  <div :class="backgroundClass" class="overflow-hidden rounded-xl">
    <div class="relative w-full" :style="imageRatio()">
      <StrapiImage
        image-class="absolute absolute-cover object-cover"
        v-if="image"
        :src="image.url"
        :lazy-fallback="true"
      />
    </div>
    <div v-if="title || description" class="px-6 py-12">
      <div class="text-headline-4 xl:text-headline-3" :class="colorTitleClass">
        {{ title }}
      </div>
      <MarkdownRenderer
        class="pt-4 text-body-2"
        :class="colorClass"
        :markdown="description || ''"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { InfoSection } from '~/models/single-types'
import getColorByName from '~/components/ui/helpers/get-color-by-name'
import StrapiImage from '~/components/ui/StrapiImage.vue'
import MarkdownRenderer from '~/components/ui/MarkdownRenderer.vue'

const props = withDefaults(defineProps<InfoSection>(), {})

const colorClass = getColorByName(props.backgroundColor, 'text')
const backgroundClass = getColorByName(props.backgroundColor, 'bg')
const colorTitleClass = getColorByName(props.backgroundColor, 'title')
const imageRatio = () => {
  switch (props.imageSize) {
    case 'small':
      return `padding-bottom: 65.5%`
    case 'large':
      return `padding-bottom: 96%`
  }
}
</script>

<style scoped></style>
