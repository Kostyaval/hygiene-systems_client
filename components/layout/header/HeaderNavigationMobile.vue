<template>
  <div class="container bg-neutral-200 backdrop-filter">
    <div
      class="grid h-12 grid-cols-[minmax(auto,1fr),minmax(auto,2fr),minmax(auto,1fr)] items-center"
    >
      <nuxt-link to="/" class="w-10">
        <img :src="logo.url" :alt="logo.alternativeText" />
      </nuxt-link>
      <div class="col-start-2 flex w-full items-center justify-center">
        <TheButton variant="primary" color-background="orange" size="small">
          Contact Us
        </TheButton>
      </div>
      <div class="flex items-center justify-end">
        <button
          class="text-turquoise-500 flex h-10 w-10 items-center justify-center"
          @click="mobileAsideTriggered(true)"
        >
          <svg-icon name="action/burger" class="icon text-[32px]" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheButton from '~/components/ui/TheButton.vue'

const emit = defineEmits(['mobileAsideTriggered'])

const mobileAsideTriggered = (value: boolean) => {
  emit('mobileAsideTriggered', value)
}
defineProps({
  logo: {
    type: Object as () => {
      alternativeText: string
      url: string
    },
    required: true,
  },
})
</script>

<style scoped></style>
