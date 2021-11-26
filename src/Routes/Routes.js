import React from "react";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router";
import Categorydetail from "../Category/Categorydetail";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/catde">
          <Categorydetail />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
