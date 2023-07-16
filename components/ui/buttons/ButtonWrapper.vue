<template>
  <div class="-m-2 inline-flex flex-wrap" :class="widthFullClass()">
    <template v-for="(button, index) in themeButtons" :key="index">
      <TheButton
        @click="action(buttons[index])"
        class="m-2"
        :class="widthFullClass()"
        v-if="button && index < 2"
        tag="nuxt-link"
        :to="button.to"
        :icon-left="button.icon"
        :color-background="button.background"
        size="large"
        :color-text="button.color"
        :variant="setVariant(index)"
        >{{ button.label }}</TheButton
      >
    </template>
  </div>
</template>
<script setup lang="ts">
import TheButton from '~/components/ui/buttons/TheButton.vue'
import { ComponentSharedButton } from '~/models/shared-components'
import { $modal } from '~/components/ui/modals'

const props = withDefaults(
  defineProps<{
    buttons: (ComponentSharedButton | null)[]
    whiteColorTheme?: boolean | null | undefined
    orangeColorTheme?: boolean | null | undefined
    widthFullMedia?: string
    secondaryFirst?: boolean
  }>(),
  {
    whiteColorTheme: false,
    orangeColorTheme: false,
    widthFullMedia: 'sm',
    secondaryFirst: false,
  }
)

const setVariant = (index: number): string => {
  if (index === 0) {
    if (props.secondaryFirst) {
      return 'secondary'
    } else {
      return 'primary'
    }
  } else {
    if (props.secondaryFirst) {
      return 'primary'
    } else {
      return 'secondary'
    }
  }
}
const themeButtons =
  props.buttons?.map((button, index) => {
    let buttonColorPrimary
    let buttonColorSecondary
    let buttonBackgroundColor

    if (props.whiteColorTheme) {
      buttonColorPrimary = 'black'
      buttonColorSecondary = 'white'
      buttonBackgroundColor = 'white'
    } else if (props.orangeColorTheme) {
      buttonColorPrimary = ''
      buttonColorSecondary = 'orange'
      buttonBackgroundColor = 'orange'
    } else {
      buttonColorPrimary = ''
      buttonColorSecondary = 'turquoise'
      buttonBackgroundColor = 'turquoise'
    }

    const color =
      setVariant(index) === 'primary' ? buttonColorPrimary : buttonColorSecondary

    return {
      label: button?.label,
      icon: button?.icon ? `common/${button?.icon}` : '',
      to: button?.href,
      color: color,
      background: buttonBackgroundColor,
    }
  }) || []
themeButtons.length = 2

const widthFullClass = () => {
  switch (props.widthFullMedia) {
    case 'xs':
      return 'xs:w-full'
    case 'sm':
      return 'sm:w-full'
    case 'md':
      return 'md:w-full'
    case 'lg':
      return 'lg:w-full'
    case 'xl':
      return 'xl:w-full'
  }
}

const action = (button: ComponentSharedButton) => {
  if (button.openYoutubeVideo) {
    const modalYoutubeVideo = defineAsyncComponent(
      async () => await import('~/components/ui/modals/content/ModalYoutubeVideo.vue')
    )
    $modal
      .open(modalYoutubeVideo, {
        videoUrl: button.openYoutubeVideo,
      })
      .then((res) => console.log(res))
    return
  }
  if (button.action === 'open-contact-modal') {
    const modalContactComponent = defineAsyncComponent(
      async () => await import('~/components/ui/modals/content/ModalContact.vue')
    )
    $modal.open(modalContactComponent).then((res) => console.log(res))
    return
  }
}
</script>

<style scoped></style>
