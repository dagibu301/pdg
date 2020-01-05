import React, { Component } from "react";
import "./Inicio.css";
import continuar from "../assets/gif1.gif";

class Inicio extends Component {
  constructor(props) {
    super(props);
    this.rightFunction = this.rightFunction.bind(this);
  }
  rightFunction(event) {
    if (event.keyCode === 39) {
     
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.rightFunction, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.rightFunction, false);
  }
  render() {
    return (
      <div className="Inicio">
        <p>Ayúdanos a </p>
        <p>generar</p>
        <p>estadísticas</p>
        <img src={continuar} alt="continuar..." className="Inicio-img" />
      </div>
    );
  }
}

export default Inicio;
