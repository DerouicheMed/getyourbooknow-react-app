import React from "react";
import { Switch, Redirect, Route, useLocation } from "react-router-dom";
import {
  BookPage,
  ErrorPage,
  HomePage,
  SearchPage,
  PolicyPage,
} from "./components";
import { Dashboard, AddBookPage } from "./admin";

const Routes = () => {
  const query = new URLSearchParams(useLocation().search);
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/books">
        <BookPage id={query.get("b")} />
      </Route>
      <Route path="/search">
        <SearchPage searchString={query.get("s")} />
      </Route>
      <Route exact path="/admin" component={Dashboard} />
      <Route path="/admin/add-book" component={AddBookPage} />
      <Route path="/about">
        <PolicyPage indicator={"about"}></PolicyPage>
      </Route>
      <Route path="/privacy">
        <PolicyPage indicator={"privacy"}></PolicyPage>
      </Route>
      <Route path="/terms">
        <PolicyPage indicator={"terms"}></PolicyPage>
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
