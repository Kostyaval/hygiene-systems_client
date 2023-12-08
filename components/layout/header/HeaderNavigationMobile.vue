<template>
  <div class="container bg-neutral-200/60 backdrop-blur">
    <div
      class="grid h-12 grid-cols-[minmax(auto,1fr),minmax(auto,2fr),minmax(auto,1fr)] items-center"
    >
      <nuxt-link v-if="logo" to="/" class="w-10">
        <img :src="logo.url" :alt="logo.alternativeText" />
      </nuxt-link>
      <div class="col-start-2 flex w-full items-center justify-center">
        <TheButton
          @click="openContactModal"
          variant="primary"
          color-background="orange"
          size="small"
        >
          Contact Us
        </TheButton>
      </div>
      <div class="flex items-center justify-end">
        <button
          class="flex h-10 w-10 items-center justify-center text-turquoise-500"
          @click="mobileAsideTriggered(true)"
        >
          <svg-icon name="action/burger" class="icon text-[32px]" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheButton from '~/components/ui/buttons/TheButton.vue'
import type { ImageFile } from '~/models/strapi-types/auto-generated'

const emit = defineEmits(['mobileAsideTriggered', 'openContactModal'])

const mobileAsideTriggered = (value: boolean) => {
  emit('mobileAsideTriggered', value)
}
const openContactModal = () => {
  emit('openContactModal')
}
defineProps({
  logo: {
    type: Object as () => ImageFile | null,
    required: true,
  },
})
</script>

<style scoped></style>
