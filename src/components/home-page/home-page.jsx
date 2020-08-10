import React, { useEffect, useState } from "react";
import "./home-page.css";
import Carousel from "../carousel/carousel";
import Loader from "../loader/loader";
import SearchInput from "../search-input/search-input";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
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
              <SearchInput searchActivated={false} />
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
