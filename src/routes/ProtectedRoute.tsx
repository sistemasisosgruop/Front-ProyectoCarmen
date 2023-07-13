import { AuthContext } from '@context/AuthContext'
import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function ProtectedRoute() {
  const authContext = useContext(AuthContext)

  return authContext?.accessToken ? <Outlet /> : <Navigate to="/iniciar-sesion" replace={true} />
}

export default ProtectedRoute
