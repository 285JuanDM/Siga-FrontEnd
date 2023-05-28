import React from 'react';

const CrearTablaCursosRegistrados = ({
  cursosDefinitivos,
  eliminarCursoDefinitivo
}) => {
  return (
    <>
      <h2 className='text-center'>Cursos Registrados</h2>
      <table className="table">
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
          {cursosDefinitivos.map((curso, index) => (
            <tr key={index}>
              <td>{curso.asignatura}</td>
              <td>{curso.estudiante}</td>
              <td>{curso.profesor}</td>
              <td>{curso.facultad}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => eliminarCursoDefinitivo(curso)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CrearTablaCursosRegistrados;
