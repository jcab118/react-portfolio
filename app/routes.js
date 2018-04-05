
import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services"

export default (
  	<Switch>
    	<Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/services" component={Services} />
    </Switch>
);