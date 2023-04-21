import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { ListaTareas } from './pendientes/components/ListaTareas'
import { AppRouter } from './AppRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AppRouter />
  </BrowserRouter>,
)
