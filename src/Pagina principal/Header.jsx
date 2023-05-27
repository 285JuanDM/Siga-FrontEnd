import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import CrearApp from "../AppsComponents/CrearApp"
import RegistrarApp from "../AppsComponents/RegistrarApp";
import Inicio from "../AppsComponents/Inicio"
import "./SigaApp.css"
import Logo from "./imagenes/LogoSiga.png"
import CursosApp from "../AppsComponents/CursosApp";

const Header = () =>{

    return(
        <>
            <BrowserRouter>
            <header>
                <div className="logo">
                    <img src={Logo} alt="Logo del siga" />
                </div>
                <nav className="navegacion">
                    <ul className="menu">
                        <li><Link to={""} className="linkPrincipal">Inicio</Link></li>
                        <li><Link to={"/CrearApp"} className="linkCrear">Crear</Link></li>
                        <li><Link to={"/RegistrarApp"} className="linkRegistrar">Registrar</Link></li>
                        <li><Link to={"/Cursos"} className="linkCursos">Cursos</Link></li>
                    </ul>
                </nav>
            </header>
                <Routes>
                    <Route path="" element={<Inicio/>}/>
                    <Route path="/CrearApp" element={<CrearApp/>}/>
                    <Route path="/RegistrarApp" element={<RegistrarApp/>}/>
                    <Route path="/Cursos" element={<CursosApp/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )

}

export default Header;