import "../Pagina principal/SigaApp.css"

const Inicio = () => {

    return(
        <>
        <section className="Seccion">
            <div className="jumbotron">
                <h1 className="display-4">Bienvenido a SIGA</h1>
                <p className="lead">En esta plataforma podras:</p>
                <ul>
                    <li>Crear Estudiantes, asignaturas y profesores.</li>
                    <li>Registrar estudiantes y profesores a los cursos.</li>
                    <li>Ver los profesores y estudiantes asociados a los cursos.</li>
                </ul>
                    <hr className="my-4"/>
            </div>
        </section>
        </>
    )

}

export default Inicio;