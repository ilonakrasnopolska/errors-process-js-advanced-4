import {createButton, createDiv, createImage, createTitle} from "./htmlElements.js"

//create func for creating page with error status response
export function createErrorPage (status) {
  const errorPageBox = createDiv('d-flex')
  const title = createTitle('h1', 'text-center', status)
  const img = createImage('rounded', '../../error.png', 'error')
  const button = createButton('btn', 'Refresh')

  //create styles and classes
  errorPageBox.classList.add('justify-content-center', 'flex-column-reverse')
  errorPageBox.style.paddingTop = '200px'
  title.style.marginBottom = '10px'
  img.classList.add('rounded', 'mx-auto', 'd-block')
  img.style.width = '200px'
  button.classList.add('mx-auto', 'btn-secondary', 'text-light')
  button.style.width = '200px'
  button.style.fontSize = '25px'

  button.addEventListener('click', () => {
    errorPageBox.remove()
    // update page
    location.reload()
  })

  errorPageBox.append(button)
  errorPageBox.append(title, img)
  return errorPageBox
}

