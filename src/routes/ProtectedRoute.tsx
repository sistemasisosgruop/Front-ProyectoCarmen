import { Navigate, Route } from "react-router-dom";

interface Props {
  path: string;
  element: JSX.Element;
}

const ProtectedRoute = ({ path, element }: Props): JSX.Element => {
  if (true === true) {
    return true && <Route path={path} element={element} />;
  }

  return <Navigate to="/" replace state={{ from: path }} />;
};

export default ProtectedRoute;
