<template>
  <div
    class="flex h-[32px] items-center justify-center bg-gradient-to-r from-turquoise-300 to-turquoise-400 text-tag uppercase text-neutral-200"
  >
    <span v-for="(item, index) in promoText" :key="index">
      {{ item }}<span v-if="index < promoText.length - 1" class="px-6"> | </span>
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  promoText: string[]
}>()
</script>
