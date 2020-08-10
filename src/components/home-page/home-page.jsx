import React, { useEffect, useState } from "react";
import "./home-page.css";
import Carousel from "../carousel/carousel";
import Loader from "../loader/loader";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [initiateSearch, setInitiateSearch] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const setInputFocus = () => {
    var searchInput = document.getElementById("search-input");
    setInitiateSearch(true);
    searchInput.focus();
  };
  return (
    <>
      <Loader loading={loading} />
      <section id="masthead" className={loading ? "d-none" : ""}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 order-md-2 text-center">
              <h1>
                GetYourBookNow let's you download ebooks straight to your device
                in the fastest way
              </h1>
              <h2>
                Choose from a varity of books only for the smallest prices
              </h2>
            </div>
            <div className="col-12 col-md-6 order-md-1 banner-pic  "></div>
          </div>
          <div className="row ">
            <div className="col-12 col-md-6 offset-md-6">
              <div className="search-input-wrapper">
                <input
                  className="btn input-search animate__animated"
                  type="text"
                  name=""
                  id="search-input"
                />
                {initiateSearch !== true ? (
                  <button
                    className="btn focus-input-btn"
                    onClick={setInputFocus}
                  >
                    Search Book
                  </button>
                ) : (
                  <></>
                )}
                <button className=" btn submit-search-btn">
                  <i className="fas fa-search search-btn-icon"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id=" suggestions" className={loading ? "d-none" : ""}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Carousel />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
