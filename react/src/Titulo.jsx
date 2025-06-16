import React from 'react';
import { Navbar } from 'reactstrap';
import './titulo.css';

function Titulo() {
  return (
    <Navbar className="titulo-navbar" expand="md">
      <div className="titulo-contenido">
        <h1 className="titulo-texto">Academia "Sergio el Bailador"</h1>
        <p className="nombre">ALEJANDRA FLORES RAMOS</p>
      </div>
    </Navbar>
  );
}

export default Titulo;