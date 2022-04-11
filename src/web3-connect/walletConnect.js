import axios from 'axios'
import Web3 from 'web3'

import { setAuth } from '../app/slices/authSlice'
import {
  getEthAddressInSession,
  setAuthToSession,
} from '../utils/sesstionStorage'

export async function onLoginWithWalletConnect({ provider, dispatch }) {
  try {
    const web3 = new Web3(provider)
    const accounts = await web3.eth.getAccounts()
    if (accounts.length === 0) {
      console.log('Please connect to MetaMask!')
    } else if (accounts[0] !== getEthAddressInSession()) {
      const accEthAddress = accounts[0]

      // get nonce
      const { nonce } = await getEthAccountInfo(accEthAddress)

      // get signature
      const message = 'Your nonce is ' + nonce
      const signature = await web3.eth.personal.sign(message, accEthAddress)

      // get accessToken
      const { accessToken } = await loginWithSignature({
        ethAddress: accEthAddress,
        signature: signature && signature,
      })

      // save ethAddress, nonce, accessToken to store and session
      if (accEthAddress && nonce && accessToken) {
        const payload = {
          accessToken: accessToken,
          ethAddress: accEthAddress,
          nonce: nonce,
        }

        dispatch(setAuth(payload))
        setAuthToSession({
          accessToken,
          ethAddress: accEthAddress,
          nonce,
        })
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getEthAccountInfo(accEthAddress) {
  try {
    const infoData = await axios.get(
      `https://api.gardenuniverse.io/connect/MetaMask/account?ethAddress=${accEthAddress}`
    )
    return infoData?.data
  } catch (error) {
    console.log(error)
  }
}

export async function loginWithSignature({ ethAddress, signature }) {
  try {
    const loginData = await axios({
      method: 'post',
      url: 'https://api.gardenuniverse.io/connect/MetaMask/auth',
      data: {
        ethAddress: ethAddress,
        signature: signature,
        wallet: 'metamask',
      },
    })
    console.log('loginData?.data', loginData?.data)
    return loginData?.data
  } catch (error) {
    console.log(error)
  }
}
