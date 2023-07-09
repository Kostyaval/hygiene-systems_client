<template>
  <component
    class="group inline-flex max-w-max items-center space-x-4"
    :is="rootTag"
    :href="href"
    :to="to"
    @click="onClick"
  >
    <div :class="iconClasses"><SvgIcon :name="icon" class="icon text-[24px]" /></div>
    <slot></slot>
  </component>
</template>
<script setup>
import NuxtLink from '#app/components/nuxt-link'
const props = defineProps({
  tag: {
    type: String,
    default: 'button',
    validator: (value) => ['a', 'nuxt-link', 'button'].includes(value),
  },
  externalLink: {
    type: Boolean,
    default: false,
  },
  to: {
    type: [String, Object],
    default: undefined,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  colorBackground: {
    type: String,
    default: '',
    validator: (value) =>
      ['neutral', 'gray', 'turquoise', 'orange', 'purple', 'red', 'black', ''].includes(
        value
      ),
  },
  colorText: {
    type: String,
    default: '',
    validator: (value) =>
      ['neutral', 'turquoise', 'orange', 'purple', 'red', 'gray', ''].includes(value),
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value),
  },
  icon: {
    type: String,
    default: '',
  },
})

const emits = defineEmits(['click'])

let rootTag = props.tag === 'nuxt-link' ? NuxtLink : props.tag
let to = props.to
let href = ''
if (props.externalLink) {
  rootTag = 'a'
  href = to
}
const onClick = (event) => {
  if (!props.disabled) {
    emits('click', event)
  }
}

const iconClasses = computed(() => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-8 h-8',
    large: 'w-10 h-10',
  }

  const colorBackgroundPrimary = {
    white: 'bg-neutral-100 group-hover:bg-neutral-400 group-active:bg-neutral-300 ',
    black: 'bg-neutral-700 group-hover:bg-neutral-500 group-active:bg-neutral-400 ',
    neutral:
      'bg-neutral-500 group-group-hover:bg-neutral-400 group-group-active:bg-neutral-300 ',
    gray: 'bg-neutral-300 group-hover:bg-neutral-400 group-active:bg-neutral-300 ',
    turquoise:
      'bg-turquoise-500 group-hover:bg-turquoise-400 group-active:bg-turquoise-300',
    orange: 'bg-orange-500 group-hover:bg-orange-400 group-active:bg-orange-300 ',
    purple: 'bg-purple-500 group-hover:bg-purple-400 group-active:bg-purple-300 ',
    red: 'bg-red-500 group-hover:bg-red-400 group-active:bg-red-300 ',
  }

  const colorTextVariants = {
    white: 'text-neutral-100',
    black: 'text-neutral-800',
    gray: 'text-neutral-300',
    neutral: 'text-neutral-500',
    turquoise: 'text-turquoise-500',
    orange: 'text-orange-500',
    purple: 'text-purple-500',
    red: 'text-red-500',
  }

  const variantClasses = `${colorBackgroundPrimary[props.colorBackground]} ${
    colorTextVariants[props.colorText]
  }`

  return [
    'inline-flex items-center justify-center transition-colors relative whitespace-nowrap rounded-md',
    sizeClasses[props.size],
    variantClasses,
  ]
})
</script>

<style scoped></style>
