import React from "react";
import "./home-page.css";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="row header">
          <div className="col-12  text-center">
            <h1>
              GetYourBookNow let's you download ebooks straight to your device
              in the fastest and easiest way
            </h1>
            <h4>Choose from a varity of books only for the smallest prices</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <img className="books-banner" src="img/books-banner.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
