<template>
  <picture>
    <source :srcset="avifSrcset" type="image/avif" />
    <source :srcset="webpSrcset" type="image/webp" />
    <img
      :class="imageClass"
      :src="fallbackSrc"
      :srcset="fallbackSrcset"
      :alt="alt"
      :loading="lazy ? 'lazy' : 'eager'"
    />
  </picture>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  src: string
  alt?: string
  modifiers?: Record<string, any>
  imageClass?: string
  lazy?: {
    default: false
    type: Boolean
  }
}>()

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
      if (modifiers.width || modifiers.height) {
        const scaledModifiers = {
          ...baseModifiers,
          width: modifiers.width ? modifiers.width * scale : undefined,
          height: modifiers.height ? modifiers.height * scale : undefined,
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
</script>
