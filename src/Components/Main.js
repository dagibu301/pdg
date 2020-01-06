import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Inicio from "./Inicio";
import Gracias from "./Gracias";
import P1 from "./P1";
import P2 from "./P2";
import P31 from "./P31";
import P32 from "./P32";
import P41 from "./P41";
import P411 from "./P411";
import P42 from "./P42";

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
          <Route  path="/P41" component={P41} />
          <Route  path="/P411" component={P411} />
          <Route  path="/P42" component={P42} />
        </Switch>

      </div>
    );
  }
}

export default withRouter(Main);
