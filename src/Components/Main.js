import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Inicio from "./Inicio";

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/Inicio" component={Inicio} />
        </Switch>

      </div>
    );
  }
}

export default Main;
