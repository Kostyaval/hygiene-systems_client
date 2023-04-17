<template>
  <template v-for="(item, index) in modals" :key="index">
    <transition name="modal-backdrop">
      <div
        v-show="!item.removing"
        class="absolute-cover fixed bg-neutral-900/[.5]"
        @click="closeModal(item)"
      >
        <component v-show="!item.removing" :is="item.component" v-bind="item.props" />
      </div>
    </transition>
  </template>
</template>

<script setup lang="ts">
import { ModalOptions, $modal } from '~/components/ui/modals/utils/modal-manager'

const modals = $modal.modals

const closeModal = async (modal: ModalOptions) => {
  modal.props?.dismiss()
  setTimeout(() => $modal.removeModal(modal.id), 500)
}

// const removeModal = (modalId: number) => {
//   $modal.removeModal(modalId)
// }
</script>
<style lang="sass">
.modal-backdrop-enter-active, .modal-backdrop-leave-active
  transition: opacity 0.5s ease
.modal-backdrop-enter-from, .modal-backdrop-leave-to
  opacity: 0
</style>
