// useFormInput.ts
import { inject, ref, watch } from 'vue'

type FormState = {
  fields: {
    [key: string]: {
      valid: boolean
      validate?: () => void
    }
  }
}

export type ValidationRule = (value: any) => string | true

export default function useFormInput(
  name: string,
  initialValue: any,
  rules: ValidationRule[] = []
) {
  const formState = inject<FormState>('formState')

  const state = {
    modelValue: ref(initialValue),
    valid: ref(true),
    touched: ref(false),
    errorMessages: ref<string[]>([]), // Explicitly set the type to string[]
    validate() {
      state.touched.value = true
      state.errorMessages.value = []
      state.valid.value = true

      for (const rule of rules) {
        if (typeof rule !== 'function') {
          continue
        }
        const ruleResult = rule(state.modelValue.value)

        if (typeof ruleResult === 'string') {
          state.valid.value = false
          state.errorMessages.value.push(ruleResult)
        }
      }
    },
  }
  if (formState && formState.fields) {
    formState.fields[name] = { valid: state.valid.value, validate: state.validate }
  }

  watch([state.modelValue, state.valid], () => {
    if (state.touched.value) {
      state.validate()
    }
    // Update form state in parent form component
    if (formState && formState.fields) {
      formState.fields[name] = { valid: state.valid.value, validate: state.validate }
    }
  })

  return state
}
