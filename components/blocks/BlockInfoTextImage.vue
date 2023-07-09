<template>
  <div class="relative overflow-hidden">
    <StrapiImage
      v-if="backgroundImage"
      image-class="absolute absolute-cover object-cover z-[0]"
      :src="backgroundImage.url"
    />
    <div :class="blockClass" class="relative z-[1] bg-cover bg-right-top">
      <div
        class="container grid grid-cols-12 gap-6 py-10 lg:grid-cols-6"
        :class="containerClass"
      >
        <div class="col-span-6 flex flex-col items-center justify-center">
          <div class="max-w-md">
            <h2
              v-if="title"
              :class="themeColors.heading"
              class="pb-5 text-headline-2 xl:text-headline-3"
            >
              {{ title }}
            </h2>
            <h3
              v-if="subtitle"
              :class="themeColors.subtitle"
              class="pt-10 text-headline-4 xl:text-subtitle-2"
            >
              {{ subtitle }}
            </h3>
            <div
              v-if="description"
              :class="themeColors.description"
              class="pt-5 text-body-1 xl:text-body-2"
            >
              <MarkdownRenderer :markdown="description" />
            </div>
            <div v-if="buttons" class="pt-14">
              <ButtonWrapper
                :white-color-theme="whiteTextTheme"
                :buttons="buttons"
              ></ButtonWrapper>
            </div>
          </div>
        </div>
        <div
          v-if="hoopPlaceholder"
          class="relative col-span-6 flex min-h-[320px] items-center lg:order-first lg:pt-10"
        >
          <div
            class="floating-image-gradient absolute h-full w-[200%] rounded-full absolute-center"
          ></div>
          <FloatingImage
            class="ml-[20%] lg:ml-[35%] lg:w-[60%] md:ml-[25%] md:w-full"
          />
        </div>
        <div
          v-else-if="image"
          :class="{ 'order-first': imagePosition === 'left' }"
          class="col-span-6 flex items-center justify-center lg:order-first"
        >
          <StrapiImage
            class="overflow-hidden rounded-2xl"
            :src="image.url"
            :modifiers="{ width: 700 }"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { BlockInfoTextImage } from '~/models/page-block-components'
import ButtonWrapper from '~/components/ui/buttons/ButtonWrapper.vue'
import StrapiImage from '~/components/ui/StrapiImage.vue'
import getColorVar from '~/components/ui/helpers/get-color-variable'
import FloatingImage from '~/components/ui/FloatingImage.vue'
import MarkdownRenderer from '~/components/ui/MarkdownRenderer.vue'

const props = withDefaults(defineProps<BlockInfoTextImage>(), {})
console.log(props)

// const backgroundImage = props.backgroundImage
//   ? `linear-gradient(90deg, rgba(0, 0, 0, 0.1) 23.12%, rgba(0, 0, 0, 0.2) 100%), url('${props.backgroundImage.url}')`
//   : ''

const blockClass = `${!props.backgroundImage ? getColorVar(props.color?.color) : ''}`
const containerClass = `${props.imagePosition === 'right-overflow' ? 'pr-0' : ''} ${
  !props.image ? 'py-20' : ''
}`
const themeColors = props.whiteTextTheme
  ? {
      heading: 'text-neutral-200',
      subtitle: 'text-neutral-200',
      description: 'text-neutral-100',
    }
  : {
      heading: 'text-turquoise-500',
      subtitle: 'text-neutral-700',
      description: 'text-neutral-600',
    }
</script>

<style scoped>
.floating-image-gradient {
  background: radial-gradient(
    50% 50% at 50% 50%,
    #9fe8ed 0%,
    rgba(159, 232, 237, 0) 100%
  );
}
</style>
