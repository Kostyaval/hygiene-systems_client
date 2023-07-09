<template>
  <CommonModal>
    <template #header>
      <div class="container mx-auto flex max-w-3xl justify-between pt-10">
        <TheButton tag="nuxt-link" class="underline" variant="tertiary" to="/products"
          >View All Consumables</TheButton
        >
        <button
          class="flex h-10 w-10 items-center justify-center xl:hidden"
          @click="close()"
        >
          <svg-icon name="action/close-round" class="icon text-[24px]" />
        </button>
      </div>
    </template>
    <div
      class="container mx-auto grid max-w-3xl grid-cols-2 gap-16 pb-4 pt-8 md:grid-cols-1 md:grid-rows-none"
    >
      <div class="order-1 row-span-1 md:order-1">
        <div class="flex items-center justify-center rounded-2xl bg-neutral-100 p-6">
          <strapi-image :src="image.url" />
        </div>
      </div>
      <div class="class1 order-3 row-span-1 md:order-3">
        <ButtonWrapper :buttons="buttons" width-full-media="lg"></ButtonWrapper>
      </div>
      <div class="class2 order-2 row-span-3 md:order-2">
        <div class="max-w-md">
          <h2
            v-if="title"
            class="text-headline-2 text-turquoise-500 xl:text-headline-3"
          >
            {{ title }}
          </h2>
          <h3 v-if="subtitle" class="pt-5 text-subtitle-3 text-neutral-600">
            {{ subtitle }}
          </h3>
          <div
            v-if="description"
            class="pt-5 text-body-2 text-neutral-600 xl:text-body-2"
          >
            <MarkdownRenderer :markdown="description" />
          </div>
        </div>
      </div>
    </div>
  </CommonModal>
</template>
<script setup lang="ts">
import CommonModal from '~/components/ui/modals/templates/CommonModal.vue'
import { BlockSubProductCard } from '~/models/page-block-components'
import useModalProps from '~/components/ui/modals/utils/use-modal-props'
import TheButton from '~/components/ui/buttons/TheButton.vue'
import MarkdownRenderer from '~/components/ui/MarkdownRenderer.vue'
import StrapiImage from '~/components/ui/StrapiImage.vue'
import ButtonWrapper from '~/components/ui/buttons/ButtonWrapper.vue'
import { ComponentSharedButton } from '~/models/strapi-types/auto-generated'

const buttons: ComponentSharedButton[] = [
  {
    id: '0',
    label: 'Contact us',
    action: 'open-contact-modal',
  },
  {
    id: '1',
    label: 'Make Order',
    href: '#',
  },
]
const props = defineProps({
  ...useModalProps,
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  description: { type: String, default: '' },
  image: {
    type: Object,
    default: () => {},
  },
})
</script>
<style scoped></style>
