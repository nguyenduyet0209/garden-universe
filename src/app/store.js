import { configureStore } from '@reduxjs/toolkit'
import authSliceReducer from './slices/authSlice'

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)
