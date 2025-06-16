import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './titulo.css'
import Titulo from './Titulo.jsx'
import Navegacion from './Navegacion.jsx'
import Acordeon from './Acordeon.jsx'
import Cards from './Cards.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Titulo></Titulo>
    <Navegacion></Navegacion>
    <Acordeon></Acordeon>
    <Cards></Cards>
  </StrictMode>,
)
