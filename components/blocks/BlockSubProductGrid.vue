<template>
  <div class="bg-neutral-200 py-32 xl:py-20">
    <h2
      v-if="title"
      class="container pb-10 text-center text-headline-1 text-turquoise-500 xl:text-headline-2 lg:pb-6 lg:text-headline-3"
    >
      {{ title }}
    </h2>
    <div
      v-if="description"
      class="container text-center text-headline-4 text-neutral-700 lg:text-subtitle-2"
    >
      {{ description }}
    </div>
    <div
      class="container grid grid-cols-[repeat(auto-fill,minmax(275px,1fr))] justify-items-center gap-6 pt-20 lg:pt-12"
    >
      <template v-for="(item, index) in subProducts" :key="index">
        <BlockSubProductCard class="h-full w-full" v-bind="item"> </BlockSubProductCard>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { BlockSubProductsGrid } from '~/models/page-block-components'
import BlockSubProductCard from '~/components/blocks/BlockSubProductCard.vue'

const props = withDefaults(defineProps<BlockSubProductsGrid>(), {})

const subProducts = props.cards
  .sort((el) => (el.Rank || 0) - (el.Rank || 0))
  .flatMap((el) => el.entries)
</script>

<style scoped></style>
