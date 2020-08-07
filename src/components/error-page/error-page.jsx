import React from "react";
import { Link } from "react-router-dom";
import "./error-page.css";

const ErrorPage = ({ error }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 error-display">
            {error === "404" ? (
              <>
                <img src="/img/404.jpg" alt="error" />
                <h1>Oups... Sorry not found !</h1>
                <h6>
                  The page you are looking for doesn't exist or has been removed
                </h6>
              </>
            ) : (
              <>
                <img src="/img/500.jpg" alt="error" />
                <h1>Internal Server Error</h1>
                <h6>
                  An error has accured and we are working to fix the problem. We
                  will be up and running soon
                </h6>
              </>
            )}
            <Link to={"/"} className="btn btn-error">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
