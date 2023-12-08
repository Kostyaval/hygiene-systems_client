<template>
  <div class="mt-14">
    <TheForm class="space-y-4 md:max-w-full" @submit="handleForm">
      <TheInput
        v-model="formState.username"
        name="username"
        placeholder="Username*"
        :rules="[required]"
      />
      <TheInput v-model="formState.siteName" name="siteName" placeholder="Site name" />
      <TheInput
        v-model="formState.email"
        name="email"
        placeholder="Email*"
        :rules="[required, validateEmail]"
      />
      <TheInput
        v-model="formState.phone"
        name="phone"
        placeholder="Phone*"
        :rules="[required, validatePhone]"
      />
      <TheInput
        :textarea="true"
        v-model="formState.message"
        name="message"
        placeholder="Additional information"
      />
      <div>
        <div class="mt-10 grid grid-cols-2 gap-4 xl:grid-cols-1">
          <TheButton
            tag="nuxt-link"
            to="/hoop247"
            class="w-full"
            size="large"
            variant="secondary"
            color="turquoise"
            >Sign In</TheButton
          >
          <TheButton
            :loading="loading"
            type="submit"
            class="w-full xl:order-first"
            size="large"
            >Register</TheButton
          >
        </div>
      </div>
    </TheForm>
  </div>
</template>
<script setup lang="ts">
import type { Hoop24Page } from '~/models/single-types'
import {
  required,
  validateEmail,
  validatePhone,
} from '~/components/ui/forms/utils/rules'
import TheInput from '~/components/ui/forms/TheInput.vue'
import TheForm from '~/components/ui/forms/TheForm.vue'
import TheButton from '~/components/ui/buttons/TheButton.vue'

const config = useRuntimeConfig()

definePageMeta({
  layout: 'hoop-layout',
})
const loading = ref(false)
const hoopPage = useState<Hoop24Page>('hoopPage').value

const formState = ref({
  username: '',
  siteName: '',
  email: '',
  phone: '',
  message: '',
})
const handleForm = async () => {
  loading.value = true
  // await new Promise((resolve) => setTimeout(() => resolve, 1000)).then()
  try {
    await $fetch(hoopPage.hoopRegistrationEndpoint || '', {
      method: 'POST',
      body: {
        ...toRaw(formState),
      },
    })
  } catch (e) {
    console.log(e)
  } finally {
    loading.value = false
  }
}
</script>
