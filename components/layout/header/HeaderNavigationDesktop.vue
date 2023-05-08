<template>
  <div class="bg-neutral-200">
    <div
      class="container grid h-[72px] grid-cols-[minmax(auto,1fr),minmax(auto,2fr),minmax(auto,1fr)] items-center px-4"
    >
      <div class="w-32">
        <nuxt-link to="/">
          <img :src="logo.url" :alt="logo.alternativeText" />
        </nuxt-link>
      </div>
      <div
        :class="{
          'w-0 overflow-hidden opacity-0': isInputFocused,
          'w-full': !isInputFocused,
        }"
        class="col-start-2 flex w-full items-center justify-center space-x-2"
      >
        <nuxt-link
          v-for="(item, index) in navigation"
          :key="index"
          :href="item.href"
          class="hover:border-turquoise-500 hover:text-turquoise-500 whitespace-nowrap border-b border-transparent px-3 py-2"
        >
          {{ item.name }}
        </nuxt-link>
      </div>
      <div
        class="flex items-center justify-end space-x-2"
        :class="{ 'w-[600px]': isInputFocused }"
      >
        <SearchInput
          :list="[
            { name: 'apple', href: '#' },
            { name: 'banana', href: '#' },
            { name: 'grape', href: '#' },
            { name: 'pineapple', href: '#' },
            { name: 'orange', href: '#' },
            { name: 'pear', href: '#' },
          ]"
          @focus="onInputFocus"
        />
        <TheButton variant="secondary">Contact us</TheButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheButton from '~/components/ui/TheButton.vue'
import SearchInput from '~/components/ui/SearchInput.vue'

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
})

const isInputFocused = ref(false)

const onInputFocus = (focused: boolean) => {
  isInputFocused.value = focused
}
</script>

<style scoped></style>
