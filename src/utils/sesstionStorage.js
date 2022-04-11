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

export function setAuthToSession({ accessToken, ethAddress, nonce }) {
  sessionStorage.setItem('ACCESS_TOKEN', accessToken)
  sessionStorage.setItem('ETH_ADDRESS', ethAddress)
  sessionStorage.setItem('NONCE', nonce)
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

export function getSignatureInSession() {
  return sessionStorage.getItem('SIGNATURE')
}

export function resetSession() {
  sessionStorage.clear()
}
