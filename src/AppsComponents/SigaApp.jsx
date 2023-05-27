import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import CrearApp from "./CrearApp"
import RegistrarApp from "./RegistrarApp";

const SigaApp = () => {

  /*const history = useHistory();*/

  return(
    <>
      <h2 className="text-center">Bienvenido al sistema SIGA</h2>

      <BrowserRouter>
        <nav className="menu">
        <Link to={"/CrearApp"}><button type="button" class="btn btn-primary">Crear</button></Link>
        <Link to={"/RegistrarApp"}><button type="button" class="btn btn-primary">Registrar</button></Link>
        </nav>

        <Routes>
          <Route path="/CrearApp" element={<CrearApp/>}/>
          <Route path="/RegistrarApp" element={<RegistrarApp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );

};

export default SigaApp;

