import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ token, redirectTo }) => {
  return (
    <>
      {!token && <Navigate to={redirectTo} replace={true} />}
      {token && <Outlet />}
    </>
  )
}

export default ProtectedRoute
