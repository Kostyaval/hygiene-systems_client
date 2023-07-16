<template>
  <div class="service-frequencies container max-w-5xl py-20">
    <h2
      v-if="title"
      class="pb-20 text-center text-headline-2 text-turquoise-500 xl:text-headline-3 lg:pb-14"
    >
      {{ title }}
    </h2>
    <div
      class="grid grid-cols-3 justify-center justify-items-center gap-6 lg:block lg:space-y-8"
    >
      <template v-for="(item, index) in services" :key="index">
        <div
          v-if="item"
          class="rounded-xl border px-6 pb-32 pt-16 lg:pb-6 lg:pt-6"
          :class="colorSchema(item.recommended, index).border"
        >
          <h3
            class="text-headline-4"
            :class="colorSchema(item.recommended, index).heading"
          >
            {{ item.title }}
          </h3>
          <div class="pt-5">
            <MarkdownRenderer
              class="markdown text-body-2"
              :class="colorSchema(item.recommended, index).description"
              :markdown="item.description || ''"
            />
          </div>
          <div class="flex flex-wrap gap-2 pt-10">
            <div
              v-if="item.tags"
              class="inline-flex rounded-full px-2 py-2 text-button-s leading-none"
              :class="colorSchema(item.recommended, index).tags"
              v-for="(tag, tagIndex) in item.tags.split(',')"
              :key="`${tagIndex}-tag`"
            >
              {{ tag }}
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BlockServiceFrequencies } from '~/models/page-block-components'
import SubBlockInfoSection from '~/components/blocks/sub-blocks/SubBlockInfoSection.vue'
import MarkdownRenderer from '~/components/ui/MarkdownRenderer.vue'

const props = withDefaults(defineProps<BlockServiceFrequencies>(), {})

const theme = {
  default: {
    border: 'border-neutral-400',
    heading: 'text-neutral-600',
    description: 'text-neutral-600',
    tags: 'bg-neutral-300 text-neutral-600',
  },
  recommended: {
    border: 'border-orange-500 scale-105 lg:scale-100',
    heading: 'text-turquoise-500',
    description: 'text-neutral-600',
    tags: 'bg-orange-100 text-orange-500',
  },
  primary: {
    border: 'border-turquoise-500',
    heading: 'text-turquoise-500',
    description: 'text-turquoise-500',
    tags: 'bg-turquoise-200 text-turquoise-500',
  },
}
const colorSchema = (recommended = false, index = 0) => {
  if (recommended) {
    return theme['recommended']
  }
  if (index > 1) {
    return theme['primary']
  }

  return theme['default']
}
</script>

<style scoped lang="scss">
.service-frequencies {
  &::v-deep(.markdown) {
    ul {
      @apply list-disc pl-3.5;
    }
  }
}
</style>
