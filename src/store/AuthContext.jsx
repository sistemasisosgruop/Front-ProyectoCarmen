import { createContext, useState } from 'react'

const token =
  'kjciaubxaukvcudsfdssv7fds7f87dsf87sf5s5a86d5a46s4d6asd6sa54d65wsdas'


const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState<string | null>(null)

  const login = (email, password) => {
    if (email === 'admin@admin.com' && password === 'admin') {
      setToken(token)
    }
  }

  const logout = () => {
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
