import {fetchAndParseJSON} from "./serverUtils.js"
//if we loaded css styles for not load again
const cssPromises = {}

//function for loading modules , css files and get data from API
export function loadResource(src) {
  //js module
  if (src.endsWith('.js')) {
    return import(src)
  }
  //css file
  if (src.endsWith('.css')) {
    if (!cssPromises[src]) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = src
      cssPromises[src] =  new Promise(resolve => {
        link.addEventListener('load', () => resolve())
      })
      document.head.append(link)
    }
    return cssPromises[src]
  }
  //data from server
  return fetchAndParseJSON(src)
}
