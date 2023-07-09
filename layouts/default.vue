<template>
  <div>
    <TheHeader />
    <slot />
    <!--    <TheFooter />-->
  </div>
</template>

<script setup lang="ts">
import TheHeader from '~/components/layout/header/TheHeader.vue'
import TheFooter from '~/components/layout/TheFooter.vue'
</script>

<style scoped></style>
