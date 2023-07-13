import { type User } from 'types/user'
import { type ReactNode, createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL, KeyStorage } from '@utils/consts'
import jwtDecode from 'jwt-decode'
import { type Role } from 'types/role'

interface Props {
  children: ReactNode
}

interface AuthContextType {
  user: User | null
  role: Role | null
  accessToken: string
  login: (token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

function AuthProvider({ children }: Props) {
  const [accessToken, setAccessToken] = useState(window.localStorage.getItem(KeyStorage.JWT_TOKEN) ?? '')
  const [userId, setUserId] = useState<string | null>(null)
  const [role, setRole] = useState<Role | null>(null)
  const [user, setUser] = useState<User | null>(() => {
    try {
      const user = window.sessionStorage.getItem(KeyStorage.USER_LOGGED)
      console.log({ 'user-found': user })
      return user ? JSON.parse(user) : null
    } catch (error) {
      console.error(error)
      throw new Error('Error')
    }
  })

  useEffect(() => {
    if (!user && userId) {
      getUserById(userId)
    }
    // if (userId && accessToken) {
    //   getUserById(userId)
    // }
  }, [])

  const getUserById = async (userId: string): Promise<void> => {
    try {
      const { data } = await axios.get(`${API_URL}/users/${userId}`)
      console.log(data)
      setUser(data)
    } catch (error) {
      console.error(error)
      throw new Error('The user is not exist')
    }
  }

  const getRoleById = async (roleId: number): Promise<void> => {
    try {
      const { data } = await axios.get(`${API_URL}/roles/${roleId}`)
      setRole(data)
    } catch (error) {
      console.error(error)
      throw new Error('The user is not exist')
    }
  }

  const login = (token: string) => {
    const tokenDecode: User = jwtDecode(token)

    getUserById(tokenDecode.id)
    getRoleById(tokenDecode.roleId)
    setUserId(tokenDecode.id)
    // setRoleId(tokenDecode.roleId)
    setAccessToken(`jwt ${token}`)
    window.localStorage.setItem(KeyStorage.JWT_TOKEN, `jwt ${token}`)
    window.sessionStorage.setItem(KeyStorage.USER_LOGGED, JSON.stringify(user))
  }

  const logout = () => {
    setUser(null)
    window.localStorage.removeItem(KeyStorage.JWT_TOKEN)
    window.sessionStorage.removeItem(KeyStorage.USER_LOGGED)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        accessToken,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
