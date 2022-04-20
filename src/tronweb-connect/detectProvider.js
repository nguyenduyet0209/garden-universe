export default function detectProvider() {
  let provider
  if (window.tronWeb) {
    provider = window.tronWeb
  } else {
    window.alert('No Ethereum browser detected! Check out TronLink')
  }
  return provider
}
