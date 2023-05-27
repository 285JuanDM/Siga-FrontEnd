import { Modal, ModalBody, ModalHeader, FormGroup, ModalFooter, Button } from "reactstrap"
import {useState} from "react"
import "./CrearApp.css"

const CrearApp = () => {

  const [modalEstudianteEstado, setModalEstudianteEstado] = useState(false)
  const [modalProfesorEstado, setModalProfesorEstado] = useState(false)
  const [modalAsignaturaEstado, setModalAsignaturaEstado] = useState(false)

  const MostrarModalEstudiante = () =>{
    setModalEstudianteEstado(true)
  }

  const MostrarModalProfesor = () =>{
    setModalProfesorEstado(true)
  }

  const MostrarModalAsignatura = () =>{
    setModalAsignaturaEstado(true)
  }

  const OcultarModalEstudiante = () =>{
    setModalEstudianteEstado(false)
  }

  const OcultarModalProfesor = () =>{
    setModalProfesorEstado(false)
  }

  const OcultarModalAsignatura = () =>{
    setModalAsignaturaEstado(false)
  }

    return(
      <>
        <br />
        <h2 className="text-center">Crear</h2>

        <div className="boton-column">
          <Button className="btn-estudiantes" color="light" onClick={MostrarModalEstudiante}>Estudiante</Button>
          <Button className="btn-profesores" color="light" onClick={MostrarModalProfesor}>Profesor</Button>
          <Button className="btn-asignaturas" color="light" onClick={MostrarModalAsignatura}>Asignatura</Button>
        </div>

        <Modal isOpen={modalEstudianteEstado}>
            <ModalHeader>
                <h3>Crear Estudiante:</h3>
            </ModalHeader>

            <ModalBody>
                <FormGroup>
                    <label htmlFor="ID">ID:</label>
                    <input className="form-control" readOnly type="text" value=""/>
                </FormGroup>

                <FormGroup>
                    <label htmlFor="Nombre">Nombre:</label>
                    <input className="form-control" name="nombre" type="text" value=""/>
                </FormGroup>

                <FormGroup>
                    <label htmlFor="Nombre">Facultad:</label>
                    <input className="form-control" name="facultad" type="text" value=""/>
                </FormGroup>
            </ModalBody>

            <ModalFooter>
                <Button color="primary">Crear</Button>
                <Button color="danger" onClick={OcultarModalEstudiante}>Cancelar</Button>
            </ModalFooter>
        </Modal>

        <Modal isOpen={modalProfesorEstado}>
            <ModalHeader>
                <h3>Crear Profesor:</h3>
            </ModalHeader>

            <ModalBody>
                <FormGroup>
                    <label htmlFor="ID">ID:</label>
                    <input className="form-control" readOnly type="text" value=""/>
                </FormGroup>

                <FormGroup>
                    <label htmlFor="Nombre">Nombre:</label>
                    <input className="form-control" name="nombre" type="text" value=""/>
                </FormGroup>

                <FormGroup>
                    <label htmlFor="Nombre">Facultad:</label>
                    <input className="form-control" name="facultad" type="text" value=""/>
                </FormGroup>
            </ModalBody>

            <ModalFooter>
                <Button color="primary">Crear</Button>
                <Button color="danger" onClick={OcultarModalProfesor}>Cancelar</Button>
            </ModalFooter>
        </Modal>

        <Modal isOpen={modalAsignaturaEstado}>
            <ModalHeader>
                <h3>Crear Asignatura:</h3>
            </ModalHeader>

            <ModalBody>
                <FormGroup>
                    <label htmlFor="ID">ID:</label>
                    <input className="form-control" readOnly type="text" value=""/>
                </FormGroup>

                <FormGroup>
                    <label htmlFor="Nombre">Nombre:</label>
                    <input className="form-control" name="nombre" type="text" value=""/>
                </FormGroup>

                <FormGroup>
                    <label htmlFor="Nombre">Facultad:</label>
                    <input className="form-control" name="facultad" type="text" value=""/>
                </FormGroup>
            </ModalBody>

            <ModalFooter>
                <Button color="primary">Crear</Button>
                <Button color="danger" onClick={OcultarModalAsignatura}>Cancelar</Button>
            </ModalFooter>
        </Modal>
        
      </>
    );
  
  };
  
  export default CrearApp;
  