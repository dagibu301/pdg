import React, { Component } from "react";
import "./P2.css";
import continuar from "../assets/gif0.gif";
import seleccionar from "../assets/Seleccionar.png";
import square from "../assets/square.PNG";
import squareFull from "../assets/square-full.png";
import step2 from "../assets/step2.png";
import { Redirect } from "react-router";

class P2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      toP2: false,
      isSelected: false,
      isSelectedQ: [false, false, false, false],
      questionsHover: [true, false, false, false],
      actualHover: 0
    }
    this.rightFunction = this.rightFunction.bind(this);
    this.downFunction = this.downFunction.bind(this);
    this.upFunction = this.upFunction.bind(this);
  }

  rightFunction(event) {
    if (event.keyCode === 39) {
      console.log("Right arrow", this.state.isSelected);
      if (this.state.isSelected === true) {
        console.log("Right arrow plus selected");
        this.setState(() => ({
          toP2: true
        }));
      }
      let updIsSelectedQ = this.state.isSelectedQ;
      updIsSelectedQ[this.state.actualHover] = true;
      this.setState(() => ({
        isSelected: true,
        isSelectedQ: updIsSelectedQ
      }));
    }
  }

  downFunction(event) {
    if (event.keyCode === 40) {
      if (this.state.actualHover < 5) {
        this.setState(() => ({
          actualHover: this.state.actualHover + 1,
          isSelected: false,
          isSelectedQ: [false, false, false, false]
        }));
        console.log("Actual", this.state.actualHover);
        let updQuestionsHover = this.state.questionsHover;
        updQuestionsHover[this.state.actualHover - 1] = false;
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
          isSelected: false,
          isSelectedQ: [false, false, false, false]
        }));
        console.log("Actual", this.state.actualHover);
        let updQuestionsHover = this.state.questionsHover;
        updQuestionsHover[this.state.actualHover + 1] = false;
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
    /* console.log(this.props.location.pathname.slice(4)) */
    return (
      <div className="P2">
      <div className="P2-text">
        <img src={step2} alt="Paso 2" className="P2-step" />
        <h1 className="P1-h1">¿Qué edad tienes?</h1>

        <div className="P2-questions-container">
          <div
            className={
              this.state.questionsHover[0]
                ? "P2-question-hover"
                : "P2-question"
            }
          >
            <img
              src={this.state.isSelectedQ[0] ? squareFull : square}
              alt=""
            />
            <label className="P2-label">Entre 15-18</label>
          </div>

          <div
            className={
              this.state.questionsHover[1]
                ? "P2-question-hover"
                : "P2-question"
            }
          >
            <img
              src={this.state.isSelectedQ[1] ? squareFull : square}
              alt=""
            />
            <label className="P2-label">Entre 19-24</label>
          </div>

          <div
            className={
              this.state.questionsHover[2]
                ? "P2-question-hover"
                : "P2-question"
            }
          >
            <img
              src={this.state.isSelectedQ[2] ? squareFull : square}
              alt=""
            />
            <label className="P2-label">Entre 25-34</label>
          </div>

          <div
            className={
              this.state.questionsHover[3]
                ? "P2-question-hover"
                : "P2-question"
            }
          >
            <img
              src={this.state.isSelectedQ[3] ? squareFull : square}
              alt=""
            />
            <label className="P2-label">Entre 34-44</label>
          </div>

          <div
            className={
              this.state.questionsHover[4]
                ? "P2-question-hover"
                : "P2-question"
            }
          >
            <img
              src={this.state.isSelectedQ[4] ? squareFull : square}
              alt=""
            />
            <label className="P2-label">Entre 45-55</label>
          </div>

          <div
            className={
              this.state.questionsHover[5]
                ? "P2-question-hover"
                : "P2-question"
            }
          >
            <img
              src={this.state.isSelectedQ[5] ? squareFull : square}
              alt=""
            />
            <label className="P2-label">Más de 55</label>
          </div>
        </div>
      </div>

      {this.state.isSelected ? (
        <img src={continuar} alt="continuar..." className="P2-img" />
      ) : (
        <img src={seleccionar} alt="continuar..." className="P2-img" />
      )}
    </div>
    );
  }
}

export default P2;
