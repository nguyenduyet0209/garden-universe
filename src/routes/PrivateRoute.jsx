import PropTypes from 'prop-types'

import { Navigate, useLocation } from 'react-router-dom'
import { useAppSelector } from '../app/hook'

export default function PrivateRoute({ children }) {
  const location = useLocation()

  const { accessToken } = useAppSelector((state) => state.auth)

  if (!accessToken) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return <>{children}</>
}

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
}
