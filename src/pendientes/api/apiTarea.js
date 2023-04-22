import axios from 'axios'

const URL = 'http://localhost:8000/api/'

export const apiTarea = async () => {
    try {
        const { data: { almacenadora } } = await axios.get(`${URL}mostrar`)
        console.log(almacenadora);
        return almacenadora
    } catch ({ response: { data } }) {
        return data.message;
    }
}

export const CreateTarea = async (nombre, descripcion, fecha_inicio, fecha_cierre, creador) => {
    try {
        const tareaSave = await axios.post(
            `${URL}agregar`,
            {
                nombre: nombre,
                descripcion: descripcion,
                fecha_inicio: fecha_inicio,
                fecha_cierre: fecha_cierre,
                creador: creador,
            },
        );
        return true;
    } catch ({
        response: {
            data: { message },
        },
    }) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: message,
            showConfirmButton: true,
            confirmButtonText: "OK",
        }).then((result) => {
            if (result.isConfirmed) {
            } else {
            }
        });

    }
};



export const UpdateTarea = async (id, nombre, descripcion, fecha_inicio, fecha_cierre, creador) => {
    try {
      const { data } = await axios.put(
        `${URL}editar/${id}`,
        {
          nombre: nombre,
          descripcion: descripcion,
          fecha_inicio: fecha_inicio,
          fecha_cierre: fecha_cierre,
          creador: creador
        },
      );
      return true;
    } catch(err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pudo editar la tarea!",
      });
      // response: {
      //   data: { message },
      // },
    } {
      console.log(message.password.msg);
    }
  };

  export const DeleteTarea = async (id) => {
    try {
      const { data } = await axios.delete(`${URL}delete/${id}`, {
      });
      return true;
    } catch ({
      response: {
        data: { message },
      },
    }) {
      if (message) {
        return message;
      }
    }
  };