import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ token, redirectTo }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate(redirectTo)
    }
  }, [])

  return token ? <Outlet /> : null
}

export default ProtectedRoute
