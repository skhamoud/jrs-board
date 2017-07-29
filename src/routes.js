// Routes File for All the routes to be implemented here.
import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./components/home";
import AllDevsPage from "./components/devs/AllDevsPage";
import SingleDevPage from "./components/devs/SingleDevPage";
import AllOffersPage from "./components/offers/AllOffersPage";
import SingleOfferPage from "./components/offers/SingleOfferPage";
import NotFound from "./components/common/NotFound";

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/offers" component={AllOffersPage} />
    <Route exact path="/developers" component={AllDevsPage} />
    <Route exact path="/offer/:id" component={SingleOfferPage} />
    <Route exact path="/developer/:id" component={SingleDevPage} />
    <Route component={NotFound} />
  </Switch>
);
