<template>
  <div
    :style="{ backgroundImage: background }"
    :class="[backgroundClassColor]"
    class="relative"
  >
    <StrapiImage
      class="object-cover"
      image-class="absolute absolute-cover object-cover z-[-1] object-right-top"
      v-if="backgroundImage"
      :src="backgroundImage.url"
      :breakpoints="[
        {
          px: 500,
          modifiers: { resize: '400x800', fit: 'cover', position: 'right top' },
        },
      ]"
    />
    <div
      class="container grid min-h-[calc(100vh_-_var(--header-height))] grid-cols-12 overflow-hidden pb-20 pt-8 lg:grid-cols-6 lg:pt-0"
      :class="{ 'xl:bg-neutral-900/50': !!backgroundImage }"
    >
      <div class="col-span-6 flex flex-col items-center justify-center">
        <div class="max-w-md">
          <h1
            v-if="title"
            :class="themeColors.heading"
            class="pb-5 text-headline-2 xl:text-headline-4"
          >
            {{ title }}
          </h1>
          <div v-if="tooltip" class="mb-6">
            <Tooltip :title="tooltip.title" :hint="tooltip.description"></Tooltip>
          </div>
          <h3
            v-if="subtitle"
            :class="themeColors.subtitle"
            class="pt-6 text-subtitle-1 xl:text-subtitle-2"
          >
            {{ subtitle }}
          </h3>
          <p
            v-if="description"
            :class="themeColors.description"
            class="pt-5 text-body-1 xl:text-body-2"
          >
            {{ description }}
          </p>
          <div v-if="buttons" class="pt-14">
            <ButtonWrapper
              :white-color-theme="textColorTheme"
              :buttons="buttons"
              width-full-media="md"
            ></ButtonWrapper>
          </div>
          <div class="mt-32 lg:hidden" v-if="sustainableActive">
            <SustainableTags :tags="sustainableTagsArray" />
          </div>
        </div>
      </div>
      <div
        v-if="image"
        class="col-span-6 flex items-center justify-center lg:order-first lg:h-[22rem] lg:items-end"
      >
        <StrapiImage :src="image.url" :modifiers="{ width: 700 }" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BlockHeroBanner } from '~/models/page-block-components'
import getColorVar from '~/components/ui/helpers/get-color-variable'
import TheButton from '~/components/ui/buttons/TheButton.vue'
import StrapiImage from '~/components/ui/StrapiImage.vue'
import Tooltip from '~/components/ui/Tooltip.vue'
import SustainableTags from '~/components/common/SustainableTags.vue'
import ButtonWrapper from '~/components/ui/buttons/ButtonWrapper.vue'
const props = withDefaults(defineProps<BlockHeroBanner>(), {})

const background = props.backgroundImage
  ? `linear-gradient(90deg, rgba(0, 0, 0, 0.1) 23%, rgba(0, 0, 0, 0.2) 100%);`
  : ''

const backgroundClassColor = !props.backgroundImage
  ? getColorVar(props.backgroundColor?.color)
  : ''

const themeColors = props.textColorTheme
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

const sustainableTagsArray: string[] = props.sustainableTags
  ? props.sustainableTags.split(',').filter(Boolean) || []
  : []
</script>
