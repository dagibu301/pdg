import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Inicio from "./Inicio";
import Gracias from "./Gracias";
import P1 from "./P1";
import P2 from "./P2";
import P31 from "./P31";
import P32 from "./P32";

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/Inicio" component={Inicio} />
          <Route  path="/Gracias" component={Gracias} />
          <Route  path="/P1" component={P1} />
          <Route  path="/P2" component={P2} />
          <Route  path="/P31" component={P31} />
          <Route  path="/P32" component={P32} />
        </Switch>

      </div>
    );
  }
}

export default withRouter(Main);
