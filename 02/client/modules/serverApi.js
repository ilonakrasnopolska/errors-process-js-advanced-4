import {showErrorNotification} from "./helpers/errorBlock.js"
import {showSpinner, hideSpinner} from "./helpers/spinner.js"
import {loadResource} from "./loadResource.js"
import {createErrorPage} from "./helpers/errorStatusPage.js"
import {createIsOnlineChecker} from "./helpers/isOnlineChecker.js"

//get container
export const appContainer = document.getElementById('app')

export function lazyLoad (moduleName, apiUrl, css) {
  showSpinner()
  appContainer.append(createIsOnlineChecker())
  Promise.all([moduleName, apiUrl, css].map(src => loadResource(src)))
    .then(async ([pageModule, data]) => {
      appContainer.innerHTML = ''
      if (data && data.products) {
        appContainer.append(await pageModule.render(data.products))
      }
    }) .catch(error => {
      appContainer.append(showErrorNotification(error, error))
      console.error('Error loading resources:', error)

    if (error instanceof SyntaxError && error.message === 'Unexpected end of JSON input') {
      appContainer.append(createErrorPage('Error loading resources!'))
    }
  })  .finally(() => {
    hideSpinner()
  })
}

