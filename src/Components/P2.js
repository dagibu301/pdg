import React, { Component } from "react";
import "./P2.css";

class P2 extends Component {
  render() {
    console.log(this.props.location.pathname.slice(4))
    return (
    <div>+Hello from P2!
      <p>{this.props.p1}</p>
    </div>
    );
  }
}

export default P2;
