export function throttle(func: (...args: any[]) => void, limit: number) {
  let lastFunc: number
  let lastRan: number
  return (...args: any[]) => {
    // @ts-ignore
    const context = this
    if (!lastRan) {
      func.apply(context, args)
      lastRan = Date.now()
    } else {
      clearTimeout(lastFunc)
      lastFunc = window.setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args)
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
    }
  }
}
