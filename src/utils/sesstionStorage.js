// GET KEY TO SESSION
export function setAccessTokenToSession(accessToken) {
  sessionStorage.setItem('ACCESS_TOKEN', accessToken)
}

export function setEthAddressToSession(ethAddress) {
  sessionStorage.setItem('ETH_ADDRESS', ethAddress)
}

export function setNonceToSession(nonce) {
  sessionStorage.setItem('NONCE', nonce)
}

export function setUserIdToSession(id) {
  sessionStorage.setItem('USER_ID', id)
}

export function setAuthToSession({ accessToken, ethAddress, nonce, id }) {
  sessionStorage.setItem('ACCESS_TOKEN', accessToken)
  sessionStorage.setItem('ETH_ADDRESS', ethAddress)
  sessionStorage.setItem('NONCE', nonce)
  sessionStorage.setItem('USER_ID', id)
}

export function setGameVersionToSession(gameVersion) {
  sessionStorage.setItem('GAME_VERSION', gameVersion)
}

export function setTokenAddressToSession(token_address) {
  sessionStorage.setItem('TOKEN_ADDRESS', token_address)
}

export function setSignatureToSession(signature) {
  sessionStorage.setItem('SIGNATURE', signature)
}

// GET KEY IN SESSION
export function getAccessTokenInSession() {
  return sessionStorage.getItem('ACCESS_TOKEN')
}

export function getEthAddressInSession() {
  return sessionStorage.getItem('ETH_ADDRESS')
}

export function getNonceInSession() {
  return sessionStorage.getItem('NONCE')
}

export function getUserIdInSession() {
  return sessionStorage.getItem('USER_ID')
}

export function getSignatureInSession() {
  return sessionStorage.getItem('SIGNATURE')
}

export function getGameVersionInSession() {
  return sessionStorage.getItem('GAME_VERSION')
}

export function getTokenAddressInSession() {
  return sessionStorage.getItem('TOKEN_ADDRESS')
}

export function resetSession() {
  sessionStorage.clear()
}
