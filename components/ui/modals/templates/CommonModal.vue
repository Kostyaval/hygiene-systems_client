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
      id="modal-scroll-container"
      class="absolute top-0 right-0 bottom-0 h-full w-full max-w-4xl overflow-y-auto bg-neutral-100 xl:top-auto xl:max-h-[80%] xl:max-w-full"
      aria-modal="true"
    >
      <div class="m-auto">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts"></script>

<style lang="sass">
.common-modal-enter-active, .common-modal-leave-active
  transition: transform .5s ease

.common-modal-enter-from, .common-modal-leave-to
  transform: translateX(100%)
</style>
