import React from "react";
import { Switch, Redirect, Route, useLocation } from "react-router-dom";
import { BookPage, NotFoundPage, HomePage } from "./components";

const Routes = () => {
  const query = new URLSearchParams(useLocation().search);
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/books">
        <BookPage id={query.get("b")} />
      </Route>
      <Route path="/404" component={NotFoundPage} />
      <Redirect to="/404" />
    </Switch>
  );
};

export default Routes;
