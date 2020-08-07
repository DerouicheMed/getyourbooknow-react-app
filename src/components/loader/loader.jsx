import React from "react";
import "./loader.css";

const Loader = ({ loading }) => {
  if (loading) {
    return (
      <div className="loader">
        <div class="book">
          <div class="inner">
            <div class="left"></div>
            <div class="middle"></div>
            <div class="right"></div>
          </div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    );
  } else return <></>;
};

export default Loader;
