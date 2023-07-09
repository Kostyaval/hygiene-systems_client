<template>
  <div class="markdown" v-html="md(props.markdown)" />
</template>

<script setup>
import md from 'snarkdown'

const props = defineProps({
  markdown: {
    type: String,
    default: '',
  },
})
</script>
<style scoped lang="scss">
.markdown {
  &::v-deep(br) {
    content: 'A';
    display: block;
    margin-bottom: 1em;
  }
  &::v-deep(h1, h2, h3, h4, h5, h6) {
    @apply text-headline-3;
  }
  &::v-deep(h2) {
    @apply pb-1 pt-4 text-subtitle-2 xl:text-button-m;
  }
}
</style>
