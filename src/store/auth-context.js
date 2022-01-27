import React, { useState } from 'react'

const initialState = {
  isLoggedIn: false,
  username: '',
  login: () => {},
  logout: () => {},
}

const AuthContext = React.createContext(initialState)

export const AuthContextProvider = (props) => {
  const [cin, setCin] = useState('')

  let login = false
  if (localStorage.getItem('cin') != null) {
    login = true
  }

  const logoutHandler = () => {
    localStorage.clear()
    setCin(null)
  }

  const loginHandler = (cin) => {
    localStorage.setItem('cin', cin)
    setCin(cin)
  }

  const contextValue = {
    isLoggedIn: login,
    cin,
    login: loginHandler,
    logout: logoutHandler,
  }

  return (
    <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
  )
}

export default AuthContext
