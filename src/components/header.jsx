import React from "react";

const style = {
  marginBottom: 50,
  borderBottom: "0.5px solid black",
};

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-light mb-10" style={style}>
        <span className="navbar-brand m-auto h1">
          GetYourBook<span className="font-weight-bold">Now</span>
        </span>
      </nav>
    </>
  );
};

export default Header;
