<template>
  <div
    class="absolute my-auto h-[60%] max-h-[440px] w-[calc(90%_-_32px)] max-w-[450px] rounded-2xl bg-neutral-100 px-8 py-10 text-center absolute-center lg:w-full"
  >
    <img src="/media/svg/thanks.svg" class='m-auto' alt="thanks" />
    <div class="py-4 text-subtitle-2 text-neutral-900">Your message has been sent</div>
    <TheButton tag="nuxt-link" to="/" @click='dismiss'>Ok</TheButton>
  </div>
</template>
<script setup lang="ts">
import useModalProps from '~/components/ui/modals/utils/use-modal-props'
import TheButton from '~/components/ui/buttons/TheButton.vue'

const props = defineProps({
  ...useModalProps,
})

const loading = ref(true)
</script>
