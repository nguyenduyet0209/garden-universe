import Cookie from 'js-cookie'

export async function setTokenToCookie({ access_token, expireTime }) {
  Cookie.set(ACCESS_TOKEN, access_token, {
    expires: expireTime,
  })
}
const ACCESS_TOKEN = 'access_token'
export function getTokenFromCookie() {
  return Cookie.get(ACCESS_TOKEN)
}

const REFRESH_TOKEN = 'refresh_token'
export async function setRefreshTokenToCookie({ refresh_token, expireTime }) {
  Cookie.set(REFRESH_TOKEN, refresh_token, {
    expires: expireTime,
  })
}

export function getRefreshTokenFromCookie() {
  return Cookie.get(REFRESH_TOKEN)
}

const SHOPPING_CART = 'SHOPPING_CART'
const keys = ['access_token', 'refresh_token']
export function clearCookie() {
  Object.values(keys).forEach((key) => {
    if (key !== SHOPPING_CART) {
      Cookie.remove(key)
    }
  })
}
