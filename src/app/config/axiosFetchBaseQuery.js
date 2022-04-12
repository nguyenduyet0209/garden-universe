import { fetchBaseQuery } from '@reduxjs/toolkit/query'

import { NotificationCPN } from '../../views/components/NotificationCPN'
import { API_BASE_URL } from '../../utils/constants'

const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,

  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions)

  if (result.error) {
    switch (result.error.status) {
      case 401:
        // try to get a new token
        console.log('401 authorization')
        break

      case 500:
      case 501:
      case 502:
      case 503:
        NotificationCPN({
          type: 'error',
          message: 'Error',
          description: result.error.error || 'Internal Server Error',
        })
        break
      case 400:
        console.log('bad request')
        break
      case 422:
        console.log('result.error', result.error)
        NotificationCPN({
          type: 'error',
          message: 'Error',
          description:
            result.error?.data?.error || result.error?.data?.amount[0],
        })
        break
      case 403:
        console.log('Authorize')
        break
    }
  }

  return result
}

export default baseQueryWithReauth
