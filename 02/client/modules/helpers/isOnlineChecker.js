import {createDiv} from "./htmlElements.js"
import {TIMING_SEC_3} from "../serverUtils.js"

//get online status from window
const isOnline = window.navigator.onLine

function hideIsOnlineChecker (box) {
  box.style.display = 'block'

  setTimeout(() => {
    box.style.display = 'none'
  }, TIMING_SEC_3)
}

export function createIsOnlineChecker ()  {
  const box = createDiv('p-1')
  const isOnlineMsg = createDiv('p-2')

  //add styles and classes
  box.classList.add('position-absolute', 'border', 'rounded', 'border-dark', 'top-0', 'end-0', 'z-3')
  box.style.display = 'block'
  isOnlineMsg.classList.add('rounded', 'bg-warning', 'fs-3', 'fw-bold')
  isOnlineMsg.textContent = isOnline ? 'online' : 'offline'

  window.addEventListener('offline', () => {
    isOnlineMsg.textContent = 'offline'
    hideIsOnlineChecker(box)
  })

  window.addEventListener('online', () => {
    isOnlineMsg.textContent = 'online'
    hideIsOnlineChecker(box)
  })

  hideIsOnlineChecker(box)

  box.append(isOnlineMsg)
  return box
}
