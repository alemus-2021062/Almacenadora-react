import React, { useEffect, useState } from "react"
import { DeleteTarea, apiTarea } from "../api/apiTarea";
import { tareaModal } from "../models/ModelTarea";
import Swal from "sweetalert2";
import { UpdateTask } from "./UpdateTask";

export const ListaTareas = () => {

  const [tarea, setTarea] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [tareas, setTareas] = useState(tareaModal)

  const reload = async () => {
    const result = await apiTarea()
    setTarea(result)
  }

  const handleOpenModal = (t) => {
    setShowModal(true);
    setTareas(t)
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  useEffect(() => {
    reload();
  }, [showModal]);

  const eliminar = async (id) => {
    const result = await DeleteTarea(id);
    if (result) {
      setTarea(tarea.filter((t) => t._id !== id));
      Swal.fire({
        icon: "success",
        title: "Genial!",
        text: "Se eliminó la tarea correctamente!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pudo eliminar la tarea!",
      });
    }
  };

  const viewTareaList = async () => {
    const getListTareasFromApi = await apiTarea();
    setTarea(getListTareasFromApi);
  }

  useEffect(() => {
    viewTareaList()
  }, [])

  return (
    <>
      <h1 className="text-light text-center">Listado de las Tareas</h1>

      <div className="container-fluid">
        <div className="row m-4">

        <table className="table text-light">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Fecha de inicio</th>
              <th scope="col">Fecha de cierre</th>
              <th scope="col">Completada</th>
              <th scope="col">Hecho por</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {tarea.map((t) => {
              return (
                <tr key={t._id}>
                  <th scope="row">{t.nombre}</th>
                  <td>{t.descripcion}</td>
                  <td>{t.fecha_inicio}</td>
                  <td>{t.fecha_cierre}</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{t.creador}</td>
                  <td>
                    <button className="btn btn-warning"
                      onClick={() => handleOpenModal(t)}>
                      Editar
                    </button>
                    <button className="btn btn-danger"
                      onClick={() => {
                        eliminar(t._id)
                      }}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              )
            })}

          </tbody>
        </table>
        <UpdateTask
          isOpen={showModal}
          onClose={() => handleCloseModal()}
          tareaEdit={tareas}>
        </UpdateTask>
      </div>
        </div>


    </>
  )
}
