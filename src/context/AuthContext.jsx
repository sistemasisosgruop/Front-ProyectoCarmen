import { createContext, useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    try {
      const userDecode = jwtDecode(window.sessionStorage.getItem('token'))
      setUser({
        id: userDecode.id,
        email: userDecode.email,
        firstName: userDecode.first_name,
        lastName: userDecode.last_name
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  const login = token => {
    window.sessionStorage.setItem('token', token)
  }

  const logout = () => {
    setUser(null)
    window.sessionStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
