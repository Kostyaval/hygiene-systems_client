export default defineNuxtRouteMiddleware((from) => {
  const { $bodyScrollLock } = useNuxtApp()

  if (from.path) {
    $bodyScrollLock.clearAllBodyScrollLocks()
  }
})
