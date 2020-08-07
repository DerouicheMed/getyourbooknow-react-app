import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-light fixed-top">
        <NavLink to="/" className="navbar-brand m-auto ">
          GetYourBook<span className="font-weight-bold">Now</span>
        </NavLink>
      </nav>
    </>
  );
};

export default Header;
