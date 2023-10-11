<template>
  <picture>
    <source
      :srcset="lazyFallback ? '' : avifSrcset"
      v-lazy-srcset:[avifSrcset]
      :width="width"
      type="image/avif"
    />
    <source
      :srcset="lazyFallback ? '' : webpSrcset"
      v-lazy-srcset:[webpSrcset]
      :height="height"
      type="image/webp"
    />
    <img
      :width="width"
      :height="height"
      :class="imageClass"
      :src="lazyFallback ? '' : fallbackSrc"
      v-lazy-src:[fallbackSrc]
      v-lazy-srcset:[fallbackSrcset]
      :srcset="lazyFallback ? '' : fallbackSrcset"
      :alt="alt"
      :loading="lazy ? 'lazy' : 'eager'"
    />
  </picture>
</template>

<script setup lang="ts">
import { defineProps, DirectiveBinding } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: String,
  modifiers: Object,
  imageClass: String,
  lazy: {
    type: Boolean,
    default: false,
  },
  lazyFallback: {
    type: Boolean,
    default: false,
  },
  width: String,
  height: String,
  parentSection: Object,
})

const constructImageUrl = (src: string, modifiers: Record<string, any>): string => {
  const queryParams = new URLSearchParams()

  Object.entries(modifiers).forEach(([key, value]) => {
    if (value !== undefined) {
      queryParams.set(key, value.toString())
    }
  })

  return `${src}${queryParams.toString() ? '?' + queryParams.toString() : ''}`
}

const createSrcset = (src: string, modifiers: Record<string, any>, format?: string) => {
  const baseModifiers = { ...modifiers, format }

  // Include the original image size in the srcset.
  const originalSrc = constructImageUrl(src, baseModifiers)

  const scaledSources = [1, 2, 3]
    .map((scale) => {
      if (modifiers.width || modifiers.height || modifiers.resize) {
        const scaledModifiers: Record<string, any> = {
          ...baseModifiers,
          width: modifiers.width ? modifiers.width * scale : undefined,
          height: modifiers.height ? modifiers.height * scale : undefined,
        }
        // Add support for scaling 'resize' modifier
        if (modifiers.resize) {
          const [resizeWidth, resizeHeight] = modifiers.resize.split('x').map(Number)
          if (!isNaN(resizeWidth) && !isNaN(resizeHeight)) {
            scaledModifiers.resize = `${resizeWidth * scale}x${resizeHeight * scale}`
          }
        }

        return `${constructImageUrl(src, scaledModifiers)} ${scale}x`
      }
      return ''
    })
    .filter(Boolean)
    .join(', ')

  return scaledSources ? `${originalSrc}, ${scaledSources}` : originalSrc
}

const avifSrcset = createSrcset(props.src, props.modifiers || {}, 'avif')
const webpSrcset = createSrcset(props.src, props.modifiers || {}, 'webp')
const fallbackSrc = constructImageUrl(props.src, props.modifiers || {})
const fallbackSrcset = createSrcset(props.src, props.modifiers || {})

const vLazySrc = {
  mounted(el: HTMLImageElement, binding: any) {
    if (!props.lazyFallback) {
      return
    }
    nextTick(() => {
      const elementToObserve: HTMLElement = props.parentSection || el
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          el.src = binding.arg
          observer.unobserve(elementToObserve)
        }
      })
      observer.observe(elementToObserve)
    })
  },
}

const vLazySrcset = {
  mounted(el: HTMLImageElement, binding: any) {
    if (!props.lazyFallback) {
      return
    }
    nextTick(() => {
      const elementToObserve: HTMLElement = props.parentSection || el
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            el.srcset = binding.arg
            observer.unobserve(elementToObserve)
          }
        },
        { rootMargin: '500px' }
      )
      observer.observe(elementToObserve)
    })
  },
}
</script>
