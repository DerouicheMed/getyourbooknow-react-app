import React, { useEffect, useState } from "react";
import "./home-page.css";
import Carousel from "../carousel/carousel";
import Loader from "../loader/loader";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Loader loading={loading} />
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12  ">
            <h1>
              GetYourBookNow let's you download ebooks straight to your device
              in the fastest and easiest way
            </h1>
            <h4>Choose from a varity of books only for the smallest prices</h4>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12 col-md-4 offset-md-4">
            <button className="btn btn-search">Search Book</button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
