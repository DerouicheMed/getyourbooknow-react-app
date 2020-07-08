import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import BookPage from "./components/book-page";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/management/studies" />
      <Route path="/:id" component={BookPage} />
      <Redirect to="/management/studies" />
    </Switch>
  );
};

export default Routes;
