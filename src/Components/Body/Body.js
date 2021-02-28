import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./Home";
import User from "./User";

const Body = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/user" render={() => <User />} />
        <Redirect from="/home" to="/" />
      </Switch>
    </div>
  );
};

export default Body;
