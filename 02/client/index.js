import {lazyLoad} from "./modules/serverApi.js"

const localUrl = "http://localhost:3000"
const URL = "/api/products"
// const URL = '/api/products?json_invalid=true'
// const URL = 'api/products?status=500'
// const URL = 'api/products?status=404'
// const URL = '/api/products?status=200'

lazyLoad('./helpers/visualPart.js',
  `${localUrl}${URL}`,
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css')

