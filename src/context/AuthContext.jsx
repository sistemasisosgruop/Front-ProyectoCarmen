import { createContext, useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode'
import { toast } from 'react-toastify'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    try {
      const token = window.sessionStorage.getItem('token')
      if (token) {
        const userDecode = jwtDecode(token)

        setUser({
          id: userDecode.id,
          email: userDecode.email,
          firstName: userDecode.first_name,
          lastName: userDecode.last_name
        })
      }
    } catch (error) {
      toast.error(`Usted no a iniciado sesión ${error}`)
    }
  }, [])

  const login = token => {
    window.sessionStorage.setItem('token', token)
    const userDecode = jwtDecode(token)
    setUser({
      id: userDecode.id,
      email: userDecode.email,
      firstName: userDecode.firstName,
      lastName: userDecode.lastName
    })
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
