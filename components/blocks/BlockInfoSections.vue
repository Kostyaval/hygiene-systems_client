<template>
  <div class="py-20" :class="`${backgroundClass}`">
    <h2
      v-if="title"
      class="pb-10 text-center text-headline-2 text-turquoise-500 xl:text-headline-3"
    >
      {{ title }}
    </h2>
    <div class="container grid max-w-5xl grid-cols-2 gap-6">
      <div class="space-y-6">
        <SubBlockInfoSection
          v-for="(item, index) in sectionFirstColumnTow"
          v-bind="item"
          :key="index"
        ></SubBlockInfoSection>
      </div>
      <div class="space-y-6">
        <SubBlockInfoSection
          v-for="(item, index) in sectionSecondColumnTow"
          v-bind="item"
          :key="index"
        ></SubBlockInfoSection>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BlockInfoSections } from '~/models/page-block-components'
import SubBlockInfoSection from '~/components/blocks/sub-blocks/SubBlockInfoSection.vue'
import getColorVar from '~/components/ui/helpers/get-color-variable'

const props = withDefaults(defineProps<BlockInfoSections>(), {})

const sectionFirstColumnTow = []
const sectionSecondColumnTow = []
const backgroundClass =
  props.backgroundColor === 'neutral' ? 'bg-neutral-200' : 'bg-neutral-100'
props.sections?.forEach((el, index) => {
  if ((index + 1) % 2) {
    sectionFirstColumnTow.push(el)
  } else {
    sectionSecondColumnTow.push(el)
  }
})
</script>

<style scoped></style>
