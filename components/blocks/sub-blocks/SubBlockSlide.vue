<template>
  <div
    class="grid h-full grid-cols-12 rounded-lg bg-neutral-300 pl-14 lg:grid-rows-[auto_1fr] lg:pl-0"
  >
    <div
      class="col-span-6 max-w-sm pb-12 pt-14 lg:col-span-12 lg:flex lg:flex-col lg:px-6 lg:pt-2"
    >
      <h3 v-if="title" class="text-headline-3 text-turquoise-500">
        {{ title }}
      </h3>
      <p v-if="subtitle" class="pt-6 text-subtitle-2 text-neutral-600">
        {{ subtitle }}
      </p>
      <div v-if="description" class="pt-4 text-body-2 text-neutral-600">
        <MarkdownRenderer :markdown="description || ''"></MarkdownRenderer>
      </div>
      <TheButton v-if="cta" class="mt-16" :to="cta.href" tag="nuxt-link">
        {{ cta.label }}
      </TheButton>
      <template v-else>
        <slot name="button" />
      </template>
    </div>
    <div
      class="relative col-span-6 overflow-hidden lg:order-first lg:col-span-12 lg:h-[250px]"
    >
      <StrapiImage
        v-if="image"
        :image-class="imageClassPosition[imagePosition || 'default']"
        :src="image.url"
        :lazy-fallback="true"
        :parent-section="parentSection"
      ></StrapiImage>
    </div>
  </div>
</template>
<script setup lang="ts">
import StrapiImage from '~/components/ui/StrapiImage.vue'
import TheButton from '~/components/ui/buttons/TheButton.vue'
import { SubBlockSliderSlide } from '~/models/page-block-components'
import MarkdownRenderer from '~/components/ui/MarkdownRenderer.vue'

const props = withDefaults(
  defineProps<SubBlockSliderSlide & { parentSection: HTMLElement }>(),
  {}
)

const imageClassPosition = {
  default: 'object-cover h-full m-full',
  middle: 'object-cover max-h-full m-auto',
  topRight:
    'object-cover max-h-[110%] m-auto absolute -right-[13%] -top-[13%] xl:-right-[10px] xl:-top-[10px] lg:top-auto lg:right-auto  lg:bottom-0 lg:max-h-none lg:static lg:h-full',
  bottomRight:
    'object-cover max-h-[110%] m-auto absolute -right-[13%] -bottom-[13%] xl:-right-[10px] xl:-bottom-[10px] lg:right-auto lg:bottom-auto lg:max-h-none  lg:static lg:h-full',
}
</script>

<style scoped></style>
