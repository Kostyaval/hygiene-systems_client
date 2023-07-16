<template>
  <div class="block-navigation-sections container grid grid-cols-2 md:grid-cols-1 gap-6 py-28">
    <template v-for="(item, index) in banner" :key="index">
      <div
        v-if="item"
        class="block-navigation-sections__item relative grid grid-cols-2 overflow-hidden rounded-2xl bg-neutral-200 xl:grid-cols-1"
      >
        <div class="relative z-[1] max-w-xl py-12 pl-12 xl:py-8 xl:pl-4 xl:pr-4">
          <div v-if="item.title" class="pb-8 text-headline-4 text-turquoise-500">
            {{ item.title }}
          </div>
          <div class="pb-16 text-body-1 text-neutral-700">
            {{ item.description }}
          </div>
          <ButtonWrapper
            :orange-color-theme="true"
            :secondary-first="true"
            :buttons="item.buttons || []"
          />
        </div>
        <StrapiImage
          class="relative z-[1]"
          image-class="ml-auto h-full object-cover object-left lg:mr-auto"
          v-if="item.image"
          :src="item.image.url"
        />
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import { BlockNavigationSections } from '~/models/page-block-components'

const props = withDefaults(defineProps<BlockNavigationSections>(), {})

import StrapiImage from '~/components/ui/StrapiImage.vue'
import ButtonWrapper from '~/components/ui/buttons/ButtonWrapper.vue'
</script>

<style scoped lang="scss">
.block-navigation-sections {
  &__item:after {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      50% 50% at 50% 50%,
      #9fe8ed 0%,
      rgba(159, 232, 237, 0) 100%
    );
    border-radius: 100%;
  }
}
</style>
