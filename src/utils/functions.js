export function debounce(func, wait, immediate) {
  // we need to save these in the closure
  let timeout, args, context, timestamp, result
  return function () {
    context = this
    args = arguments
    timestamp = new Date()
    // this is where the magic happens
    // eslint-disable-next-line no-var
    var later = function () {
      // how long ago was the last call
      const last = new Date() - timestamp
      // if the latest call was less that the wait period ago
      // then we reset the timeout to wait for the difference
      if (last < wait) {
        timeout = setTimeout(later, wait - last)
      }
      // or if not we can null out the timer and run the latest
      else {
        timeout = null
        if (!immediate) result = func.apply(context, args)
      }
    }
    const callNow = immediate && !timeout
    // we only need to set the timer now if one isn't already running
    if (!timeout) {
      timeout = setTimeout(later, wait)
    }
    if (callNow) result = func.apply(context, args)
    return result
  }
}
