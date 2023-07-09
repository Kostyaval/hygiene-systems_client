export default function getColorVar(color: any, prefix = 'bg'): string {
  switch (color) {
    case 'neutral-light':
      return `${prefix}-neutral-200`
    case 'neutral':
      return `${prefix}-neutral-500`
    case 'turquoise-light':
      return `${prefix}-turquoise-200`
    case 'turquoise':
      return `${prefix}-turquoise-500`
    case 'orange-light':
      return `${prefix}-orange-200`
    case 'orange':
      return `${prefix}-orange-500`
    case 'purple-light':
      return `${prefix}-purple-200`
    case 'purple':
      return `${prefix}-purple-500`
    case 'red-light':
      return `${prefix}-red-200`
    case 'red':
      return `${prefix}-red-500`
    case 'transparent':
      return `${prefix}-transparent`
    default:
      return ''
  }
}
