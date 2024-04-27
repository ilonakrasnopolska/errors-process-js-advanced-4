import {createDiv, createStrong, createParagraph} from "./htmlElements.js"
import {TIMING_SEC_3} from "../serverUtils.js"

let bottomPosition = 10 //10px for position of block
let errorId = 1 //id number for each errors block 1++
let errorsArr = [] //array for errors

function createWarning (message = 'No Warning')  {
  const errorMsg =createParagraph('p-3')
  errorMsg.style.fontSize = '20px'

  if (message && message.message) {
    if (message.message.includes('JSON')) {
      errorMsg.textContent = 'An error occurred, please try refreshing the page later'
    } else if (message.message.includes('Resource not found')) {
      errorMsg.textContent = 'The list of products is empty'
    } else if (message.message.includes('Internal Server Error')) {
      errorMsg.textContent = 'An error occurred, please try refreshing the page later'
    }
  } else {
    errorMsg.textContent = 'Refreshing the page.Please wait for minute.'
  }

  return errorMsg
}

//func create error block for notification about error
export function showErrorNotification(error, errorMessage) {
  const previousError = errorsArr[errorsArr.length - 1]
  const toast = createDiv('toast')
  const toastHeader = createDiv('toast-header')
  const toastTitle = createStrong('me-auto', error)
  const toastBody = createDiv('toast-body')

  //add all components
  toast.id = `errorBlock${errorId + 1}`
  toast.role = 'alert'
  toast.classList.add('show')
  toast.style.position = 'fixed'

  // set bottom position
  if (previousError) {
    const previousBottom = parseInt(previousError.style.bottom.replace('px', ''))
    toast.style.bottom = `${previousBottom + 210}px`
  } else {
    toast.style.bottom = `${bottomPosition}px`
  }

  toast.style.right = '10px'
  toast.style.height = '200px'
  toastHeader.classList.add('text-bg-danger', 'p-3')
  toastTitle.style.fontSize = '20px'
  toastBody.style.fontSize = '20px'
  toastBody.style.padding = '0'

  toastHeader.append(toastTitle)
  toastBody.append(createWarning(errorMessage))
  toast.append(toastHeader, toastBody)

  errorsArr.push(toast)

    setTimeout(() => {
      toast.classList.remove('show')
      toast.remove()
      errorsArr.splice(0)
    }, TIMING_SEC_3)

  return toast
}

