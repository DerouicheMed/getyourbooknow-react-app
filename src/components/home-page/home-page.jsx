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
            <div className="col-12 col-md-6 offset-md-6 text-center">
              <h1 className="animate__animated animate__pulse">
                GetYourBookNow let's you download ebooks straight to your device
                in the fastest way
              </h1>
              <h2 className="animate__animated animate__pulse">
                Choose from a varity of books only for the smallest prices
              </h2>
              <SearchInput searchActivated={false} />
            </div>
          </div>
        </div>
      </section>
      <section id="suggestions" className={loading ? "d-none" : ""}>
        <div className="container">
          <div className="row mb-3">
            <div className="col-12">
              <h2>Books You might like :</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Carousel />
            </div>
          </div>
        </div>
      </section>
      <section id="description" className={loading ? "d-none" : ""}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h1>
                Why choose GetYourBook<span className="text-bold">Now</span> ?
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div class="card mb-3 animate__animated animate__slideInUp">
                <img
                  class="card-img-top"
                  src="/img/privacy-card.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h1 class="card-title">Privacy</h1>
                  <p class="card-text">
                    Your identity is extremely valuable. Having your identity
                    stolen can compromise everyday activities and undermine your
                    reputation, both privately and professionally.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div class="card mb-3 animate__animated animate__slideInUp">
                <img
                  class="card-img-top"
                  src="/img/paypal-card.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h1 class="card-title">Secure Payment</h1>
                  <p class="card-text">
                    Keeping your financial information secure is absolutely
                    essential when buying online. Whether on a website, in an
                    app, or an invoice payment, trust PayPal to help keep your
                    transactions secure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
