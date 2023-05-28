import React from 'react';

const CrearTablaCursosLibres = ({ cursosLibres, eliminarCurso, registrarCurso }) => {
  return (
    <>
      <h2 className='text-center'>Cursos Libres</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Asignatura</th>
            <th>Estudiante</th>
            <th>Profesor</th>
            <th>Facultad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cursosLibres.map((curso, index) => (
            <tr key={index}>
              <td>{curso.asignatura}</td>
              <td>{curso.estudiante}</td>
              <td>{curso.profesor}</td>
              <td>{curso.facultad}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => eliminarCurso(curso)}
                >
                  Eliminar
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => registrarCurso(curso)}
                >
                  Registrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CrearTablaCursosLibres;
