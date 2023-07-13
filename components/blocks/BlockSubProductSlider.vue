<template>
  <div class="bg-neutral-200">
    <div
      ref="blockSubSlider"
      class="block-slider container relative overflow-hidden pb-28 pt-20"
    >
      <div class="flex flex-wrap items-center gap-4 pb-16">
        <div class="text-headline-2 text-turquoise-500 xl:text-headline-3">
          {{ title }}
        </div>
        <TheButton size="small" to="/products" variant="secondary">
          View All
        </TheButton>
      </div>
      <Swiper
        class="!overflow-visible"
        :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
        :slides-per-view="1.25"
        :space-between="24"
        :resize-observer="true"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
        :breakpoints="{
          460: {
            slidesPerView: 1.5,
          },
          660: {
            slidesPerView: 2,
          },
          860: {
            slidesPerView: 3,
          },
          960: {
            slidesPerView: 4,
          },
        }"
        :pagination="{
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        }"
        :navigation="{
          nextEl: '.block-product-cards-slider-next',
          prevEl: '.block-product-cards-slider-prev',
        }"
      >
        <SwiperSlide v-for="(item, index) in slides" :key="index">
          <BlockSubProductCard
            :parent-section="blockSubSlider"
            class="h-full"
            v-bind="item"
          >
          </BlockSubProductCard>
        </SwiperSlide>
      </Swiper>
      <button
        class="block-product-cards-slider-next absolute right-5 z-[1] flex h-12 w-12 items-center justify-center rounded-full bg-turquoise-200 text-[24px] text-turquoise-800 absolute-y-center lg:hidden"
      >
        <svg-icon class="icon" name="action/slider-arrow-right" />
      </button>
      <button
        class="block-product-cards-slider-prev absolute left-5 z-[1] flex h-12 w-12 items-center justify-center rounded-full bg-turquoise-200 text-[24px] text-turquoise-800 absolute-y-center lg:hidden"
      >
        <svg-icon class="icon" name="action/slider-arrow-left" />
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { BlockSubProductSlider } from '~/models/page-block-components'
import BlockSubProductCard from '~/components/blocks/BlockSubProductCard.vue'
import TheButton from '~/components/ui/buttons/TheButton.vue'

const props = withDefaults(defineProps<BlockSubProductSlider>(), {})
const blockSubSlider = ref(null)
const slides = props.cards
  .sort((el) => (el.Rank || 0) - (el.Rank || 0))
  .flatMap((el) => el.entries)
</script>
<style scoped lang="scss">
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
