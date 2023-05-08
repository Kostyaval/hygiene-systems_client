<template>
  <div>
    <TheHeader />
    <div class="h-96"></div>
    <slot />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheHeader from '~/components/layout/header/TheHeader.vue'
import TheFooter from '~/components/layout/TheFooter.vue'
</script>

<style scoped></style>
