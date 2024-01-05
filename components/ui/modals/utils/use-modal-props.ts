import type { PropType } from 'vue'

export default {
  close: {
    type: Function as PropType<(payload?: any) => void>,
    default: () => {},
  },
  dismiss: {
    type: Function as PropType<(reason?: any) => void>,
    default: () => {},
  },
}
