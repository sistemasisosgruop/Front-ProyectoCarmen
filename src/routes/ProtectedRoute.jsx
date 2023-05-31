import { Navigate, Route } from 'react-router-dom'

const ProtectedRoute = ({ path, element }) => {
  return <Navigate to="/" replace state={{ from: path }} />
}

export default ProtectedRoute
