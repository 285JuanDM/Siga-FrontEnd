import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader, FormGroup, ModalFooter, Button } from "reactstrap";
import "./CrearApp.css";

const CrearApp = () => {
  
  const [modalEstudianteEstado, setModalEstudianteEstado] = useState(false);
  const [modalProfesorEstado, setModalProfesorEstado] = useState(false);
  const [modalAsignaturaEstado, setModalAsignaturaEstado] = useState(false);

  const [estudiantes, setEstudiantes] = useState([]);
  const [nombreEstudiante, setNombreEstudiante] = useState("");
  const [idEstudiante, setIdEstudiante] = useState(1000);

  const [profesores, setProfesores] = useState([]);
  const [nombreProfesor, setNombreProfesor] = useState("");
  const [idProfesor, setIdProfesor] = useState(2000);

  const [asignaturas, setAsignaturas] = useState([]);
  const [nombreAsignatura, setNombreAsignatura] = useState("");
  const [idAsignatura, setIdAsignatura] = useState(3000);

  const [facultadEstudiante, setFacultadEstudiante] = useState("ingenieria");
  const [facultadProfesor, setFacultadProfesor] = useState("ingenieria");
  const [facultadAsignatura, setFacultadAsignatura] = useState("ingenieria");

  const MostrarModalEstudiante = () => {
    setModalEstudianteEstado(true);
  };

  const MostrarModalProfesor = () => {
    setModalProfesorEstado(true);
  };

  const MostrarModalAsignatura = () => {
    setModalAsignaturaEstado(true);
  };

  const OcultarModalEstudiante = () => {
    setModalEstudianteEstado(false);
  };

  const OcultarModalProfesor = () => {
    setModalProfesorEstado(false);
  };

  const OcultarModalAsignatura = () => {
    setModalAsignaturaEstado(false);
  };

  const crearEstudiante = () => {
    const nuevoEstudiante = {
      id: idEstudiante,
      nombre: nombreEstudiante,
      facultad: facultadEstudiante,
    };

    setEstudiantes([...estudiantes, nuevoEstudiante]);
    setIdEstudiante(idEstudiante + 1);
    setNombreEstudiante("");
    setFacultadEstudiante("");
    window.alert("El estudiante "+nombreEstudiante+ " ha sido creado correctamente")
    OcultarModalEstudiante();
    console.log(nuevoEstudiante)
  };

  const crearProfesor = () => {
    const nuevoProfesor = {
      id: idProfesor,
      nombre: nombreProfesor,
      facultad: facultadProfesor,
    };

    setProfesores([...profesores, nuevoProfesor]);
    setIdProfesor(idProfesor + 1);
    setNombreProfesor("");
    setFacultadProfesor("");
    window.alert("El profesor "+nombreProfesor+ " ha sido creado correctamente")
    OcultarModalProfesor();
  };

  const crearAsignatura = () => {
    const nuevaAsignatura = {
      id: idAsignatura,
      nombre: nombreAsignatura,
      facultad: facultadAsignatura,
    };

    setAsignaturas([...asignaturas, nuevaAsignatura]);
    setIdAsignatura(idAsignatura + 1);
    setNombreAsignatura("");
    setFacultadAsignatura("");
    window.alert("La asignatura "+nombreAsignatura+ " ha sido creado correctamente")
    OcultarModalAsignatura();
    console.log(asignaturas)
  };

  return (
    <>
      <br />
      <h2 className="text-center">Crear</h2>

      <div className="boton-column">
        <Button className="btn-estudiantes" color="light" onClick={MostrarModalEstudiante}>
          Estudiante
        </Button>
        <Button className="btn-profesores" color="light" onClick={MostrarModalProfesor}>
          Profesor
        </Button>
        <Button className="btn-asignaturas" color="light" onClick={MostrarModalAsignatura}>
          Asignatura
        </Button>
      </div>

      <Modal isOpen={modalEstudianteEstado}>
        <ModalHeader>
          Crear Estudiante:
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label htmlFor="ID">ID:</label>
            <input className="form-control" readOnly type="text" value={idEstudiante} />
          </FormGroup>

          <FormGroup>
            <label htmlFor="Nombre">Nombre:</label>
            <input
              className="form-control"
              name="nombre"
              type="text"
              value={nombreEstudiante}
              onChange={(e) => setNombreEstudiante(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="Facultad">Facultad:</label>
            <select className="form-select" name="facultad" value={facultadEstudiante} onChange={(e) => setFacultadEstudiante(e.target.value)}>
              <option value="ingenieria">Ingeniería</option>
              <option value="psicologia">Psicología</option>
              <option value="derecho">Derecho</option>
              <option value="economia">Economía</option>
              <option value="medicina">Medicina</option>
            </select>
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={crearEstudiante}>
            Crear
          </Button>
          <Button color="danger" onClick={OcultarModalEstudiante}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalProfesorEstado}>
        <ModalHeader>
          Crear Profesor:
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label htmlFor="ID">ID:</label>
            <input className="form-control" readOnly type="text" value={idProfesor} />
          </FormGroup>

          <FormGroup>
            <label htmlFor="Nombre">Nombre:</label>
            <input
              className="form-control"
              name="nombre"
              type="text"
              value={nombreProfesor}
              onChange={(e) => setNombreProfesor(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="Facultad">Facultad:</label>
            <select className="form-select" name="facultad" value={facultadProfesor} onChange={(e) => setFacultadProfesor(e.target.value)}>
              <option value="ingenieria">Ingeniería</option>
              <option value="psicologia">Psicología</option>
              <option value="derecho">Derecho</option>
              <option value="economia">Economía</option>
              <option value="medicina">Medicina</option>
            </select>
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={crearProfesor}>
            Crear
          </Button>
          <Button color="danger" onClick={OcultarModalProfesor}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalAsignaturaEstado}>
        <ModalHeader>
          Crear Asignatura:
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label htmlFor="ID">ID:</label>
            <input className="form-control" readOnly type="text" value={idAsignatura} />
          </FormGroup>

          <FormGroup>
            <label htmlFor="Nombre">Nombre:</label>
            <input
              className="form-control"
              name="nombre"
              type="text"
              value={nombreAsignatura}
              onChange={(e) => setNombreAsignatura(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="Facultad">Facultad:</label>
            <select className="form-select" name="facultad" value={facultadAsignatura} onChange={(e) => setFacultadAsignatura(e.target.value)}>
              <option value="ingenieria">Ingeniería</option>
              <option value="psicologia">Psicología</option>
              <option value="derecho">Derecho</option>
              <option value="economia">Economía</option>
              <option value="medicina">Medicina</option>
            </select>
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={crearAsignatura}>
            Crear
          </Button>
          <Button color="danger" onClick={OcultarModalAsignatura}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

    </>
  )
};

export default CrearApp;
