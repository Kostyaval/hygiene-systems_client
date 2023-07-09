<template>
  <div
    ref="container"
    class="relative inline-flex"
    @mouseover="handleMouseover"
    @mouseleave="visible = false"
  >
    <slot></slot>
    <span
      class="flex cursor-help select-none items-center rounded-2xl bg-orange-200 px-4 py-2 text-button-s text-orange-500"
      v-if="!$slots.default"
    >
      {{ md(title) }}
      <svg-icon class="icon ml-2 text-[16px]" name="common/info" />
    </span>
    <div
      ref="tooltip"
      class="absolute z-10 w-max max-w-[250px] select-none rounded bg-neutral-900/40 px-2 py-3 text-input-hint text-neutral-100 backdrop-blur-lg"
      :class="visible ? tooltipClasses : 'absolute z-[-9999]'"
      :style="{ minWidth, opacity: visible ? '1' : '0' }"
      v-html="md(hint)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import { PropType } from 'vue'
import md from 'snarkdown'

const props = defineProps({
  hint: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
  position: {
    type: String as PropType<'top' | 'bottom' | 'left' | 'right'>,
    default: 'right',
  },
  minWidth: {
    type: Number,
    default: 0,
  },
})

const positionClasses = {
  top: 'bottom-[calc(100%+_8px)] transition-opacity',
  bottom: 'top-[calc(100%+_8px)] transition-opacity',
  left: 'right-[calc(100%+_8px)] absolute-y-center transition-opacity',
  right: 'left-[calc(100%+_8px)] absolute-y-center transition-opacity',
}

const visible = ref(false)
const tooltip = ref<HTMLElement | null>(null)
const container = ref<HTMLElement | null>(null)
let initialPosition = props.position
let tooltipClasses = ref(positionClasses[initialPosition])

const updateTooltipPosition = () => {
  if (!tooltip.value || !container.value) {
    return
  }

  tooltip.value.style.opacity = '0'
  const bounding = tooltip.value.getBoundingClientRect()
  const containerBounding = container.value.getBoundingClientRect()

  const isOverlappingLeft = bounding.left < bounding.width + 15
  const isOverlappingRight = window.innerWidth - bounding.right < bounding.width + 15
  const isOverlappingTop = bounding.top < bounding.height + 15
  const isOverlappingBottom =
    window.innerHeight - bounding.bottom < bounding.height + 15
  console.log({
    isOverlappingLeft,
    isOverlappingRight,
    isOverlappingTop,
    isOverlappingBottom,
  })
  const isCentered = initialPosition === 'top' || initialPosition === 'bottom'
  const isCenteredPossible =
    containerBounding.left > bounding.width / 2 &&
    window.innerWidth - containerBounding.right > bounding.width / 2
  // Now handle the Y-axis position.
  if (
    (initialPosition === 'top' && isOverlappingTop) ||
    (initialPosition === 'bottom' && isOverlappingBottom)
  ) {
    tooltipClasses.value = positionClasses[isOverlappingLeft ? 'right' : 'left']
  } else if (
    (initialPosition === 'left' && isOverlappingLeft) ||
    (initialPosition === 'right' && isOverlappingRight)
  ) {
    tooltipClasses.value = positionClasses[isOverlappingTop ? 'bottom' : 'top']
  } else {
    tooltipClasses.value = positionClasses[initialPosition]
  }

  // If the tooltip overflows the left side of the window, adjust its X position.
  if (isCentered && isOverlappingLeft) {
    tooltip.value.style.left = '15px'
    tooltip.value.style.transform = ''
  }
  // If the tooltip overflows the right side of the window, adjust its X position.
  else if (isCentered && isOverlappingRight) {
    tooltip.value.style.right = '15px'
    tooltip.value.style.transform = ''
  }
  // If it's not overflowing, make sure it's centered on the X-axis.
  else if (isCentered && isCenteredPossible) {
    tooltip.value.style.left = '50%'
    tooltip.value.style.transform = 'translateX(-50%)'
  }

  tooltip.value.style.opacity = '1'
}

const handleMouseover = () => {
  updateTooltipPosition()
  visible.value = true
}

const minWidth = computed(() => {
  if (props.minWidth === 0) {
    return 'auto'
  }
  return `min(100vw - 30px, ${props.minWidth}px)`
})
</script>
