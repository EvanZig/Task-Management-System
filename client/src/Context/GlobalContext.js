import React, { useState, useContext, createContext } from 'react'

const defaultState = {
  authStatus: 'LoggedOut',
  role: '',
  token: '',
  setAuthStatus: () => {},
  setRole: () => {},
  setToken: () => {},
}

export const AuthContext = createContext(defaultState)

export const AuthIsSignedIn = ({ children }) => {
  const { authStatus } = useContext(AuthContext)
  return authStatus === 'LoggedIn' ? <>{children}</> : null
}

export const AuthIsNotSignedIn = ({ children }) => {
  const { authStatus } = useContext(AuthContext)
  return authStatus === 'LoggedOut' ? <>{children}</> : null
}

export const AuthProvider = ({ children }) => {
  const [authStatus, setAuthStatus] = useState('LoggedOut')
  const [token, setToken] = useState('')
  const [role, setRole] = useState('')

  const value = {
    authStatus,
    setAuthStatus,
    role,
    setRole,
    token,
    setToken,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
