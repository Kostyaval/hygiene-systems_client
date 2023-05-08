import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock-upgrade'

interface BodyScrollLock {
  disableBodyScroll(targetElement: HTMLElement | Ref<HTMLElement>, options?: any): void

  enableBodyScroll(targetElement: HTMLElement | Ref<HTMLElement>): void

  clearAllBodyScrollLocks(): void
}
export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: (msg: string) => `Hello ${msg}!`,
      bodyScrollLock: {
        disableBodyScroll,
        enableBodyScroll,
        clearAllBodyScrollLocks,
      } as BodyScrollLock,
    },
  }
})
