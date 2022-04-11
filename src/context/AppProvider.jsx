import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const AppContext = createContext()

export default function AppProvider({ children }) {
  const [isDepositVisible, setIsDepositVisible] = useState(false)
  const [isWithdrawVisible, setIsWithdrawVisible] = useState(false)

  return (
    <AppContext.Provider
      value={{
        isDepositVisible,
        setIsDepositVisible,
        isWithdrawVisible,
        setIsWithdrawVisible,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.element,
}
