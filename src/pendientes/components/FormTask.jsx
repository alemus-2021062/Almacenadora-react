import { useEffect, useState } from "react"
import { formOptions, sendData } from "../helpers/FormTareaHelper";
import { useForm } from "react-hook-form";

export const FormTask = ({tareaProp, titleButton, option, id}) => {
    const [tarea, setTarea] = useState(tareaProp)
    const {
        register,
        handleSubmit
      } = useForm(formOptions);

    useEffect(() => {
        setTarea({ ...tarea })
    }, []);

    const crud = async () => {
        await sendData(tarea, option)
    };
/*
    const handleSubmit = (event) =>{
        sendData(tarea,2, id);
    }
*/


    return (
        <>
            <h1 className="bg-light">Formulario</h1>

            <form className="text-dark" onSubmit={handleSubmit(crud)}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Nombre de la Tarea</label>
                    <input type="text" className="form-control"
                        {...register("nombre")}
                        value={tarea?.nombre}
                        onChange={({ target: { value } }) =>
                            setTarea(() => ({ ...tarea, nombre: value }))
                        }
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Descripcion</label>
                    <input type="text" className="form-control" 
                        {...register("descripcion")}
                        value={tarea?.descripcion}
                        onChange={({ target: { value } }) =>
                            setTarea(() => ({ ...tarea, descripcion: value }))
                        }
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Fecha de inicio</label>
                    <input type="date" className="form-control" 
                        {...register("fecha_inicio")}
                        value={tarea?.fecha_inicio}
                        onChange={({ target: { value } }) =>
                            setTarea(() => ({ ...tarea, fecha_inicio: value }))
                        }
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Fecha de Cierre</label>
                    <input type="date" className="form-control"
                        {...register("fecha_cierre")}
                        value={tarea?.fecha_cierre}
                        onChange={({ target: { value } }) =>
                            setTarea(() => ({ ...tarea, fecha_cierre: value }))
                        }
                    />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input bg-secondary" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Completado</label>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Hecho por</label>
                    <input type="text" className="form-control"
                        {...register("creador")}
                        value={tarea?.creador}
                        onChange={({ target: { value } }) =>
                            setTarea(() => ({ ...tarea, creador: value }))
                        }
                    />
                </div>
                <button type="submit" className="btn btn-primary">{titleButton}</button>
            </form>

        </>
    )
}
