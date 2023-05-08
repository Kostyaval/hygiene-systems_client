<template>
  <aside class="absolute-cover absolute z-10 bg-neutral-200">
    <div
      class="container flex h-full flex-col overflow-y-auto pt-12 pb-10"
      @click="closeAside($event)"
    >
      <header class="flex items-center justify-between">
        <nuxt-link to="/">
          <img :src="logo.url" :alt="logo.alternativeText" />
        </nuxt-link>
        <button
          class="text-turquoise-500 flex h-9 w-9 items-center justify-center"
          @click="mobileAsideTriggered(false)"
        >
          <svg-icon name="action/close-round" class="icon text-[24px]" />
        </button>
      </header>
      <div
        v-if="promoText"
        class="text-tag text-turquoise-500 pt-7 text-center uppercase"
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
          :href="item.href"
          class="text-body-2 hover:text-turquoise-500 flex items-center justify-between px-3 py-4"
          :class="{
            'border-t border-neutral-300': index !== 0,
          }"
        >
          <span>{{ item.name }}</span>
          <svg-icon name="action/chevron-right" class="icon text-[24px]" />
        </nuxt-link>
      </div>
      <div class="pb-safe-bottom mx-auto mt-auto grid w-full grid-cols-2 gap-6 pt-4">
        <TheButton variant="secondary" size="large" @click="mobileAsideTriggered(false)"
          >Cancel</TheButton
        >
        <TheButton tag="nuxt-link" to="/test" size="large">Contact Us</TheButton>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import SearchInput from '~/components/ui/SearchInput.vue'
import TheButton from '~/components/ui/TheButton.vue'

const emit = defineEmits(['mobileAsideTriggered'])

const mobileAsideTriggered = (value: boolean) => {
  emit('mobileAsideTriggered', value)
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
    type: Object as () => {
      alternativeText: string
      url: string
    },
    required: true,
  },
  navigation: {
    type: Array as () => { name: string; href: string }[],
    required: true,
  },
  promoText: { type: Array as () => string[], default: () => [] },
})
</script>

<style scoped></style>
