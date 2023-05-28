import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import CrearApp from "../AppsComponents/Crear/CrearApp"
import Inicio from "../AppsComponents/Inicio"
import "./SigaApp.css"
import Logo from "./imagenes/LogoSiga.png"
import { Error404 } from "../AppsComponents/Error404";


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
                        <li><Link to={"/CrearApp"} className="linkCrear">Crear, Registrar y Ver</Link></li>
                    </ul>
                </nav>
            </header>
                <Routes>
                    <Route exact path="" element={<Inicio/>}/>
                    <Route exact path="/CrearApp" element={<CrearApp/>}/>
                    <Route exact path="*" element={<Error404/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )

}

export default Header;