// @ts-ignore
import { $fetch } from 'ohmyfetch'

const { baseURL } = useRuntimeConfig()

export const $api = $fetch.create({
  baseURL,
  // your default options
})
