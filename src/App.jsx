import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./components/pages/Inicio";
import Administrador from "./components/pages/Administrador";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Error404 from "./components/pages/Error404";
import SobreNosotros from "./components/pages/SobreNosotros";
import Login from "./components/pages/Login";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormularioJuego from "./components/pages/Juego/FormularioJuego";
import ListaUsuarios from "./components/pages/Usuarios/ListaUsuarios";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Inicio />} />

          <Route path="/sobrenosotros" element={<SobreNosotros />} />
          <Route path="/login" element={<Login />} />
          <Route path="/administrador" element={<Administrador />} />
          <Route
            path="/administrador-juego/crear"
            element={<FormularioJuego crearJuego={true} />}
          />
          <Route
            path="/administrador-juego/editar/:id"
            element={<FormularioJuego crearJuego={false} />}
          />

          <Route path="/administrador/usuarios" element={<ListaUsuarios />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
