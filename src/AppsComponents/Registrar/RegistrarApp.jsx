import {Modal, ModalBody, ModalHeader, FormGroup, ModalFooter, Button, Container} from "reactstrap"
import { useState } from "react";
import "./RegistrarApp.css"

const RegistrarApp = () => {

  const [modalEstudianteEstado, setModalEstudianteEstado] = useState(false)
  const [modalProfesorEstado, setModalProfesorEstado] = useState(false)

  const MostrarModalEstudiante = () =>{
    setModalEstudianteEstado(true)
  }

  const MostrarModalProfesor = () =>{
    setModalProfesorEstado(true)
  }

  const OcultarModalEstudiante = () =>{
    setModalEstudianteEstado(false)
  }

  const OcultarModalProfesor = () =>{
    setModalProfesorEstado(false)
  }

    return(
      <>
        <br />
        <h2 className="text-center">Registrar</h2>
        <br />
        <Container>
          <select class="form-select" aria-label="Default select example">
            <option selected>Selecciona facultad</option>
          </select>
          <div className="botonColumn">
            <Button className="btn-estudiante" color="light" onClick={MostrarModalEstudiante}> Estudiante </Button>
            <Button className="btn-profesor" color="light" onClick={MostrarModalProfesor}> Profesor </Button>
          </div>
        </Container>

        <Modal isOpen={modalEstudianteEstado}>
            <ModalHeader>
                <h3>Registrar Estudiante:</h3>
            </ModalHeader>

            <ModalBody>
                <FormGroup>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Selecciona Curso</option>
                  </select>
                </FormGroup>

                <FormGroup>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Selecciona Estudiante</option>
                  </select>
                </FormGroup>
            </ModalBody>

            <ModalFooter>
                <Button color="primary">Registrar</Button>
                <Button color="danger" onClick={OcultarModalEstudiante}>Cancelar</Button>
            </ModalFooter>
        </Modal>

        <Modal isOpen={modalProfesorEstado}>
            <ModalHeader>
                <h3>Registrar Profesor:</h3>
            </ModalHeader>

            <ModalBody>
                <FormGroup>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Selecciona Curso</option>
                  </select>
                </FormGroup>

                <FormGroup>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Selecciona Profesor</option>
                  </select>
                </FormGroup>
            </ModalBody>

            <ModalFooter>
                <Button color="primary">Registrar</Button>
                <Button color="danger" onClick={OcultarModalProfesor}>Cancelar</Button>
            </ModalFooter>
        </Modal>


        

       
      </>
    );
  
  };
  
  export default RegistrarApp;