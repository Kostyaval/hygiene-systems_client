// rules.ts
export const required = (value: string | undefined): string | boolean => {
  return value ? true : 'Field is required'
}

export const validateEmail = (value: string): string | boolean => {
  // Standard email regex
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/

  if (emailRegex.test(value)) {
    return true
  } else {
    return 'Invalid email address'
  }
}

export const validatePhone = (value: string): string | boolean => {
  // Allow numbers, space, plus, and round brackets
  const phoneRegex = /^[\d\s()+]+$/

  if (phoneRegex.test(value)) {
    return true
  } else {
    return 'Invalid phone number'
  }
}
