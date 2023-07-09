<template>
  <div class="block-comparison-table container max-w-5xl overflow-y-auto py-20">
    <div
      class="grid grid-cols-[216px_1fr] border-b border-b-neutral-400 pb-8 text-subtitle-2 lg:text-button-m md:grid-cols-[130px_1fr] md:text-button-s"
    >
      <div class="text-neutral-600">
        {{ comparisonTitle }}
      </div>
      <div class="flex justify-between gap-2">
        <div
          class="text-center text-turquoise-500"
          :style="{ 'flex-basis': `${100 / comparisonHeadings?.length}%` }"
          v-for="(item, index) in comparisonHeadings"
          :key="index"
        >
          <markdown-renderer v-if="item" :markdown="item.title || ''" />
        </div>
      </div>
    </div>
    <div class="pt-8">
      <div
        class="grid grid-cols-[216px_1fr] items-center py-2 md:grid-cols-[130px_1fr]"
        v-for="item in row"
      >
        <div class="text-body-2">
          {{ item.title }}
        </div>
        <div class="flex items-center justify-between">
          <div
            class="text-center text-[36px]"
            v-for="(point, pointIndex) in item.toggles"
            :style="{ 'flex-basis': `${100 / comparisonHeadings?.length}%` }"
            :key="`${pointIndex}-point`"
          >
            <svg-icon
              class="icon mx-auto"
              :name="`common/${point.status ? 'include' : 'not-include'}`"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BlockComparisonTable } from '~/models/page-block-components'
import MarkdownRenderer from '~/components/ui/MarkdownRenderer.vue'

const props = withDefaults(defineProps<BlockComparisonTable>(), {})
</script>

<style scoped lang="scss">
.block-comparison-table {
  &::v-deep(strong) {
    color: #fd8407;
  }
}
</style>
