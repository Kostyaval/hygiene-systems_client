<template>
  <img
    ref="floatImage"
    :src="src"
    alt="3d logo"
    class="transition-transform duration-[10s] ease-out"
  />
</template>
<script setup lang="ts">
import { throttle } from '~/utils/helpers'
const floatImage = ref<HTMLElement | null>(null)
const radius = 30 // maximum radius of movement, adjust as needed
defineProps({
  src: {
    type: String,
    default: '/media/svg/3d_logo_with_shadow.svg',
  },
})
onMounted(() => {
  let lastMouseX = 0
  let lastMouseY = 0
  let lastScrollTop = 0

  const handleMouseMove = throttle((e: MouseEvent) => {
    if (floatImage.value) {
      let imageRect = floatImage.value.getBoundingClientRect()
      let centerX = imageRect.left + imageRect.width / 2
      let centerY = imageRect.top + imageRect.height / 2

      let deltaX = centerX - e.clientX
      let deltaY = centerY - e.clientY

      let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

      lastMouseX = distance < radius ? deltaX : (radius * deltaX) / distance
      lastMouseY = distance < radius ? deltaY : (radius * deltaY) / distance

      floatImage.value.style.transform = `translate(${lastMouseX}px, ${
        lastMouseY - lastScrollTop / 2
      }px)`
    }
  }, 100)

  const handleScroll = throttle(() => {
    if (floatImage.value) {
      let maxScrollTop = document.documentElement.scrollHeight - window.innerHeight
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop

      // Normalize the scroll position to the radius
      lastScrollTop = (scrollTop / maxScrollTop) * radius * 4

      floatImage.value.style.transform = `translate(${lastMouseX}px, ${
        lastMouseY - lastScrollTop
      }px)`
    }
  }, 100)

  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('scroll', handleScroll)

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<style scoped></style>
