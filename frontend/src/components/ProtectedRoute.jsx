import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const autenticado = true; // temporal, luego viene de AuthContext
  return autenticado ? children : <Navigate to="/login" />;
}