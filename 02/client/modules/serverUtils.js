import {createErrorPage} from "./helpers/errorStatusPage.js"
import {appContainer} from "./serverApi.js"
import {showErrorNotification} from "./helpers/errorBlock.js"

const SERVER_RES_STATUS_500 = 500
const SERVER_RES_STATUS_404 = 404
export const TIMING_SEC_3 = 3000 //time for hiding error block


//create func for fetch data from server and throw and catch errors
export function fetchAndParseJSON (src, retries = 2) {
  return fetch(src)
    .then(res => {

      if (res.status === SERVER_RES_STATUS_500 && retries > 0) {
        console.warn('Retrying request, attempts left:', retries)
        appContainer.append(showErrorNotification('Retry attempt:', retries))
        return fetchAndParseJSON(src, retries - 1)
      }

      if (retries === 0) {
        console.warn('No more attempts left!')
        appContainer.append(createErrorPage('Internal Server Error!'))
        throw new SyntaxError('Internal Server Error')
      }

      if (res.status === SERVER_RES_STATUS_404) {
        appContainer.append(createErrorPage('404 RESOURCE NOT FOUND!'))
        throw new SyntaxError('Resource not found')
      }

      return res.json()
    })
}
