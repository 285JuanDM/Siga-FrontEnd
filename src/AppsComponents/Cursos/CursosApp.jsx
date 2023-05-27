import { Container } from "reactstrap"; 
import TablaCursos from "./TablaCursos";

const CursosApp = () =>{
    return(
        <>
            <br />
            <h2 className="text-center">Cursos</h2>
            <br />
            <Container> 
                <TablaCursos />
            </Container>
            

        </>
    )
}

export default CursosApp;