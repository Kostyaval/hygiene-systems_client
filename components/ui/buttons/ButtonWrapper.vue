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
        :variant="index === 0 ? 'primary' : 'secondary'"
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
    widthFullMedia?: string
  }>(),
  {
    whiteColorTheme: false,
    widthFullMedia: 'sm',
  }
)
const themeButtons =
  props.buttons?.map((button, index) => {
    const buttonColorFirst = props.whiteColorTheme ? 'black' : ''
    const buttonColorSecond = props.whiteColorTheme ? 'white' : 'turquoise'
    const buttonBackgroundColor = props.whiteColorTheme ? 'white' : 'turquoise'
    return {
      label: button?.label,
      icon: button?.icon ? `common/${button?.icon}` : '',
      to: button?.href,
      color: index === 0 ? buttonColorFirst : buttonColorSecond,
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
