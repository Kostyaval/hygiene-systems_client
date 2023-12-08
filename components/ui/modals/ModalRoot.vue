<template>
  <template v-for="(item, index) in modals" :key="index">
    <transition name="modal-backdrop">
      <div
        v-show="!item.removing"
        class="fixed z-40 bg-neutral-900/50 backdrop-blur-sm absolute-cover"
        @click.self="closeModal(item)"
      >
        <component v-show="!item.removing" :is="item.component" v-bind="item.props" />
      </div>
    </transition>
  </template>
</template>

<script setup lang="ts">
import type { ModalOptions } from '~/components/ui/modals/utils/modal-manager'
import { $modal } from '~/components/ui/modals/utils/modal-manager'

const modals = $modal.modals

const closeModal = async (modal: ModalOptions) => {
  modal.props?.dismiss()
  setTimeout(() => $modal.removeModal(modal.id), 500)
}
</script>
<style lang="sass">
.modal-backdrop-enter-active, .modal-backdrop-leave-active
  transition: opacity 0.5s ease
.modal-backdrop-enter-from, .modal-backdrop-leave-to
  opacity: 0
</style>
