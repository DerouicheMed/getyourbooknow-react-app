import React from "react";
import "./box.css";
import { Link } from "react-router-dom";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Box = ({ book }) => {
  return (
    <div className="box">
      <div className="book-thumbnail text-center">
        <img src={`${SERVER_URL}/public/${book._id}.jpg`} alt="" />
      </div>
      <div className="book-description">
        <Link to={"/books/?b=" + book._id}>
          <h3>{book.title}</h3>
          <h4>{book.author}</h4>
        </Link>
        <div className="text-right">
          <h4>Only for 4.97$</h4>
        </div>
      </div>
    </div>
  );
};

export default Box;
