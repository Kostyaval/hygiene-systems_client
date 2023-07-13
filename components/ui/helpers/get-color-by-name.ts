export default function getColorByName(color: any, prefix = 'bg'): string {
  if (prefix === 'bg') {
    switch (color) {
      case 'white':
        return `bg-neutral-100`
      case 'light_gray':
        return `bg-neutral-200`
      case 'gray':
        return `bg-neutral-300`
      case 'dark_gray':
        return `bg-neutral-400`
      case 'turquoise':
        return `bg-turquoise-500`
      default:
        return ''
    }
  }

  if (prefix === 'text') {
    switch (color) {
      case 'white':
        return `text-neutral-600`
      case 'light_gray':
        return `text-neutral-600`
      case 'gray':
        return `text-neutral-600`
      case 'dark_gray':
        return `text-neutral-100`
      case 'turquoise':
        return `text-neutral-100`
      default:
        return ''
    }
  }

  if (prefix === 'title') {
    switch (color) {
      case 'white':
        return `text-turquoise-500`
      case 'light_gray':
        return `text-turquoise-500`
      case 'gray':
        return `text-turquoise-500`
      case 'dark_gray':
        return `text-neutral-100`
      case 'turquoise':
        return `text-neutral-100`
      default:
        return ''
    }
  }

  return ''
}
