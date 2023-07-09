<template>
  <CommonModal>
    <template #header>
      <div class="mx-auto flex max-w-3xl flex-row-reverse pt-10 xl:hidden">
        <button class="flex h-10 w-10 items-center justify-center" @click="close()">
          <svg-icon name="action/close-round" class="icon text-[24px]" />
        </button>
      </div>
    </template>
    <div
      class="container mx-auto grid max-w-3xl grid-cols-2 gap-4 pb-4 pt-8 md:grid-cols-1 md:grid-rows-none"
    >
      <div class="order-1 row-span-1 md:order-1">
        <h3 class="text-headline-2 text-turquoise-500">contact us</h3>
        <div class="space-y-4 pt-12">
          <a
            class="block max-w-max text-button-m underline"
            :href="`tel:${mobileNumber}`"
            >{{ mobileNumber }}</a
          >
          <a
            class="block max-w-max text-button-m underline"
            :href="`mailto:${email}`"
            >{{ email }}</a
          >
        </div>
        <div class="pt-8 text-body-2 text-neutral-500">
          <MarkdownRenderer v-if="address" :markdown="address" />
        </div>
      </div>
      <div class="class1 order-3 row-span-1 md:order-3">
        <div
          class="grid space-y-4 pt-12 md:mx-auto md:flex md:max-w-xs md:justify-between md:space-y-0"
        >
          <template v-for="(item, index) in socialLinks">
            <TheButtonIconOnly
              v-if="item"
              :key="index"
              :icon="`social/${item.icon}-1`"
              tag="nuxt-link"
              :external-link="!!item.externalLink"
              :to="item.href"
              target="_blank"
              color-background="gray"
              color-text="neutral"
              size="large"
            >
              <span class="text-body-2 text-neutral-500">{{ item?.label }}</span>
            </TheButtonIconOnly>
          </template>
        </div>
        <div class="pt-20" v-if="logo">
          <img class="md:mx-auto" :src="logo.url" :alt="logo.alternativeText" />
        </div>
      </div>
      <div class="class2 order-2 row-span-3 md:order-2">
        <TheForm
          class="max-w-[360px] space-y-4 md:max-w-full md:pt-10"
          @submit="handleForm"
        >
          <TheInput
            v-model="formState.name"
            name="name"
            placeholder="Name"
            :rules="[required]"
          />
          <TheInput
            v-model="formState.email"
            name="email"
            placeholder="E-mail"
            :rules="[required, validateEmail]"
          />
          <TheInput
            v-model="formState.phone"
            name="phone"
            placeholder="Phone"
            :rules="[required, validatePhone]"
          />
          <TheInput
            v-model="formState.company"
            name="company"
            placeholder="Company Name"
          />
          <TheInput
            v-model="formState.location"
            name="location"
            placeholder="Location"
          />
          <TheInput
            :textarea="true"
            v-model="formState.message"
            name="message"
            placeholder="Message"
          />
          <div>
            <TheCheckbox
              label-class="rounded bg-orange-100 px-4 py-3"
              v-model="formState.isAlreadyCustomer"
              name="isAlreadyCustomer"
            >
              I am an existing customer
            </TheCheckbox>
          </div>
          <div>
            <TheButton
              class="mt-10 md:w-full"
              type="submit"
              variant="primary"
              size="large"
              >Send Request</TheButton
            >
          </div>
        </TheForm>
        <TheButton
          class="hidden md:mt-6 md:inline-flex md:w-full"
          @click="close()"
          variant="secondary"
          size="large"
          >Cansel</TheButton
        >
      </div>
    </div>
  </CommonModal>
</template>

<script setup lang="ts">
import useModalProps from '~/components/ui/modals/utils/use-modal-props'
import CommonModal from '~/components/ui/modals/templates/CommonModal.vue'
import { CompanyInformationState } from '~/models/single-types'
import MarkdownRenderer from '~/components/ui/MarkdownRenderer.vue'
import TheButton from '~/components/ui/buttons/TheButton.vue'
import StrapiImage from '~/components/ui/StrapiImage.vue'
import TheButtonIconOnly from '~/components/ui/buttons/TheButtonIconOnly.vue'
import {
  required,
  validateEmail,
  validatePhone,
} from '~/components/ui/forms/utils/rules'
import TheForm from '~/components/ui/forms/TheForm.vue'
import TheInput from '~/components/ui/forms/TheInput.vue'
import TheCheckbox from '~/components/ui/forms/TheCheckbox.vue'
import { useState } from '#app'

const props = defineProps({ ...useModalProps })

const { logo, mobileNumber, email, address, socialLinks } =
  useState<CompanyInformationState>('companyInformation').value

const formState = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  location: '',
  message: '',
  isAlreadyCustomer: false,
})

const handleForm = () => {
  props.close({ ...formState.value })
}
</script>
