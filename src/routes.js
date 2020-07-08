import React from "react";
import { Switch, Redirect, Route, useLocation } from "react-router-dom";
import BookPage from "./components/book-page";

const Routes = () => {
  const query = new URLSearchParams(useLocation().search);
  return (
    <Switch>
      <Route path="/books">
        <BookPage id={query.get("b")} />
      </Route>
      <Redirect to="/books/?b=GsN3SjH1n9HiNUMOp0ny" />
    </Switch>
  );
};

export default Routes;
