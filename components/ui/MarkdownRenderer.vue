<template>
  <div v-html="md(props.markdown)" />
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
