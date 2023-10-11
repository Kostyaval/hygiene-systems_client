export function formatComponentName(name: string) {
  // Replace 'block.' with '' and split at '-'
  const parts = name.replace('block.', '').split('-')

  // Convert each part to start with an uppercase letter
  const formattedParts = parts.map(
    (part) => part.charAt(0).toUpperCase() + part.slice(1)
  )

  return `Block${formattedParts.join('')}`
}
export function throttle(func: (...args: any[]) => void, limit: number) {
  let lastFunc: number
  let lastRan: number
  return (...args: any[]) => {
    // @ts-ignore
    const context = this
    if (!lastRan) {
      func.apply(context, args)
      lastRan = Date.now()
    } else {
      clearTimeout(lastFunc)
      lastFunc = window.setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args)
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
    }
  }
}

export function formatDate(input: string): string {
  // Create a Date object using the input string
  const date = new Date(input)

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date')
  }

  // Define month names
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  // Return the formatted date string
  return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}