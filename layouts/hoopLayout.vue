<template>
  <div>
    <TheHeader />
    <div class="bg-neutral-200">
      <div
        class="hoop247 container grid min-h-[calc(100vh_-_var(--header-height))] grid-cols-12 lg:gap-y-8"
      >
        <div class="col-span-5 pr-6 pt-8 lg:col-span-12 lg:pr-0">
          <div class="mx-auto h-full max-w-sm">
            <div class="flex h-full flex-col pb-8">
              <h1 class="text-headline-2 text-turquoise-500 xl:text-headline-3">
                {{ pageData.title }}
              </h1>
              <slot />
              <div class="mt-auto">
                <div
                  @click="openVideoModal"
                  class="relative mt-4 flex h-[72px] w-full cursor-pointer items-center justify-between overflow-hidden rounded-full bg-neutral-900 p-1"
                >
                  <StrapiImage
                    class="absolute absolute-cover"
                    image-class="w-full h-full object-cover"
                    v-if="pageData.imageVideoPlaceholder"
                    :src="pageData.imageVideoPlaceholder.url"
                  />
                  <div class="relative z-[1] pl-6 text-button-m text-neutral-100">
                    Watch the Video
                  </div>
                  <svg-icon
                    class="icon relative z-[1] text-[64px] text-neutral-100"
                    name="action/play-in-circle"
                  ></svg-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="hoop247__item hoop247__item--background relative col-span-7 overflow-hidden pl-6 pt-14 lg:col-span-12 lg:-ml-6"
        >
          <div class="relative z-[1] mx-auto max-w-2xl">
            <h1 class="text-headline-4 xl:text-subtitle-2">
              {{ pageData.promoTitle }}
            </h1>
            <div class="pt-7 text-body-2">{{ pageData.promoDescription }}</div>
            <div
              class="mx-auto grid grid-cols-[repeat(auto-fit,minmax(152px,1fr))] justify-center justify-items-center gap-6 py-16 xl:pb-8"
            >
              <template v-for="(perk, index) in pageData.benefits" :key="index">
                <div class="w-full rounded-2xl bg-neutral-100/40 p-4" v-if="perk">
                  <img
                    class="mx-auto"
                    v-if="perk.image"
                    :src="perk.image.url"
                    :alt="perk.image.alternativeText"
                  />
                  <h4 class="mx-auto mt-2 text-center text-body-2 text-neutral-600">
                    {{ perk.title }}
                  </h4>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Hoop24Page } from '~/models/single-types'
import type { hoop24Response } from '~/models/api'
import TheHeader from '~/components/layout/header/TheHeader.vue'
import StrapiImage from '~/components/ui/StrapiImage.vue'
import { $modal } from '~/components/ui/modals'
const config = useRuntimeConfig()

const { data, error } = await useAsyncData(
  'hoop24',
  () =>
    $fetch<hoop24Response>('/api/hoop24', {
      method: 'GET',
      baseURL: config.public.baseURL,
      query: { populate: 'deep,6' },
    }),
  {
    transform(response) {
      const data = response.data
      return {
        ...data,
      }
    },
  }
)
if (error.value || !data) {
  throw createError({
    fatal: true,
    statusCode: 404,
  })
}
const pageData: Hoop24Page = data.value as Hoop24Page
useState('hoopPage', () => pageData)

const openVideoModal = () => {
  const ModalYoutubeVideo = defineAsyncComponent(
    async () => await import('~/components/ui/modals/content/ModalYoutubeVideo.vue')
  )
  $modal
    .open(ModalYoutubeVideo, { videoUrl: pageData.videoLink })
    .then((res) => console.log(res))
}
</script>

<style scoped lang="scss">
.hoop247 {
  &__item--background:after {
    content: '';
    position: absolute;
    width: 150%;
    height: 100%;
    background: radial-gradient(
      50% 50% at 50% 50%,
      #9fe8ed 0%,
      rgba(159, 232, 237, 0) 100%
    );
    opacity: 0.4;
    border-radius: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
