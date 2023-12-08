<template>
  <the-button
    :icon-left="chatIsOpen ? 'button/arrow-down' : 'button/message'"
    id="conversation-badge"
    class="relative"
    @click="toggleChat"
  >
    <span class="ml-2 text-button-m md:hidden">Help</span>
    <span
      class="absolute -right-2 -top-2 ml-2 inline-block rounded-full bg-orange-500 px-2 py-1 text-button-m leading-none md:hidden"
      v-if="notificationCounter"
      >{{ notificationCounter }}</span
    >
  </the-button>
</template>

<script setup lang="ts">
import TheButton from '~/components/ui/buttons/TheButton.vue'

const props = defineProps<{ script: string }>()

const zE = ref<any>('')
const chatIsOpen = ref(false)
const notificationCounter = ref<number>(0)

const populateUnreadIndicator = (count: number) => {
  notificationCounter.value = count
}

const toggleChat = () => {
  if (!zE.value) return
  const action = chatIsOpen.value ? 'close' : 'open'
  zE.value('messenger', action)
  notificationCounter.value = 0
}
onMounted(async () => {
  // Add Zendesk Widget Script
  const zendeskWidgetScript = document.createElement('script')
  zendeskWidgetScript.id = 'ze-snippet'
  zendeskWidgetScript.src = props.script
  document.body.appendChild(zendeskWidgetScript)
  //
  // // Custom Launcher Behavior
  zendeskWidgetScript.onload = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    //@ts-ignore
    zE.value = window?.zE
    if (!zE.value) return
    zE.value('messenger', 'close')

    zE.value('messenger:on', 'unreadMessages', (count: number) => {
      populateUnreadIndicator(count)
    })

    zE.value('messenger:on', 'open', function () {
      chatIsOpen.value = true
    })

    zE.value('messenger:on', 'close', function () {
      chatIsOpen.value = false
    })
  }
})
</script>

<style scoped></style>
