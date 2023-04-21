import { Navigate, Route, Router, Routes } from "react-router-dom"
import { NavBar } from "./NavBar"
import { ListaTareas } from "./pendientes/components/ListaTareas"
import { CreateTask } from "./pendientes/components/CreateTask"
import { UpdateTask } from "./pendientes/components/UpdateTask"

export const AppRouter = () => {
  
  
    return (
    <>
        <NavBar />
        <Routes>
            <Route path="/" element={<ListaTareas/>}>
            </Route>

            <Route path="/agregar" element={<CreateTask />}>
            </Route>

            <Route path="/editar" element={<UpdateTask />}>
            </Route>
        </Routes>
    </>
  )
}
