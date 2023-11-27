<template>
  <aside class="fixed z-20 bg-neutral-200 absolute-cover">
    <div
      class="container flex h-full flex-col overflow-y-auto pb-10 pt-12"
      @click="closeAside($event)"
    >
      <header class="flex items-center justify-between">
        <nuxt-link v-if="logo" to="/">
          <img :src="logo.url" :alt="logo.alternativeText" />
        </nuxt-link>
        <button
          class="flex h-9 w-9 items-center justify-center text-turquoise-500"
          @click="mobileAsideTriggered(false)"
        >
          <svg-icon name="action/close-round" class="icon text-[24px]" />
        </button>
      </header>
      <div
        v-if="promoText"
        class="pt-7 text-center text-tag uppercase text-turquoise-500"
      >
        <span v-for="(item, index) in promoText" :key="index">
          {{ item }}<span v-if="index < promoText.length - 1" class="px-2"> | </span>
        </span>
      </div>
      <div class="pt-7">
        <SearchInput />
      </div>
      <div class="pt-6">
        <nuxt-link
          v-for="(item, index) in navigation"
          :key="index"
          :href="`/${item.pageUrl}`"
          class="flex items-center justify-between px-3 py-4 text-body-2 hover:text-turquoise-500"
          :class="{
            'border-t border-neutral-300': index !== 0,
          }"
        >
          <span>{{ item.navigationTitle }}</span>
          <svg-icon name="action/chevron-right" class="icon text-[24px]" />
        </nuxt-link>
      </div>
      <div class="mx-auto mt-auto grid w-full grid-cols-2 gap-6 pb-safe-bottom pt-4">
        <TheButton variant="secondary" size="large" @click="mobileAsideTriggered(false)"
          >Cancel</TheButton
        >
        <TheButton @click="openContactModal" size="large">Contact Us</TheButton>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import SearchInput from '~/components/ui/SearchInput.vue'
import TheButton from '~/components/ui/buttons/TheButton.vue'
import { ImageFile } from '~/models/strapi-types/auto-generated'
import { NavigationItem } from '~/models/single-types'

const emit = defineEmits(['mobileAsideTriggered', 'openContactModal'])

const mobileAsideTriggered = (value: boolean) => {
  emit('mobileAsideTriggered', value)
}
const openContactModal = () => {
  emit('openContactModal')
}

const closeAside = ($event: Event) => {
  const target = $event.target as HTMLElement
  const anchor = target.closest('a')
  if (anchor) {
    emit('mobileAsideTriggered', false)
  }
}

defineProps({
  logo: {
    type: Object as () => ImageFile | null,
    required: true,
  },
  navigation: {
    type: Array as () => NavigationItem[],
    required: true,
  },
  promoText: { type: Array as () => string[], default: () => [] },
})
</script>

<style scoped></style>
