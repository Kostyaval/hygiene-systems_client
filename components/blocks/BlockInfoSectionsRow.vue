<template>
  <div class="py-20">
    <h2
      v-if="title"
      class="pb-20 text-center text-headline-2 text-turquoise-500 xl:text-headline-3 lg:pb-14"
    >
      {{ title }}
    </h2>
    <div
      class="container grid grid-cols-[repeat(auto-fill,minmax(275px,456px))] justify-center justify-items-center gap-6"
    >
      <SubBlockInfoSection
        v-for="(item, index) in sections"
        v-bind="item"
        :key="index"
      ></SubBlockInfoSection>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BlockInfoSectionsRow } from '~/models/page-block-components'
import SubBlockInfoSection from '~/components/blocks/sub-blocks/SubBlockInfoSection.vue'

const props = withDefaults(defineProps<BlockInfoSectionsRow>(), {})
</script>

<style scoped></style>
