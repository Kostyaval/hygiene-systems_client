<template>
  <transition
    enter-active-class="transition-transform duration-[0.5s]"
    leave-active-class="transition-transform duration-[0.5s]"
    enter-from-class="translate-x-full xl:-translate-x-0 xl:translate-y-full"
    leave-to-class="translate-x-full xl:-translate-x-0 xl:translate-y-full"
    name="common-modal"
    appear
  >
    <div
      class="absolute bottom-0 right-0 top-0 flex h-full w-full max-w-4xl flex-col bg-neutral-200 xl:top-auto xl:max-h-[80%] xl:max-w-full xl:rounded-tl-2xl xl:rounded-tr-2xl"
      aria-modal="true"
    >
      <header v-if="!!$slots.header">
        <slot name="header"></slot>
      </header>
      <div ref="containerRef" class="overflow-y-auto">
        <div class="safe-bottom">
          <slot></slot>
        </div>
      </div>
      <slot name="footer"></slot>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
const { $bodyScrollLock } = useNuxtApp()
import { $modal } from '~/components/ui/modals'

const containerRef = ref(null)

onMounted(() => {
  if (containerRef.value) {
    $bodyScrollLock.disableBodyScroll(containerRef.value)
  }
})

onUnmounted(() => {
  if ($modal.modals.value.length === 0) {
    $bodyScrollLock.clearAllBodyScrollLocks()
  }
})
</script>

<style lang="sass">
.common-modal-enter-active, .common-modal-leave-active
  transition: transform .5s ease

.common-modal-enter-from, .common-modal-leave-to
  transform: translateX(100%)
</style>
