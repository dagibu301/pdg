import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Inicio from "./Inicio";
import Gracias from "./Gracias";

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/Inicio" component={Inicio} />
          <Route exact path="/Gracias" component={Gracias} />
        </Switch>

      </div>
    );
  }
}

export default withRouter(Main);
