import { readonly } from 'vue'

export interface ModalOptions {
  id: number
  component: any
  props?: Record<string, any>
  removing?: boolean
}

class ModalManager {
  private _modals = ref<ModalOptions[]>([])

  get modals() {
    return readonly(this._modals)
  }

  async open(
    component: any,
    props?: Record<string, any>
  ): Promise<[() => void, (reason?: any) => void]> {
    return new Promise((resolve, reject) => {
      const modal: ModalOptions = {
        id: new Date().getTime(),
        component: markRaw(component),
        props: {
          ...props,
          close: (payload?: any) => {
            this.markModalAsRemoved(modal)
            resolve(payload)
          },
          dismiss: (reason?: any) => {
            this.markModalAsRemoved(modal)
            reject(reason)
          },
        },
      }

      this._modals.value.push(modal)
      console.log(this._modals)
    })
  }
  markModalAsRemoved(modal: ModalOptions) {
    // Find the index of the modal to remove
    const index = this._modals.value.findIndex((m) => m.id === modal.id)
    console.log(index)

    if (index !== -1) {
      // Mark the modal as being removed
      this._modals.value[index].removing = true
    }
    console.log(modal)
  }
  removeModal(modalId: number) {
    console.log(modalId)
    // Find the index of the modal to remove
    this._modals.value = this._modals.value.filter((m) => m.id !== modalId)
  }
}

export const $modal = new ModalManager()
