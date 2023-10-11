<template>
  <div :class="textStyle" v-html="processMarkdown(markdown)" />
</template>

<script setup lang="ts">
import md from 'snarkdown'

const props = defineProps({
  markdown: {
    type: String,
    default: '',
  },
  textStyle: {
    type: String,
    default: 'markdown',
  },
})
function processMarkdown(data: string): string {
  let out: string = md(data)

  // Add opening <p>
  if (!out.trim().startsWith('<')) {
    out = `<p>${out}`
  }

  out = out
    // Various string replacements and regex handling as per original function...
    .replace(/(<(\/(h(\d))|em|strong|s|div|pre)>)([\s\r\n]){0,}([\w\d])/g, (match) => {
      const chars = [match.slice(0, match.length - 1), match.slice(match.length - 1)]
      return `${chars[0]}<p>${chars[1]}`
    })
    .replace(/<br \/>/g, '</p><p>')
    .replace(
      /([\w\d.:;])([\r\n]){1,}(<((h(\d))|em|strong|s|div|pre)>)/g,
      (match, paraChars, space, followingEl) => {
        return `${paraChars || ''}</p>${space || ''}${followingEl || ''}`
      }
    )
    .replace(/<\/p><p><div/g, '</p><div')
    .replace(/<\/div><\/p>/g, '</div>')
    .replace(/<strong><p>/g, '<strong>')
    .replace(/<em><p>/g, '<em>')
    .replace(/<p><pre/g, '<pre')
    .replace(/<\/pre><\/p>/g, '</pre>')
    .replace(/<p><ul/g, '<ul')
    .replace(/<\/ul><\/p>/g, '</ul>')
    .replace(/<p><ol/g, '<ol')
    .replace(/<\/ol><\/p>/g, '</ol>')

  // Add closing </p>
  if (!out.trim().endsWith('>')) {
    out = `${out}</p>`
  }

  return out
}
</script>
<style scoped lang="scss">
.markdown {
  &::v-deep(br) {
    content: 'A';
    display: block;
    margin-bottom: 1em;
  }
  &::v-deep(h1, h2, h3, h4, h5, h6) {
    @apply text-headline-3;
  }
  &::v-deep(h2) {
    @apply pb-1 pt-4 text-subtitle-2 xl:text-button-m;
  }
}

.article {
  &::v-deep(br) {
    content: '';
    display: block;
    margin-bottom: 1em;
  }
  &::v-deep(h1) {
    @apply text-headline-2;
    @apply text-turquoise-500;

  }
  &::v-deep(h2) {
    @apply text-headline-3;
    @apply text-turquoise-500;
  }
  &::v-deep(h3) {
    @apply text-subtitle-1;
    @apply text-turquoise-500;
  }
  &::v-deep(h4) {
    @apply text-subtitle-2;
    @apply text-turquoise-500;
  }
  &::v-deep(h5) {
    @apply text-subtitle-3;
    @apply text-turquoise-500;
  }
  &::v-deep(h6) {
    @apply text-subtitle-3;
    @apply text-turquoise-500;
  }
  &::v-deep(p) {
    @apply my-8;
  }
}
</style>
