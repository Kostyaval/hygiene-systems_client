<template>
  <div class="relative">
    <input
      :id="name"
      type="checkbox"
      class="hidden"
      v-model="state.modelValue.value"
      @input="updateValue"
      @blur="state.validate"
      :disabled="disabled"
    />
    <label
      :for="name"
      class="group flex items-center"
      :class="[labelClass, disabled ? 'cursor-not-allowed' : 'cursor-pointer']"
    >
      <span
        class="flex h-6 w-6 items-center justify-center rounded border"
        :class="checkBoxClass"
      >
        <svg-icon
          class="icon text-[12px]"
          v-show="state.modelValue.value"
          name="action/checkbox-mark"
        />
      </span>
      <span class="ml-4 select-none text-body-2 text-neutral-800"><slot /></span>
    </label>
    <div
      v-if="state.errorMessages.value.length"
      class="pb-3 pl-3 pr-3 text-input-hint text-red-300"
    >
      {{ state.errorMessages.value[0] }}
    </div>
  </div>
</template>

<script setup>
import useFormInput from '~/components/ui/forms/utils/use-form-input'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: Boolean,
  rules: {
    type: Array,
    default: () => [],
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  labelClass: {
    type: String,
    default: '',
  },
})

const state = useFormInput(props.name, props.modelValue, props.rules)

const updateValue = (event) => {
  state.modelValue.value = event.target.checked
  emit('update:modelValue', state.modelValue.value)
}

const checkBoxClass = computed(() => {
  const notCheckedClass =
    'border-neutral-400 group-hover:border-orange-500 group-hover:bg-orange-200 group-active:bg-orange-300 '
  const checkedClass =
    'border-orange-500 bg-orange-500 group-hover:border-orange-400 group-hover:bg-orange-400 group-active:bg-orange-300  group-active:border-orange-300'
  const disabledNotCheckedClass = 'border-neutral-400 bg-neutral-200 cursor-not-allowed'
  const disabledCheckedClass = 'border-neutral-300 bg-neutral-300 cursor-not-allowed'

  if (props.disabled) {
    return state.modelValue.value ? disabledCheckedClass : disabledNotCheckedClass
  }

  return state.modelValue.value ? checkedClass : notCheckedClass
})
</script>
