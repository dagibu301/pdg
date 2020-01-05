import React, { Component } from "react";
import "./Gracias.css";
import continuar from "../assets/gif0.gif";

class Gracias extends Component {
  render() {
    return (
      <div className="Gracias">
        <div className="Gracias-text">
          <h1>¡Hola, gracias por participar!</h1>
          <p>
            Llenando este formulario anónimo de 40 segundos ayudas a la
            Subsecretaría de Equidad de Género de la ciudad a recopilar
            estadísticas sobre la inseguridad que perciben las mujeres en el
            espacio público.
          </p>
        </div>
        <img src={continuar} alt="continuar..." className="Gracias-img" />
      </div>
    );
  }
}

export default Gracias;
