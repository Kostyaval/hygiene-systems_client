<template>
  <div class="relative" :class="inputWrapperClass">
    <input
      v-if="!textarea"
      class="block w-full rounded-lg border border-transparent bg-neutral-100 py-2.5 pl-3 pr-7 text-body-2 text-neutral-900 focus:outline-none"
      :class="inputClass"
      :placeholder="placeholder"
      v-model="state.modelValue.value"
      @input="updateValue"
      @blur="state.validate"
    />
    <textarea
      v-else
      rows="3"
      class="block w-full resize-y rounded-lg border border-transparent bg-neutral-100 py-2.5 pl-3 pr-7 text-body-2 text-neutral-900 focus:outline-none"
      v-model="state.modelValue.value"
      :placeholder="placeholder"
      @input="updateValue"
      @blur="state.validate"
    ></textarea>
    <div
      v-if="state.errorMessages.value.length"
      class="pb-3 pl-3 pr-3 text-input-hint text-red-300"
    >
      {{ state.errorMessages.value[0] }}
    </div>
    <svg-icon
      v-if="!state.valid"
      class="icon absolute right-1.5 top-2.5 text-[24px]"
      name="common/error-icon"
    />
  </div>
</template>
<script setup>
const emit = defineEmits(['update:modelValue'])
import useFormInput from '~/components/ui/forms/utils/use-form-input'

// Component props and local state
const props = defineProps({
  modelValue: String,
  rules: {
    type: Array,
    default: () => [],
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  textarea: {
    type: Boolean,
    default: false,
  },
})

const state = useFormInput(props.name, props.modelValue, props.rules)

// Emit update:modelValue event for v-model
const updateValue = (event) => {
  state.modelValue.value = event.target.value
  emit('update:modelValue', state.modelValue.value)
}

const inputClass = computed(() => {
  return state.valid.value ? 'focus:border-neutral-400' : 'focus:border-transparent'
})
const inputWrapperClass = computed(() => {
  const invalidClass = 'rounded-lg border border-red-200 bg-neutral-100'
  return state.valid.value ? '' : invalidClass
})
</script>

<style scoped>
.errors {
  color: red;
}
</style>
