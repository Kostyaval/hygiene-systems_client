<template>
  <CommonModal>
    <div @click="close(1)">{{ title }}</div>
  </CommonModal>
</template>

<script setup lang="ts">
import useModalProps from '~/components/ui/modals/utils/use-modal-props'
import CommonModal from '~/components/ui/modals/templates/CommonModal.vue'

defineProps({ ...useModalProps, title: String })
</script>
