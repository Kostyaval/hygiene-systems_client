<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const slots = useSlots()
const collapseControl = ref([])

provide('collapseControl', collapseControl)

const toggle = (index) => {
  const activeIndex = collapseControl.value.indexOf(true)

  if (activeIndex === index) {
    collapseControl.value[activeIndex] = false
    return
  }

  if (activeIndex !== -1) {
    collapseControl.value[activeIndex] = false
  }

  collapseControl.value[index] = true
}

provide('toggle', toggle)

onMounted(() => {
  slots.default().forEach((_, index) => {
    collapseControl.value[index] = false
  })
})
</script>
