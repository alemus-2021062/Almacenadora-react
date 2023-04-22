import React from "react"
import { FormTask } from "./FormTask"
import {tareaModal} from "../models/ModelTarea"


export const CreateTask = () => {
  return (
    <>
      <FormTask
        userProp={tareaModal}
        titleButton="Crear Tarea"
        option={1}
      ></FormTask>
    </>
  )
}
