import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// auth
import Login from "./pages/auth/Login";
import Registro from "./pages/auth/Registro";
// catálogo
import Catalogo from "./pages/catalogo/Catalogo";
import DetalleCanino from "./pages/catalogo/DetalleCanino";
// adopción
import FormularioAdopcion from "./pages/adopcion/FormularioAdopcion";
import Resultado from "./pages/adopcion/Resultado";
// admin
import PanelSolicitudes from "./pages/admin/PanelSolicitudes";
import DetalleSolicitud from "./pages/admin/DetalleSolicitud";
import GestionCaninos from "./pages/admin/GestionCaninos";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* públicas */}
        <Route path="/" element={<Navigate to="/catalogo" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/catalogo/:id" element={<DetalleCanino />} />

        {/* adoptante */}
        <Route path="/adopcion/:caninoId" element={<FormularioAdopcion />} />
        <Route path="/resultado/:solicitudId" element={<Resultado />} />

        {/* administrador */}
        <Route path="/admin/solicitudes" element={<PanelSolicitudes />} />
        <Route path="/admin/solicitudes/:id" element={<DetalleSolicitud />} />
        <Route path="/admin/caninos" element={<GestionCaninos />} />

        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}