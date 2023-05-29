import React from 'react';

const CrearFormulario = ({
  handleAsignaturaChange,
  handleNombreEstudianteChange,
  handleNombreProfesorChange,
  handleFacultadChange,
  crearCursos,
  asignatura,
  nombreEstudiante,
  nombreProfesor,
  facultad
}) => {
  return (
    <>
      <h2>Crear cursos</h2>
      <form onSubmit={crearCursos}>
        <div className="form-group">
          <label>Asignatura:</label>
          <input
            type="text"
            className="form-control"
            value={asignatura}
            onChange={handleAsignaturaChange}
          />
        </div>
        <div className="form-group">
          <label>Estudiante:</label>
          <input
            type="text"
            className="form-control"
            value={nombreEstudiante}
            onChange={handleNombreEstudianteChange}
          />
        </div>
        <div className="form-group">
          <label>Profesor:</label>
          <input
            type="text"
            className="input-group-text"
            value={nombreProfesor}
            onChange={handleNombreProfesorChange}
          />
        </div>
        <div className="form-group">
          <label>Facultad:</label>
          <select
            className="form-control"
            value={facultad}
            onChange={handleFacultadChange}
          >
            <option value="ingenieria">Ingeniería</option>
            <option value="medicina">Medicina</option>
            <option value="psicologia">Psicología</option>
            <option value="economia">Economía</option>
          </select>
        </div>
        <br />
        <button type="submit" className="btn btn-success">
          Crear Curso
        </button>
      </form>
    </>
  );
};

export default CrearFormulario;
