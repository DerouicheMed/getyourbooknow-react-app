import React from "react";
import "./carousel.css";
import Box from "./box/box";

const Carousel = () => {
  return (
    <>
      <div className="suggestions-slider ">
        <div className="inner-wrapper d-flex">
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
      </div>
    </>
  );
};

export default Carousel;
