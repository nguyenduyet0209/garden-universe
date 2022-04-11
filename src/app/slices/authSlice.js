import { createSlice } from '@reduxjs/toolkit'
import {
  getAccessTokenInSession,
  getEthAddressInSession,
  getNonceInSession,
  getUserIdInSession,
} from '../../utils/sesstionStorage'

const authSliceReducer = createSlice({
  name: 'auth',
  initialState: {
    accessToken: getAccessTokenInSession() || null,
    ethAddress: getEthAddressInSession() || null,
    nonce: getNonceInSession() || null,
    userId: getUserIdInSession() || null,
    isConnecting: false,
  },
  reducers: {
    setAuth: (
      state,
      { payload: { accessToken, ethAddress, nonce, userId } }
    ) => {
      state.accessToken = accessToken
      state.ethAddress = ethAddress
      state.nonce = nonce
      state.userId = userId
    },
    setIsConnecting: (state) => {
      state.isConnecting = true
    },
    resetAuth: (state) => {
      state.accessToken = null
      state.ethAddress = null
      state.nonce = null
    },
    resetIsConnecting: (state) => {
      state.isConnecting = false
    },
  },
})
export const { setAuth, setIsConnecting, resetAuth, resetIsConnecting } =
  authSliceReducer.actions
export default authSliceReducer.reducer
