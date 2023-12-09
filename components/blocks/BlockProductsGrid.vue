<template>
  <div class="py-32 xl:py-20">
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
      class="container grid grid-cols-[repeat(auto-fill,minmax(275px,1fr))] justify-items-center gap-6 pt-20 lg:pt-6"
    >
      <template v-for="(item, index) in sortedProducts" :key="index">
        <BlockProductCard
          class="h-full w-full"
          navigation-title=""
          :id="item.id"
          :product-card="item.productCard"
          :page-url="item.pageUrl"
        >
        </BlockProductCard>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import BlockProductCard from '~/components/blocks/BlockProductCard.vue'
import type { ProductCardsState } from '~/models/single-types'
import type { BlockProductsGrid } from '~/models/page-block-components'

const products = useState<ProductCardsState>('productCards')
const props = withDefaults(defineProps<BlockProductsGrid>(), {})

const sortedProducts = computed(() => products.value.sort((a, b) => +a.Rank - +b.Rank))
</script>

<style scoped></style>
