import {
  createTitle,
  createList,
  createItem,
  createParagraph,
  createImage
} from './htmlElements.js'

export function render(data) {
   const list = createList('row')
  list.classList.add('row-cols-4', 'py-2')
  for (const product of data) {
    let li = createItem('col')
    let img = createImage('card-img-top', product.image, product.name)
    let title = createTitle('h1', 'card-title', product.name)
    let price = createParagraph('card-text', product.price)
    li.append(img, title, price)
    list.append(li)
  }
  return list
}
