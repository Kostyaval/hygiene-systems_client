<template>
  <div
    class="relative flex w-full min-w-[155px] items-center rounded-full border border-neutral-300 bg-neutral-100 px-4"
  >
    <div class="text-neutral-500" :class="{ 'text-turquoise-500': isFocused }">
      <svg-icon name="action/search" class="icon" />
    </div>
    <input
      ref="searchInputRef"
      v-model="searchTerm"
      type="text"
      class="search-input-field w-full py-2 pl-1 pr-1 text-body-2 outline-none"
      placeholder="Your request"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
      @keydown="onKeyDown"
    />
    <!--    <transition name="fade">-->
    <!--      <button-->
    <!--        v-show="isFocused"-->
    <!--        class="bg-turquoise-100 text-turquoise-500 hover:bg-turquoise-200 active:bg-turquoise-300 text-button-m absolute right-[-1px] top-[-1px] flex h-[calc(100%+2px)] w-[89px] cursor-pointer items-center justify-center rounded rounded-r-full border border-neutral-300 transition-colors duration-300"-->
    <!--        @click="search"-->
    <!--      >-->
    <!--        Search-->
    <!--      </button>-->
    <!--    </transition>-->
    <div
      v-if="isFocused && autocompleteList.length"
      class="absolute left-0 top-full mt-1 w-full rounded-lg bg-neutral-100 opacity-0 shadow-sm"
      :class="{ 'opacity-100': showExtras }"
    >
      <nuxt-link
        v-for="(item, index) in autocompleteList"
        :key="index"
        :to="item.href"
        class="m-auto block w-[calc(100%-1rem)] cursor-pointer px-3 py-4 text-body-2 hover:text-turquoise-500"
        :class="{
          'border-t border-neutral-300': index !== 0,
          'text-turquoise-500': index === activeItemIndex,
        }"
      >
        {{ item.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Emits {
  (event: 'focus', value: boolean): void
}

type ListItem = {
  href: string
  name: string
}
interface Props {
  list?: ListItem[]
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
const router = useRouter()

const searchInputRef = ref<HTMLInputElement | null>(null)
const searchTerm = ref('')
const isFocused = ref(false)
const showExtras = ref(false)
const autocompleteList = ref<ListItem[]>([])
const activeItemIndex = ref(-1)

const onFocus = () => {
  isFocused.value = true
  showExtras.value = true
  emit('focus', true)
}
const onBlur = () => {
  setTimeout(() => {
    activeItemIndex.value = -1
    searchTerm.value = ''
    emit('focus', false)
    isFocused.value = false
    showExtras.value = false
  }, 100)
}

const onInput = () => {
  const data = props.list || []

  if (searchTerm.value.length >= 3) {
    // Filter the list to include items containing the search term
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    )

    // Sort the list by relevance (search term appears closer to the start of the string)
    filteredData.sort(
      (a, b) =>
        a.name.toLowerCase().indexOf(searchTerm.value.toLowerCase()) -
        b.name.toLowerCase().indexOf(searchTerm.value.toLowerCase())
    )

    autocompleteList.value = [...filteredData, { href: '#', name: 'View all products' }]
  } else {
    autocompleteList.value = []
  }
}

const onKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowUp') {
    event.preventDefault()
    if (activeItemIndex.value > 0) {
      activeItemIndex.value--
    }
  } else if (event.key === 'ArrowDown') {
    event.preventDefault()
    if (activeItemIndex.value < autocompleteList.value.length - 1) {
      activeItemIndex.value++
    }
  } else if (event.key === 'Enter') {
    event.preventDefault()
    if (activeItemIndex.value >= 0) {
      const target = event.target as HTMLInputElement
      router.push(autocompleteList.value[activeItemIndex.value].href)
      target.blur()
    }
  }
}
</script>
