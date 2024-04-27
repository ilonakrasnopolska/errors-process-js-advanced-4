//function for creating html elements

function createDiv(className) {
  let div = document.createElement('div')
  div.classList.add(className)
  return div
}

function createTitle(tagName, className, text) {
  let title = document.createElement(tagName)
  title.classList.add(className)
  title.textContent = text
  return title
}

function createList(className) {
  let list = document.createElement('ul')
  list.classList.add(className)
  return list
}

function createItem(className) {
  let item = document.createElement('li')
  item.classList.add(className)
  return item
}

function createParagraph(className, text) {
  let paragraph = document.createElement('p')
  paragraph.classList.add(className)
  paragraph.textContent = text
  return paragraph
}

function createStrong(className, text) {
  let strong = document.createElement('strong')
  strong.classList.add(className)
  strong.textContent = text
  return strong
}

function createButton(className, text) {
  let button = document.createElement('button')
  button.classList.add(className)
  button.textContent = text
  return button
}

function createImage(className, src, alt) {
  let image = document.createElement('img')
  image.classList.add(className)
  image.src = src
  image.alt = alt
  return image
}

export {
  createDiv,
  createTitle,
  createList,
  createItem,
  createParagraph,
  createImage,
  createStrong,
  createButton
}
