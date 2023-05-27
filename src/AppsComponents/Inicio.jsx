import "../Pagina principal/SigaApp.css"

const Inicio = () => {

    return(
        <>
        <section className="Seccion">
            <div class="jumbotron">
                <h1 class="display-4">Bienvenido a SIGA</h1>
                <p class="lead">En esta plataforma podras:</p>
                <ul>
                    <li>Crear Estudiantes, asignaturas y profesores.</li>
                    <li>Registrar estudiantes y profesores a los cursos.</li>
                    <li>Ver los profesores y estudiantes asociados a los cursos.</li>
                </ul>
                    <hr class="my-4"/>
            </div>
        </section>
        </>
    )

}

export default Inicio;