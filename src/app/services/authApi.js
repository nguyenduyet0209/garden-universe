import { createApi } from '@reduxjs/toolkit/query/react'
import baseQueryWithReauth from '../config/axiosFetchBaseQuery'

export const authApi = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['authApi'],
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: (pathApi) => ({
        url: pathApi,
        method: 'GET',
      }),
    }),
    getTradeHistory: builder.query({
      query: (pathUrl) => ({
        url: pathUrl,
        method: 'GET',
      }),
      providesTags: ['authApi'],
    }),
    depositWithHash: builder.mutation({
      query: ({ payload }) => ({
        url: '/ddapp/account/deposit',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['authApi'],
    }),
    withdraw: builder.mutation({
      query: ({ payload }) => ({
        url: '/ddapp/account/withdraw',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
})

// Export hooks for usage in functional components
export const {
  useGetProfileQuery,
  useGetTradeHistoryQuery,
  useDepositWithHashMutation,
  useWithdrawMutation,
} = authApi
