<template>
  <div :class="{ 'active-wrapper': active }">
    <div class="header" :class="{ active }" @click="toggleItem">
      <slot name="header" />
      <svg-icon :name="icon" />
    </div>
    <transition
      name="accordion-item"
      @enter="startTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <div v-show="active" class="body" :class="{ 'active-body': active }">
        <slot name="body" />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  index: {
    type: Number,
    default: 0,
  },
  icon: {
    type: String,
    default: 'default/arrow-down',
  },
})

const active = ref(false)
const toggle = inject('toggle')
const collapseControl = inject('collapseControl')

const toggleItem = () => {
  toggle(props.index)
}

watch(
  () => collapseControl,
  () => {
    active.value = collapseControl[props.index]
  },
  { deep: true }
)

const startTransition = (el) => {
  el.style.height = el.scrollHeight + 'px'
}
const endTransition = (el) => {
  el.style.height = ''
}

onMounted(() => {
  collapseControl[props.index] = false
})
</script>
<style scoped lang="sass">
.header
  position: relative
  cursor: pointer
  .icon
    position: absolute
    right: 0
    top: 0
    bottom: 0
    margin: auto
    color: var(--neutral-500)
    font-size: 24px
    transition: transform .2s
  &.active
    .icon
      transform: rotate(180deg)
      transform-origin: center center

.body
  overflow: hidden

.accordion-item-enter-active, .accordion-item-leave-active
  will-change: height
  transition: height 0.1s ease
.accordion-item-enter, .accordion-item-leave-to
  height: 0 !important
</style>
