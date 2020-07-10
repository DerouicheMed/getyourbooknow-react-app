import React from "react";
import { Switch, Redirect, Route, useLocation } from "react-router-dom";
import { BookPage, ErrorPage, HomePage } from "./components";

const Routes = () => {
  const query = new URLSearchParams(useLocation().search);
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/books">
        <BookPage id={query.get("b")} />
      </Route>
      <Route path="/404">
        <ErrorPage error={"404"}></ErrorPage>
      </Route>
      <Route path="/500">
        <ErrorPage error={"500"}></ErrorPage>
      </Route>
      <Redirect to="/404" />
    </Switch>
  );
};

export default Routes;
