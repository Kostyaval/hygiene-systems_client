<template>
  <form @submit.prevent="submit">
    <slot />
  </form>
</template>

<script setup>
const emit = defineEmits(['submit'])

const formState = reactive({
  fields: {},
  get valid() {
    return Object.values(this.fields).every((field) => field.valid)
  },
})

provide('formState', formState)

// Validate all form fields
function validate() {
  for (const field of Object.values(formState.fields)) {
    field.validate()
  }
}

// Expose the validate function for use in parent components
// defineExpose({ validate })

const submit = async () => {
  validate()
  await nextTick(() => {
    if (formState.valid) {
      emit('submit')
    } else {
      console.log('Form is not valid, show an error...')
    }
  })
}
</script>
