export default function detectProvider() {
  let provider
  if (window.ethereum) {
    provider = window.ethereum
  } else if (window.web3) {
    provider = window.web3.currentProvider
  } else {
    window.alert('No Ethereum browser detected! Check out MetaMask')
  }
  return provider
}
