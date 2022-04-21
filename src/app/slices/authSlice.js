import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_BASE_URL } from '../../utils/constants'

import {
  getAccessTokenInSession,
  getEthAddressInSession,
  getGameVersionInSession,
  getNonceInSession,
  getTokenAddressInSession,
  getUserIdInSession,
  setGameVersionToSession,
  setTokenAddressToSession,
} from '../../utils/sesstionStorage'

export const getEthSettingAction = createAsyncThunk(
  'auth/getEthSettingAction',
  async () => {
    try {
      const settingData = await axios.get(`${API_BASE_URL}ddapp/eth`)
      setGameVersionToSession(settingData?.data?.game?.version)
      setTokenAddressToSession(settingData?.data?.eth?.token_address)
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
    gameVersion: getGameVersionInSession() || null,
    token_address: getTokenAddressInSession() || null,
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
        state.gameVersion = action.payload.game.version
        state.token_address = action.payload.eth.token_address
      }
    })
  },
})
export const { setAuth, setIsConnecting, resetAuth, resetIsConnecting } =
  authSliceReducer.actions
export default authSliceReducer.reducer
