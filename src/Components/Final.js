import React, { Component } from "react";
import "./Final.css";
import continuar from "../assets/gif0.gif";
import { Redirect, matchPath } from "react-router";
import UIfx from "uifx";
import mp3File from "../assets/beep.wav";
import preguntas from "./Preguntas"

class Final extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toInicio: false,
      P1: this.props.location.pathname.slice(7, 8),
      P2: this.props.location.pathname.slice(9, 10),
      P3: this.props.location.pathname.slice(11, 12),
      P4: this.props.location.pathname.slice(13, 14)
    };
    this.rightFunction = this.rightFunction.bind(this);
    this.generateTxt = this.generateTxt.bind(this);
    console.log("this.state.P1: ", this.state.P1);
    console.log("this.state.P2: ", this.state.P2);
    console.log("this.state.P3: ", this.state.P3);
    console.log("this.state.P4: ", this.state.P4);
    console.log("Pregunta test: ", preguntas[0].respuestas[this.state.P1])
  }

  generateTxt(p1,p2,p3,p4){
    const element = document.createElement("a");
    const file = new Blob([p1], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    let docName = Math.floor(Math.random() * 100000000);
    element.download = docName + ".txt";
    document.body.appendChild(element); 
    element.click();
  }

  rightFunction(event) {
    if (event.keyCode === 39) {
      const beep = new UIfx(mp3File);
      beep.play();
      console.log("Right arrow", this.state.isSelected);
      this.generateTxt(this.state.P1, this.state.P2, this.state.P3, this.state.P4);
      this.setState(() => ({
        toInicio: true
      }));
 
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.rightFunction, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.rightFunction, false);
  }
  render() {
    if (this.state.toInicio === true) {
      return <Redirect to={"/Inicio"} />;
    }
    return (
      <div className="Final">
        <div className="Final-text">
          <h1 className="Final-h1">
            <label className="Final-bigger">Eso es todo,</label> Pero ¿sabías
            que?:
          </h1>

          <p className="Final-label">
            <span className="Final-bold">58</span> de cada{" "}
            <span className="Final-bold">100</span> mujeres, en la ciudad, se
            sienten en peligro transitando las calles. Tus datos anónimos
            ayudarán a cambiar esta realidad. ¡Gracias por tu aporte!
          </p>
        </div>

        <img src={continuar} alt="continuar..." className="Final-img" />
      </div>
    );
  }
}

export default Final;
