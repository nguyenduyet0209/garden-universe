import axios from 'axios'
// import Web3 from 'web3'
import jwtDecode from 'jwt-decode'
import { API_BASE_URL } from '../utils/constants'
import { setAuth } from '../app/slices/authSlice'
import {
  getEthAddressInSession,
  setAuthToSession,
} from '../utils/sesstionStorage'

export async function onLoginWithWalletConnect({ provider, dispatch }) {
  try {
    const tronWeb = provider
    const account = await tronWeb.trx.getAccount()
    if (!account.__payload__.address) {
      console.log('Please connect to TronLink!')
    } else if (account.__payload__.address !== getEthAddressInSession()) {
      const accEthAddress = account.__payload__.address
      const tronAddress = tronWeb.address.fromHex(accEthAddress)
      // get nonce
      const { nonce } = await getEthAccountInfo(accEthAddress)
      // get signature
      const message = tronWeb.toHex('Your nonce is ' + nonce)
      const signature = await tronWeb.trx.sign(message)
      // get accessToken
      const { accessToken } = await loginWithSignature({
        ethAddress: accEthAddress,
        signature: signature && signature,
      })
      // save ethAddress, nonce, accessToken to store and session
      if (accEthAddress && nonce && accessToken) {
        const {
          sub: { id },
        } = jwtDecode(accessToken)
        const payload = {
          accessToken: accessToken,
          ethAddress: tronAddress,
          nonce: nonce,
          userId: id,
        }
        dispatch(setAuth(payload))
        setAuthToSession({
          accessToken,
          ethAddress: tronAddress,
          nonce,
          id,
        })
      }
    }
  } catch (error) {
    if (error === 'Invalid address provided') {
      window.alert('Please unlock TronLink before connect wallet!')
    }
    console.log(error)
  }
}

export async function getEthAccountInfo(accEthAddress) {
  try {
    const infoData = await axios.get(
      `${API_BASE_URL}connect/MetaMask/account?ethAddress=${accEthAddress}`
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
      url: `${API_BASE_URL}connect/MetaMask/auth`,
      data: {
        ethAddress: ethAddress,
        signature: signature,
        wallet: 'metamask',
      },
    })
    return loginData?.data
  } catch (error) {
    console.log(error)
  }
}
