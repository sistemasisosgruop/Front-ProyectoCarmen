import { User, UserResponse } from 'types/user'
import { ReactNode, createContext, useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode'
import { toast } from 'react-toastify'

interface Props {
  children: ReactNode
}

interface AuthContextType {
  user: User | null
  accessToken: string
  login: (token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User>({} as User)
  const [accessToken, setAccessToken] = useState<string>(window.sessionStorage.getItem('token') ?? '')

  useEffect(() => {
    try {
      if (accessToken) {
        const userDecode: UserResponse = jwtDecode(accessToken.slice(4))

        setUser({
          id: userDecode.id,
          email: userDecode.email,
          firstName: userDecode.first_name,
          lastName: userDecode.last_name,
          roleId: userDecode.role_id
        })
      }
    } catch (error) {
      toast.error(`Usted no a iniciado sesión ${error}`)
    }
  }, [accessToken])

  const login = (token: string) => {
    setAccessToken(token)
    window.sessionStorage.setItem('token', token)
    const userDecode: UserResponse = jwtDecode(token)
    setUser({
      id: userDecode.id,
      email: userDecode.email,
      firstName: userDecode.first_name,
      lastName: userDecode.last_name,
      roleId: userDecode.role_id
    })
  }

  const logout = () => {
    setUser({} as User)
    window.sessionStorage.removeItem('token')
  }

  return <AuthContext.Provider value={{ user, accessToken, login, logout }}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
