<template>
  <div
    class="absolute my-auto h-[60%] w-[calc(90%_-_32px)] w-full max-w-5xl absolute-center"
  >
    <button
      @click="close()"
      class="absolute -right-5 -top-5 z-10 text-[24px] text-neutral-100"
    >
      <svg-icon class="icon" name="action/close-round" />
    </button>
    <div class="h-full w-full overflow-hidden rounded-2xl bg-neutral-200">
      <div class="absolute absolute-center">
        <TheLoader class=""> </TheLoader>
      </div>
      <iframe
        @load="videoLoaded"
        class="relative top-[-1%] z-[1] h-[102%] w-full"
        :src="`${videoUrl}?&autoplay=1`"
        allowfullscreen
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import TheLoader from '~/components/ui/TheLoader.vue'
import useModalProps from '~/components/ui/modals/utils/use-modal-props'

const props = defineProps({
  ...useModalProps,
  videoUrl: {
    type: String,
    default: 'https://www.youtube.com/embed/pWNPDEmLkVI',
  },
})

const loading = ref(true)

const videoLoaded = () => {
  loading.value = false
}
</script>
