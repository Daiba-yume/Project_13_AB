import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);

  // Si le token n'est pas présent, redirige vers la page de login
  if (!token) {
    return <Navigate to="/login" />;
  }

  return children; // Si le token est présent, rend l'élément enfant (Profile)
};

export default PrivateRoute;
