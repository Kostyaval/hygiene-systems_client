<template>
  <div class="container py-20 text-center">
    <h2 class="text-headline-2 text-turquoise-500 md:text-headline-3">{{ title }}</h2>
    <div class="mx-auto max-w-md pt-3 text-body-1 text-neutral-600">
      {{ description }}
    </div>
    <div class="mx-auto grid grid-cols-3 gap-x-6 gap-y-20 pt-24 md:grid-cols-2">
      <template v-for="(perk, index) in perks" :key="index">
        <div class="" v-if="perk">
          <img
            class="mx-auto"
            v-if="perk.image"
            :src="perk.image.url"
            :alt="perk.image.alternativeText"
          />
          <h4
            class="mx-auto mt-7 max-w-[216px] text-body-1 text-neutral-600 md:text-body-2"
          >
            {{ perk.title }}
          </h4>
        </div>
      </template>
    </div>
    <ButtonWrapper class="pt-24" v-if="buttons" :buttons="buttons" />
  </div>
</template>

<script setup lang="ts">
import { BlockBenefits } from '~/models/page-block-components'
import ButtonWrapper from '~/components/ui/buttons/ButtonWrapper.vue'

const props = withDefaults(defineProps<BlockBenefits>(), {})
</script>

<style scoped></style>
