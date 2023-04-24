import { useEffect, useState } from "react"
import { formOptions, sendData } from "../helpers/FormTareaHelper";
import { useForm } from "react-hook-form";

export const FormTask = ({ tareaProp, titleButton, option, id }) => {
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
            <h1 className="text-center ">Formulario</h1>
            <div className="container">
                <div className="row ms-1">
                    <form className="text-dark" onSubmit={handleSubmit(crud)}>
                        <div className="mb-3">
                            <strong>
                            <label htmlFor="exampleInputEmail1" className="form-label fs-4">Nombre de la Tarea</label>
                            </strong>
                            <input type="text" className="form-control" id="nombre"
                                {...register("nombre")}
                                value={tarea?.nombre}
                                onChange={({ target: { value } }) =>
                                    setTarea(() => ({ ...tarea, nombre: value }))
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <strong>
                            <label htmlFor="exampleInputEmail1" className="form-label fs-4">Descripcion</label>
                            </strong>
                            <input type="text" className="form-control"
                                {...register("descripcion")}
                                value={tarea?.descripcion}
                                onChange={({ target: { value } }) =>
                                    setTarea(() => ({ ...tarea, descripcion: value }))
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <strong>
                            <label htmlFor="exampleInputEmail1" className="form-label fs-4">Fecha de inicio</label>
                            </strong>
                            <input type="date" className="form-control"
                                {...register("fecha_inicio")}
                                value={tarea?.fecha_inicio}
                                onChange={({ target: { value } }) =>
                                    setTarea(() => ({ ...tarea, fecha_inicio: value }))
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <strong>
                            <label htmlFor="exampleInputEmail1" className="form-label fs-4">Fecha de Cierre</label>
                            </strong>
                            <input type="date" className="form-control"
                                {...register("fecha_cierre")}
                                value={tarea?.fecha_cierre}
                                onChange={({ target: { value } }) =>
                                    setTarea(() => ({ ...tarea, fecha_cierre: value }))
                                }
                            />
                        </div>
                        <div className="mb-3 form-check" >
                            <input type="checkbox" className="form-check-input bg-secondary fs-4 ms-1" />
                            <strong>
                            <label className="form-check-label fs-4 ms-3" htmlFor="exampleCheck1">Completado</label>
                            </strong>
                        </div>
                        <div className="mb-3">
                            <strong>
                            <label htmlFor="exampleInputPassword1" className="form-labe fs-4">Hecho por</label>
                            </strong>
                            <input type="text" className="form-control"
                                {...register("creador")}
                                value={tarea?.creador}
                                onChange={({ target: { value } }) =>
                                    setTarea(() => ({ ...tarea, creador: value }))
                                }
                            />
                        </div>
                        <button type="submit" className="btn btn-dark">{titleButton}</button>
                    </form>
                </div>
            </div>


        </>
    )
}
