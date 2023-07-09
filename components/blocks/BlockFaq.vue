<template>
  <section class="container max-w-3xl py-20 xl:py-16">
    <h2 class="text-center text-headline-2 text-turquoise-500 xl:text-headline-3">
      {{ title }}
    </h2>
    <div class="space-y-2 pt-16">
      <div
        v-for="(item, index) in entries"
        :key="index"
        @click="toggle(index)"
        class="cursor-pointer rounded-lg border border-neutral-300 bg-neutral-200 p-4"
      >
        <div class="flex items-center justify-between">
          <h3 class="text-body-2">{{ item.question }}</h3>
          <svg-icon
            :class="isOpen(index) ? 'rotate-180 transform' : ''"
            class="icon text-[24px] transition-transform"
            name="action/arrow-down"
          />
        </div>
        <transition
          name="accordion-item"
          @enter="startTransition"
          @before-leave="startTransition"
          @after-leave="endTransition"
        >
          <div class="h-0 overflow-hidden" v-show="isOpen(index)">
            <div class="py-2 text-body-2 text-neutral-600">
              <MarkdownRenderer :markdown="item.answer || ''" />
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import MarkdownRenderer from '~/components/ui/MarkdownRenderer.vue'
import { BlockFaq } from '~/models/page-block-components'

const props = withDefaults(defineProps<BlockFaq>(), {})

const openIndex = ref(-1)

const toggle = (index: number) => {
  if (openIndex.value === index) {
    openIndex.value = -1
  } else {
    openIndex.value = index
  }
}

const isOpen = (index: number) => {
  return openIndex.value === index
}

const startTransition = (el) => {
  el.style.height = el.scrollHeight + 'px'
}
const endTransition = (el) => {
  el.style.height = ''
}
</script>

<style lang="sass">
.accordion-item-enter-active, .accordion-item-leave-active
  will-change: height
  transition: height .1s ease
.accordion-item-enter, .accordion-item-leave-to
  height: 0 !important
</style>
