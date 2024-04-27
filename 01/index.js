export function calculateDiscount(price, percent) {
  console.log('start')
  try {
    if (typeof price !== 'number' || typeof  percent !== 'number') {
      throw new TypeError('price and percent must be numbers')
    }
    else {
      console.log('all work')
      return (price / 100) * percent
    }
  } catch (error) {
    console.log('catch')
    console.error('An error occurred:', error.message)
    throw error
  }
}

export function getMarketingPrice(product) {
  try {
    const productObject = JSON.parse(product)

    if (typeof productObject !== 'object') {
      throw new TypeError('It is not an object');
    }

    if (!productObject.hasOwnProperty('prices')) {
      console.log(productObject)
      return null
    } else {
      console.log(productObject.prices.marketingPrice)
      return productObject.prices.marketingPrice
    }
  } catch(error) {
    console.log('An error occurred:', error.message)
    throw error
  }
}

// Функция имитирует неудачный запрос за картинкой
function fetchAvatarImage(userId, imageUrl) {
  return new Promise((resolve, reject) => {
    let success = true // Предположим, что операция завершилась успешно

    if (success) {
      console.log(imageUrl)
        return resolve({url: imageUrl})
    } else {
      reject(new Error(`Error while fetching image for user with id ${userId}`))
    }
  });
}

export async function getAvatarUrl(userId, imageUrl) {
  try {
    if (typeof userId !== 'number') {
      console.log('not a number')
      throw new TypeError('UserId must be numbers!')
    }
   else {
      const image = await fetchAvatarImage(userId, imageUrl)
        return image.url;
  }
  }catch (error) {
    console.log('An error occurred:', error.message)
    throw error
  }
}
