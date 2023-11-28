<template>
  <div class="bg-neutral-100">
    <div
      class="container grid h-[72px] grid-cols-[minmax(auto,1fr),minmax(auto,2fr),minmax(auto,1fr)] items-center px-4"
    >
      <div class="w-32">
        <nuxt-link to="/">
          <img :src="logo?.url" :alt="logo?.alternativeText" />
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
          :href="`/${item.pageUrl}`"
          class="whitespace-nowrap border-b border-transparent px-3 py-2 text-body-2 hover:border-turquoise-500 hover:text-turquoise-500"
          active-class="border-turquoise-500 text-turquoise-500"
        >
          {{ item.navigationTitle }}
        </nuxt-link>
      </div>
      <div
        class="flex items-center justify-end space-x-2"
        :class="{ 'w-[600px]': isInputFocused }"
      >
        <SearchInput :list="autocompleteList" @focus="onInputFocus" />
        <TheButton to="/contact-us" tag="nuxt-link" variant="secondary"
          >Contact us</TheButton
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheButton from '~/components/ui/buttons/TheButton.vue'
import SearchInput from '~/components/ui/SearchInput.vue'
import { ImageFile } from '~/models/strapi-types/auto-generated'
import { NavigationItem, ProductCardsState } from '~/models/single-types'

defineProps({
  logo: {
    type: Object as () => ImageFile | null,
    required: true,
  },
  navigation: {
    type: Array as () => NavigationItem[],
    required: true,
  },
})

const products = useState<ProductCardsState>('productCards')
const autocompleteList = products.value.map((el) => ({
  name: el.navigationTitle,
  href: `/products/${el.pageUrl}`,
}))

const emit = defineEmits(['openContactModal'])

const openContactModal = () => {
  emit('openContactModal')
}

const isInputFocused = ref(false)

const onInputFocus = (focused: boolean) => {
  isInputFocused.value = focused
}
</script>

<style scoped></style>
