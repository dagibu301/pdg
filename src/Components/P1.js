import React, { Component } from "react";
import "./P1.css";
import continuar from "../assets/gif0.gif";
import seleccionar from "../assets/Seleccionar.png";
import square from "../assets/square.PNG";
import squareFull from "../assets/square-full.png";
import step1 from "../assets/step1.PNG";
import { Redirect } from "react-router";

class P1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toP2: false,
      isSelected: false,
      questionsHover: [true, false, false, false],
      actualHover: 0
    };
    this.rightFunction = this.rightFunction.bind(this);
    this.downFunction = this.downFunction.bind(this);
    this.upFunction = this.upFunction.bind(this);
  }
  rightFunction(event) {
    if (event.keyCode === 39) {
      console.log("Imherefirst", this.state.isSelected);
      if (this.state.isSelected === true) {
        console.log("Imhere");
        this.setState(() => ({
          toP2: true
        }));
      }
      this.setState(() => ({
        isSelected: true
      }));
    }
  }

  downFunction(event) {
    if (event.keyCode === 40) {
      if (this.state.actualHover < 3) {       
        this.setState(() => ({
          actualHover: this.state.actualHover + 1,
        }));
        console.log("Actual", this.state.actualHover);
        let updQuestionsHover = this.state.questionsHover;
        updQuestionsHover[this.state.actualHover -1] = false;
        updQuestionsHover[this.state.actualHover] = true;
        console.log("updQuestionsHover", updQuestionsHover);
        this.setState(() => ({
          questionsHover: updQuestionsHover
        }));
      }
    }
  }

  upFunction(event) {
    if (event.keyCode === 38) {
      if (this.state.actualHover > 0) {       
        this.setState(() => ({
          actualHover: this.state.actualHover - 1,
        }));
        console.log("Actual", this.state.actualHover);
        let updQuestionsHover = this.state.questionsHover;
        updQuestionsHover[this.state.actualHover  + 1] = false;
        updQuestionsHover[this.state.actualHover] = true;
        console.log("updQuestionsHover", updQuestionsHover);
        this.setState(() => ({
          questionsHover: updQuestionsHover
        }));
      }
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.rightFunction, false);
    document.addEventListener("keydown", this.downFunction, false);
    document.addEventListener("keydown", this.upFunction, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.rightFunction, false);
    document.removeEventListener("keydown", this.downFunction, false);
    document.removeEventListener("keydown", this.upFunction, false);
  }
  render() {
    if (this.state.toP2 === true) {
      return <Redirect to="/P2" />;
    }
    return (
      <div className="P1">
        <div className="P1-text">
          <img src={step1} alt="Paso 1" className="P1-step" />
          <h1 className="P1-h1">¿Con qué género te identificas?</h1>

          <div className="P1-questions-container">
            <div
              className={
                this.state.questionsHover[0]
                  ? "P1-question-hover"
                  : "P1-question"
              }
            >
              <img src={square} alt="" />
              <label className="P1-label">Femenino</label>
            </div>

            <div
              className={
                this.state.questionsHover[1]
                  ? "P1-question-hover"
                  : "P1-question"
              }
            >
              <img src={square} alt="" />
              <label className="P1-label">Másculino</label>
            </div>

            <div
              className={
                this.state.questionsHover[2]
                  ? "P1-question-hover"
                  : "P1-question"
              }
            >
              <img src={square} alt="" />
              <label className="P1-label">Mujer Trans</label>
            </div>

            <div
              className={
                this.state.questionsHover[3]
                  ? "P1-question-hover"
                  : "P1-question"
              }
            >
              <img src={square} alt="" />
              <label className="P1-label">Hombre Trans</label>
            </div>
          </div>
        </div>

        {this.state.isSelected ? (
          <img src={continuar} alt="continuar..." className="P1-img" />
        ) : (
          <img src={seleccionar} alt="continuar..." className="P1-img" />
        )}
      </div>
    );
  }
}

export default P1;
