<template>
  <div class="mt-14">
    <TheForm class="space-y-4 md:max-w-full" @submit="handleForm">
      <TheInput
        v-model="formState.username"
        name="username"
        placeholder="Username"
        :rules="[required]"
      />
      <div>
        <a
          v-if="hoopPage.hoopForgotPassLink"
          :href="hoopPage.hoopForgotPassLink"
          class="inline-flex text-body-2 text-turquoise-500"
        >
          Forgot Password?
        </a>
        <div class="mt-10 grid grid-cols-2 gap-4 xl:grid-cols-1">
          <TheButton
            tag="nuxt-link"
            to="/hoop247/sign-up"
            class="w-full"
            size="large"
            variant="secondary"
            color="turquoise"
            >Sign Up</TheButton
          >
          <TheButton type="submit" class="w-full xl:order-first" size="large"
            >Login</TheButton
          >
        </div>
      </div>
    </TheForm>
  </div>
</template>
<script setup lang="ts">
import type { Hoop24Page } from '~/models/single-types'
import { required } from '~/components/ui/forms/utils/rules'
import TheInput from '~/components/ui/forms/TheInput.vue'
import TheForm from '~/components/ui/forms/TheForm.vue'
import TheButton from '~/components/ui/buttons/TheButton.vue'

const config = useRuntimeConfig()

definePageMeta({
  layout: 'hoop-layout',
})

const hoopPage = useState<Hoop24Page>('hoopPage').value

const formState = ref({
  username: '',
})
const handleForm = () => {
  const url = `${hoopPage.hoopRedirectLink}?username=${formState.value.username}`
  window.open(url, '_blank')
}
</script>
