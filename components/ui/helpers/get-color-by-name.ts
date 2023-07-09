export default function getColorByName(color: any): string {
  switch (color) {
    case 'white':
      return `bg-neutral-100 text-neutral-600`
    case 'light_gray':
      return `bg-neutral-200 text-neutral-600`
    case 'gray':
      return `bg-neutral-300 text-neutral-600`
    case 'dark-gray':
      return `bg-neutral-400 text-neutral-100`
    case 'turquoise':
      return `bg-turquoise-500 text-neutral-100`
    default:
      return ''
  }
}
