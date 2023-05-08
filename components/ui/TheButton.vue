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
    <div v-if="loading" class="absolute-center absolute m-0">
      <svg
        aria-hidden="true"
        role="status"
        class="inline h-5 w-5 animate-spin text-white"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          :class="loaderClass.track"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          :class="loaderClass.circle"
        />
      </svg>
    </div>
    <div class="flex items-center space-x-2" :class="loading ? 'opacity-0' : ''">
      <template v-if="iconOnly">
        <SvgIcon
          :name="iconOnly"
          class="icon text-[24px]"
          :class="`text-${colorText}`"
        />
      </template>
      <template v-else>
        <SvgIcon v-if="iconLeft" :name="iconLeft" class="mr-2 h-6 w-6" />
        <slot></slot>
        <SvgIcon v-if="iconRight" :name="iconRight" class="mr-2 h-6 w-6" />
      </template>
    </div>
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
  loading: Boolean,
  href: String,
  to: [String, Object],
  type: {
    type: String,
    default: 'button',
  },
  disabled: Boolean,
  variant: {
    type: String,
    default: 'primary',
    validator: (value) =>
      ['primary', 'secondary', 'tertiary', 'social'].includes(value),
  },
  colorBackground: {
    type: String,
    default: '',
    validator: (value) =>
      ['neutral', 'turquoise', 'orange', 'purple', 'red', ''].includes(value),
  },
  colorText: {
    type: String,
    default: '',
    validator: (value) =>
      ['neutral', 'turquoise', 'orange', 'purple', 'red', ''].includes(value),
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value),
  },
  iconLeft: String,
  iconRight: String,
  iconOnly: String,
})
const emits = defineEmits(['click'])

const rootTag = props.tag === 'nuxt-link' ? NuxtLink : props.tag

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
    medium: `px-6 py-2 text-button-m ${props.iconLeft && 'pl-3'} ${
      props.iconRight && 'pr-3'
    }`,
    large: `px-6 py-3 text-button-m ${props.iconLeft && 'pl-3'} ${
      props.iconRight && 'pr-3'
    }`,
  }

  const colorBackgroundPrimary = {
    white: 'bg-neutral-100 hover:bg-neutral-400 active:bg-neutral-300 ',
    black: 'bg-neutral-700 hover:bg-neutral-500 active:bg-neutral-400 ',
    neutral: 'bg-neutral-500 hover:bg-neutral-400 active:bg-neutral-300 ',
    turquoise: 'bg-turquoise-500 hover:bg-turquoise-400 active:bg-turquoise-300',
    orange: 'bg-orange-500 hover:bg-orange-400 active:bg-orange-300 ',
    purple: 'bg-purple-500 hover:bg-purple-400 active:bg-purple-300 ',
    red: 'bg-red-500 hover:bg-red-400 active:bg-red-300 ',
  }

  const colorBackgroundSecondary = {
    neutral: 'bg-neutral-100 hover:bg-neutral-100 active:bg-neutral-200 ',
    turquoise: 'bg-neutral-100 hover:bg-turquoise-100 active:bg-turquoise-200 ',
    orange: 'bg-neutral-100 hover:bg-orange-100 active:bg-orange-200 ',
    purple: 'bg-neutral-100 hover:bg-purple-100 active:bg-purple-200 ',
    red: 'bg-neutral-100 hover:bg-red-100 active:bg-red-200 ',
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
    social: `${colorBackgroundPrimary[colorBackground]} ${colorTextVariants[colorText]}`,
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
    'inline-flex items-center justify-center transition-colors  relative whitespace-nowrap',
    props.variant === 'social' ? 'rounded-md' : 'rounded-full',
    props.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
    props.disabled
      ? variantDisabledClasses[props.variant]
      : variantClasses[props.variant],
    props.variant !== 'social' ? sizeClasses[props.size] : 'w-8 h-8',
  ]
})

const loaderClass = computed(() => {
  const trackClasses = {
    primary: 'fill-neutral-100',
    secondary: 'fill-turquoise-500',
    tertiary: 'fill-turquoise-500',
  }
  const circleClasses = {
    primary: 'fill-turquoise-500',
    secondary: 'fill-neutral-100',
    tertiary: 'fill-neutral-100',
  }

  return {
    track: trackClasses[props.variant],
    circle: circleClasses[props.variant],
  }
})
</script>
