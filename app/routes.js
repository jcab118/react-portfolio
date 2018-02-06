
import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";

export default (
  	<Switch>
    	<Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
    </Switch>
);