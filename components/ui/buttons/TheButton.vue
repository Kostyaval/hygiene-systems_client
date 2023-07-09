<template>
  <component
    :is="rootTag"
    :href="href"
    :to="to"
    :type="type"
    :disabled="disabled || loading"
    :class="buttonClasses"
    @click="onClick"
  >
    <div v-if="loading" class="absolute m-0 absolute-center">
      <TheLoader :variant="variant" />
    </div>
    <div class="flex items-center space-x-2" :class="loading ? 'opacity-0' : ''">
      <SvgIcon v-if="iconLeft" :name="iconLeft" class="mr-2 h-6 w-6" />
      <slot></slot>
      <SvgIcon v-if="iconRight" :name="iconRight" class="mr-2 h-6 w-6" />
    </div>
  </component>
</template>

<script setup>
import NuxtLink from '#app/components/nuxt-link'
import TheLoader from '~/components/ui/TheLoader.vue'
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
  loading: {
    type: Boolean,
    default: false,
  },
  to: {
    type: [String, Object],
    default: undefined,
  },
  type: {
    type: String,
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'tertiary'].includes(value),
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
  iconLeft: {
    type: String,
    default: '',
  },
  iconRight: {
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

if (!props.to) {
  rootTag = 'button'
}
const onClick = (event) => {
  if (!props.disabled) {
    emits('click', event)
  }
}

const colorSchema = {
  primary: { text: 'white', background: 'turquoise' },
  secondary: { text: 'turquoise', background: 'turquoise' },
  tertiary: { text: '', background: 'turquoise' },
}

const colorBackground = props.colorBackground || colorSchema[props.variant].background
const colorText = props.colorText || colorSchema[props.variant].text

const buttonClasses = computed(() => {
  const sizeClasses = {
    small: `px-4 py-2 text-button-s ${props.iconLeft && 'pl-2'} ${
      props.iconRight && 'pr-2'
    }`,
    medium: `min-w-[150px] px-6 py-2 text-button-m ${props.iconLeft && 'pl-3'} ${
      props.iconRight && 'pr-3'
    }`,
    large: `min-w-[150px] px-6 py-3 text-button-m ${props.iconLeft && 'pl-3'} ${
      props.iconRight && 'pr-3'
    }`,
  }

  const colorBackgroundPrimary = {
    white: 'bg-neutral-100 hover:bg-neutral-400 active:bg-neutral-300 ',
    black: 'bg-neutral-700 hover:bg-neutral-500 active:bg-neutral-400 ',
    neutral: 'bg-neutral-500 hover:bg-neutral-400 active:bg-neutral-300 ',
    gray: 'bg-neutral-300 hover:bg-neutral-200 active:bg-neutral-300 ',
    turquoise: 'bg-turquoise-500 hover:bg-turquoise-400 active:bg-turquoise-300',
    orange: 'bg-orange-500 hover:bg-orange-400 active:bg-orange-300 ',
    purple: 'bg-purple-500 hover:bg-purple-400 active:bg-purple-300 ',
    red: 'bg-red-500 hover:bg-red-400 active:bg-red-300 ',
  }

  const colorBackgroundSecondary = {
    white: 'hover:bg-neutral-400 active:bg-neutral-500 ',
    neutral: 'hover:bg-neutral-100 active:bg-neutral-200 ',
    turquoise: 'hover:bg-turquoise-100 active:bg-turquoise-200 ',
    orange: 'hover:bg-orange-100 active:bg-orange-200 ',
    purple: 'hover:bg-purple-100 active:bg-purple-200 ',
    red: 'hover:bg-red-100 active:bg-red-200 ',
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

  const colorTextTertiaryVariants = {
    neutral: 'text-neutral-500 hover:text-neutral-400 active:text-neutral-300',
    turquoise: 'text-turquoise-500 hover:text-turquoise-400 active:text-turquoise-300',
    orange: 'text-orange-500 hover:text-orange-400 active:text-orange-300',
    purple: 'text-purple-500 hover:text-purple-400 active:text-purple-300',
    red: 'text-red-500 hover:text-red-400 active:text-red-300',
  }

  const variantClasses = {
    primary: `${colorBackgroundPrimary[colorBackground]} ${colorTextVariants[colorText]}`,
    secondary: `${colorBackgroundSecondary[colorBackground]} ${colorTextVariants[colorText]} border border-current`,
    tertiary: colorTextTertiaryVariants[colorText],
  }
  const variantDisabledClasses = {
    primary: 'bg-neutral-300 text-neutral-500',
    secondary: 'text-neutral-400 border border-neutral-400',
    tertiary: 'text-neutral-400',
  }

  return [
    'inline-flex items-center justify-center transition-colors  relative whitespace-nowrap rounded-full',
    props.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
    props.disabled
      ? variantDisabledClasses[props.variant]
      : variantClasses[props.variant],
    sizeClasses[props.size],
  ]
})
</script>
