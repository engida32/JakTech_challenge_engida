import { Navigate } from "react-router-dom";
import { useUser } from "../hooks/useAuth";

export const ProtectedRoute = ({ children }) => {
  const user = useUser();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};
