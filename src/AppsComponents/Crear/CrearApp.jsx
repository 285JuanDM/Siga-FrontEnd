import React, { useState } from 'react';
import { Container } from 'reactstrap';
import CrearFormulario from './CrearFormulario';
import CrearTablaCursosLibres from './CrearTablaCursosLibres';
import CrearTablaCursosRegistrados from './CrearTablaCursosRegistrados';


const App = () => {
  const [asignatura, setAsignatura] = useState('');
  const [nombreEstudiante, setNombreEstudiante] = useState('');
  const [nombreProfesor, setNombreProfesor] = useState('');
  const [facultad, setFacultad] = useState('ingenieria');
  const [estudiantes, setEstudiantes] = useState([]);
  const [profesores, setProfesores] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [cursosDefinitivos, setCursosDefinitivos] = useState([]);

  const handleAsignaturaChange = (event) => {
    setAsignatura(event.target.value);
  };

  const handleNombreEstudianteChange = (event) => {
    setNombreEstudiante(event.target.value);
  };

  const handleNombreProfesorChange = (event) => {
    setNombreProfesor(event.target.value);
  };

  const handleFacultadChange = (event) => {
    setFacultad(event.target.value);
  };

  const crearEstudiante = (event) => {
    event.preventDefault();
    const estudiante = {
      nombre: nombreEstudiante,
      id: estudiantes.length + 1,
      facultad: facultad
    };
    setEstudiantes([...estudiantes, estudiante]);
    setNombreEstudiante('');
  };

  const crearProfesor = (event) => {
    event.preventDefault();
    const profesor = {
      nombre: nombreProfesor,
      id: profesores.length + 1,
      facultad: facultad
    };
    setProfesores([...profesores, profesor]);
    setNombreProfesor('');
  };

  const crearCursos = (event) => {

    event.preventDefault();
    const curso = {
      asignatura: asignatura,
      estudiante: nombreEstudiante,
      profesor: nombreProfesor,
      facultad: facultad
    };

      setCursos([...cursos, curso]);
      setAsignatura('');
      setNombreEstudiante('');
      setNombreProfesor('');
      setFacultad('')

  };

  const registrarCurso = (curso) => {
    let confirmar = window.confirm("¿Esta seguro de registrar el curso?")
    
    if(confirmar){
      setCursosDefinitivos([...cursosDefinitivos, curso]);
      setCursos(cursos.filter((c) => c !== curso));
    }else{
      return
    }

  };

  const eliminarCurso = (curso) => {
    let confirmar = window.confirm("¿Esta seguro de borrar el curso?")

    if(confirmar){
      setCursos(cursos.filter((c) => c !== curso));
    }else{
      return
    }

  };

  const eliminarCursoDefinitivo = (curso) => {
    let confirmar = window.confirm("¿Esta seguro de borrar el curso?")
    if(confirmar){
      setCursosDefinitivos(cursosDefinitivos.filter((c) => c !== curso));
    }else{
      return
    }
  };

  return (
    <>
      <br />
      <Container>
      <CrearFormulario
        handleAsignaturaChange={handleAsignaturaChange}
        handleNombreEstudianteChange={handleNombreEstudianteChange}
        handleNombreProfesorChange={handleNombreProfesorChange}
        handleFacultadChange={handleFacultadChange}
        handleSubmitEstudiante={crearEstudiante}
        handleSubmitProfesor={crearProfesor}
        handleSubmitCurso={crearCursos}
        asignatura={asignatura}
        nombreEstudiante={nombreEstudiante}
        nombreProfesor={nombreProfesor}
        setFacultad={setFacultad}
      />
      <br />
      <CrearTablaCursosLibres cursosLibres={cursos} eliminarCurso={eliminarCurso} registrarCurso={registrarCurso} />
      <br />
      <CrearTablaCursosRegistrados cursosDefinitivos={cursosDefinitivos} eliminarCursoDefinitivo={eliminarCursoDefinitivo}/>
      <br />
      </Container>
    </>
  );
};

export default App;
