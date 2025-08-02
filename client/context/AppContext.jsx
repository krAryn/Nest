import React from 'react'
import { createContext, useContext,useState } from 'react'

const AppContext = createContext()

const AppContextProvider = ({ children }) => {
    const [showLogin, setShowLogin] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false)

    const context = {
        showLogin, setShowLogin, showSignUp, setShowSignUp
    }

  return (
    <AppContext.Provider value = {context}>
      {children}
    </AppContext.Provider>
  )
}

/**
 * Call this within a React Component ONLY!
 */
export const useAppContext = () => {
    return useContext(AppContext)
}

export default AppContextProvider
