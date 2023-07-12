<template>
  <div ref="parentElement" class="block-slider relative pb-28 pt-14">
    <Swiper
      :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
      :slides-per-view="1.25"
      :space-between="24"
      :centered-slides="true"
      :resize-observer="true"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :pagination="{
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      }"
      :navigation="{
        nextEl: `.block-slider-next-${id}`,
        prevEl: `.block-slider-prev-${id}`,
      }"
    >
      <SwiperSlide v-for="slide in slides">
        <component
          :is="slideComponent"
          :key="slide"
          v-bind="{ ...slide, parentSection: parentElement }"
        >
          <template #button>
            <TheButton
              class="mt-16 lg:mb-6"
              v-if="commonCta"
              :to="commonCta.href"
              tag="nuxt-link"
            >
              {{ commonCta.label }}
            </TheButton>
          </template>
        </component>
      </SwiperSlide>

      <div class="swiper-pagination" />
    </Swiper>
    <button
      :class="`block-slider-next-${id}`"
      class="block-slider-next absolute right-5 z-[1] flex h-12 w-12 items-center justify-center rounded-full bg-turquoise-200 text-[24px] text-turquoise-800 absolute-y-center lg:hidden"
    >
      <svg-icon class="icon" name="action/slider-arrow-right" />
    </button>
    <button
      :class="`block-slider-prev-${id}`"
      class="block-slider-prev absolute left-5 z-[1] flex h-12 w-12 items-center justify-center rounded-full bg-turquoise-200 text-[24px] text-turquoise-800 absolute-y-center lg:hidden"
    >
      <svg-icon class="icon" name="action/slider-arrow-left" />
    </button>
  </div>
</template>
<script setup lang="ts">
import { BlockSlider } from '~/models/page-block-components'
import TheButton from '~/components/ui/buttons/TheButton.vue'
import SubBlockSlide from '~/components/blocks/sub-blocks/SubBlockSlide.vue'
import SubBlockSlideTestimonials from '~/components/blocks/sub-blocks/SubBlockSlideTestimonials.vue'
import { uniqueId } from '~/utils/helpers'

const parentElement = ref(null)
const props = withDefaults(defineProps<BlockSlider>(), {})

let slideComponentName = ''
switch (props.componentView) {
  case 'testimonials':
    slideComponentName = 'SubBlockSlideTestimonials'
    break
  case 'common':
    slideComponentName = 'SubBlockSlide'
    break
}

const slideComponent = defineAsyncComponent(
  () => import(`~/components/blocks/sub-blocks/${slideComponentName}.vue`)
)

const moreThanTowSlide = (props.slides?.length || 0) > 2
</script>

<style lang="scss" scoped>
.swiper-pagination {
  --swiper-pagination-color: #fd8407;
  @apply static mt-5;
}
.block-slider {
  .swiper-slide {
    @apply h-auto;
  }
  &::v-deep(.swiper-button-disabled) {
    opacity: 0.4;
    cursor: inherit;
  }
}
</style>
