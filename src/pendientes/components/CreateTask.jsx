import React from "react"
import { FormTask } from "./FormTask"
import {Tarea} from "../models/ModelTarea"


export const CreateTask = () => {
  return (
    <>
      <FormTask
        userProp={Tarea}
        titleButton="Crear Tarea"
        option={1}
      ></FormTask>
    </>
  )
}
