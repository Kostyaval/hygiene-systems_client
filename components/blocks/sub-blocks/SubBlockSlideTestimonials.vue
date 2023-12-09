<template>
  <div
    class="container grid h-full grid-cols-12 rounded-lg bg-neutral-300 pb-14 pl-14 lg:grid-rows-[auto_1fr] lg:px-6"
  >
    <div class="relative col-span-5 lg:col-span-12">
      <div
        v-if="image"
        class="relative mx-auto mt-14 h-[250px] w-[250px] rounded-full xl:mt-24 xl:h-[190px] xl:w-[190px] lg:mt-4 lg:h-[150px] lg:w-[150px]"
      >
        <img
          class="absolute -left-10 -top-6 lg:-left-12 lg:top-0 lg:max-w-[75px]"
          src="/media/svg/testimonial-quote.svg"
          alt="testimonial-quote"
        />
        <StrapiImage
          class="block h-full w-full overflow-hidden rounded-full"
          :src="image.url"
          :parent-section="parentSection"
          :lazy-fallback="true"
        ></StrapiImage>
      </div>
    </div>
    <div
      class="col-span-7 max-w-lg pt-20 xl:pt-12 lg:col-span-12 lg:flex lg:flex-col lg:pt-2"
    >
      <h3 v-if="title" class="text-headline-3 text-turquoise-500">
        {{ title }}
      </h3>
      <p v-if="subtitle" class="pt-6 text-subtitle-2 text-neutral-600">
        {{ subtitle }}
      </p>
      <p v-if="description" class="pt-4 text-body-2 text-neutral-600">
        {{ description }}
      </p>
      <!--      <TheButton v-if="cta" class="mt-16" :to="cta.href" tag="nuxt-link">-->
      <!--        {{ cta.label }}-->
      <!--      </TheButton>-->
      <!--      <template v-else>-->
      <!--        <slot name="button" />-->
      <!--      </template>-->
    </div>
  </div>
</template>
<script setup lang="ts">
import StrapiImage from '~/components/ui/StrapiImage.vue'
import TheButton from '~/components/ui/buttons/TheButton.vue'
import type { SubBlockSliderSlide } from '~/models/page-block-components'

const props = withDefaults(
  defineProps<SubBlockSliderSlide & { parentSection: HTMLElement }>(),
  {}
)
</script>

<style scoped></style>
