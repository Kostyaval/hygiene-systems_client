<template>
  <picture>
    <template v-for="(item, index) in responsiveSources" :key="index">
      <source
        :srcset="lazyFallback ? '' : item.avifSrcset.srcset"
        v-lazy-srcset:[item.avifSrcset.srcset]
        :width="width"
        :media="item.avifSrcset.media"
        type="image/avif"
      />
      <source
        :srcset="lazyFallback ? '' : item.webpSrcset.srcset"
        v-lazy-srcset:[item.webpSrcset.srcset]
        :height="height"
        :media="item.avifSrcset.media"
        type="image/webp"
      />
    </template>
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

const props = withDefaults(
  defineProps<{
    src: string
    alt: string
    modifiers: Record<string, any>
    imageClass: any
    lazy: boolean
    lazyFallback: boolean
    breakpoints: { px: number; modifiers: Record<string, any> }[]
    width: string
    height: string
    parentSection: Element
    preload?: boolean
  }>(),
  {
    lazy: false,
    lazyFallback: false,
    breakpoints: () => [],
    preload: false,
  }
)

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

const createSources = (
  src: string,
  breakpoints: { px: number; modifiers: Record<string, any> },
  format?: string
) => {
  const srcset = createSrcset(src, { ...breakpoints.modifiers }, format)

  return {
    srcset,
    media: `(max-width: ${breakpoints.px}px)`,
  }
}

const avifSrcset = createSrcset(props.src, props.modifiers || {}, 'avif')
const webpSrcset = createSrcset(props.src, props.modifiers || {}, 'webp')
const fallbackSrc = constructImageUrl(props.src, props.modifiers || {})
const fallbackSrcset = createSrcset(props.src, props.modifiers || {})

const responsiveSources: Record<string, any>[] = []

props.breakpoints?.forEach((el, index) => {
  responsiveSources.push({
    avifSrcset: createSources(props.src, el, 'avif'),
    webpSrcset: createSources(props.src, el, 'webp'),
  })
})
console.log(responsiveSources)

const preloadLink = () => {
  const responsiveSourcesForPreload = responsiveSources.flatMap(
    ({ avifSrcset, webpSrcset }) => [
      {
        rel: 'preload',
        as: 'image',
        imagesrcset: avifSrcset.srcset,
        media: avifSrcset.media,
        type: 'image/webp',
      },
    ]
  )
  const sourceForPreload = [{ imagesrcset: avifSrcset, type: 'image/webp' }].map(
    (el) => ({
      rel: 'preload',
      as: 'image',
      ...el,
    })
  )

  return [...responsiveSourcesForPreload, ...sourceForPreload]
}
console.log(preloadLink())
if (props.preload) {
  useHead({
    link: preloadLink(),
  })
}

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
