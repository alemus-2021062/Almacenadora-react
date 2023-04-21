import { CreateTarea} from "../api/apiTarea";
import Swal from "sweetalert2";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { UpdateTask } from "../components/UpdateTask";

export const formSchema = Yup.object().shape({
    nombre: Yup.string().required("El nombre de la tarea es requerido"),
    descripcion: Yup.string(),  
  });
  export const formOptions = { resolver: yupResolver(formSchema) };

export const sendData = async (tarea, option) => {
  let resultado;
  switch (option) {
    case 1:
      console.log("hola");
      resultado = await CreateTarea(
        tarea.nombre,
        tarea.descripcion,
        tarea.fecha_inicio,
        tarea.fecha_cierre,
        tarea.creador
      );
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: "tarea creada correctamente!",
          showConfirmButton: true,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/";
          } else {
            window.location.href = "/";
          }
        });
      }
      break;
    case 2:
      console.log(tarea._id);
      resultado = await UpdateTask(
        tarea._id,
        tarea.nombre,
        tarea.descripcion,
        tarea.fecha_inicio,
        tarea.fecha_cierre,
        tarea.creador
      );
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: `usuario actualizado correctamente!`,
          confirmButtonText: true,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
          } else {
          }
        });
      }
      break;
  }
};