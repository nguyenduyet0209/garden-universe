import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import {
  getAccessTokenInSession,
  getEthAddressInSession,
  getNonceInSession,
  getUserIdInSession,
} from '../../utils/sesstionStorage'

export const getEthSettingAction = createAsyncThunk(
  'auth/getEthSettingAction',
  async () => {
    try {
      const settingData = await axios.get('https://gardenuniverse.io/ddapp/eth')
      return settingData?.data
    } catch (error) {
      console.log(error)
    }
  }
)

const authSliceReducer = createSlice({
  name: 'auth',
  initialState: {
    allow_connect: null,
    allow_deposit: null,
    allow_withdraw: null,
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
  extraReducers: (builder) => {
    builder.addCase(getEthSettingAction.fulfilled, (state, action) => {
      if (action.payload) {
        state.allow_connect = action.payload.eth.allow_connect
        state.allow_deposit = action.payload.eth.allow_deposit
        state.allow_withdraw = action.payload.eth.allow_withdraw
      }
    })
  },
})
export const { setAuth, setIsConnecting, resetAuth, resetIsConnecting } =
  authSliceReducer.actions
export default authSliceReducer.reducer
