<template>
  <div class="max-w-lg">
    <img src="/media/svg/sustainable.svg" alt="sustainable" />
    <div class="flex flex-wrap gap-2 pt-9">
      <div
        class="inline-flex rounded-2xl bg-[#2FA957]/10 px-4 py-1 text-body-2 text-[#2FA957]"
        v-for="tag in tags"
      >
        {{ tag }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  tags: Array,
})
</script>

<style scoped></style>
