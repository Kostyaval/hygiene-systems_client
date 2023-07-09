<template>
  <div class="container grid max-w-5xl grid-cols-2 gap-6">
    <div class="grid items-start gap-6">
      <SubBlockInfoSection
        v-for="(item, index) in sectionFirstColumnTow"
        v-bind="item"
        :key="index"
      ></SubBlockInfoSection>
    </div>
    <div class="grid items-start gap-6">
      <SubBlockInfoSection
        v-for="(item, index) in sectionSecondColumnTow"
        v-bind="item"
        :key="index"
      ></SubBlockInfoSection>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BlockInfoSections } from '~/models/page-block-components'
import SubBlockInfoSection from '~/components/blocks/sub-blocks/SubBlockInfoSection.vue'

const props = withDefaults(defineProps<BlockInfoSections>(), {})

const sectionFirstColumnTow = []
const sectionSecondColumnTow = []

props.sections?.forEach((el, index) => {
  if ((index + 1) % 2) {
    sectionFirstColumnTow.push(el)
  } else {
    sectionSecondColumnTow.push(el)
  }
})
</script>

<style scoped></style>
