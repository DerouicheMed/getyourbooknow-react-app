import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header></Header>
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
