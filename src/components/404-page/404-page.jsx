import React from "react";
import { Link } from "react-router-dom";
import "./404-page.css";
const NotFoundPage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 error-display">
            <img src="/img/404.jpg" alt="error" />
            <h1>Oups... Sorry not found !</h1>
            <h6>
              The page you are looking for doesn't exist or has been removed
            </h6>
            <Link to={"/books"} className="btn btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
