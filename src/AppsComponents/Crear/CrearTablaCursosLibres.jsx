import React, { useState } from 'react';

const CrearTablaCursosLibres = ({ cursos, eliminarCurso, registrarCurso, editarCurso }) => {
  const [editingNombre, setEditingNombre] = useState(null);
  const [editedCurso, setEditedCurso] = useState({});

  const handleEdit = (curso) => {
    setEditingNombre(curso.asignatura);
    setEditedCurso(curso);
  };

  const handleUpdate = () => {
    editarCurso(editedCurso);
    setEditingNombre(null);
    setEditedCurso({});
  };

  const handleChange = (e) => {
    setEditedCurso({ ...editedCurso, [e.target.name]: e.target.value });
  };

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
          {cursos.map((curso, index) => (
            <tr key={index}>
              <td>
                {editingNombre === curso.asignatura ? (
                  <input
                    type="text"
                    name="asignatura"
                    value={editedCurso.asignatura || ''}
                    onChange={handleChange}
                  />
                ) : (
                  curso.asignatura
                )}
              </td>
              <td>
                {editingNombre === curso.asignatura ? (
                  <input
                    type="text"
                    name="estudiante"
                    value={editedCurso.estudiante || ''}
                    onChange={handleChange}
                  />
                ) : (
                  curso.estudiante
                )}
              </td>
              <td>
                {editingNombre === curso.asignatura ? (
                  <input
                    type="text"
                    name="profesor"
                    value={editedCurso.profesor || ''}
                    onChange={handleChange}
                  />
                ) : (
                  curso.profesor
                )}
              </td>
              <td>
                {editingNombre === curso.asignatura ? (
                  <input
                    type="text"
                    name="facultad"
                    value={editedCurso.facultad || ''}
                    onChange={handleChange}
                  />
                ) : (
                  curso.facultad
                )}
              </td>
              <td>
                {editingNombre === curso.asignatura ? (
                  <button className="btn btn-success" onClick={handleUpdate}>
                    Actualizar
                  </button>
                ) : (
                  <>
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
                    <button
                      className="btn btn-warning"
                      onClick={() => handleEdit(curso)}
                    >
                      Editar
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CrearTablaCursosLibres;
