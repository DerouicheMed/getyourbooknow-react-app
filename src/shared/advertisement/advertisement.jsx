import React from "react";
import { Link } from "react-router-dom";
import "./advertisement.css";

const Advertisement = () => {
  return (
    <div className="container ad-container">
      <div className="row">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="/img/ad_1.jpg"
                alt="First slide"
              />
              <Link
                to="/books/?b=5f0722446f9995d012afb432"
                className="btn btn-ad-1"
              >
                Download Now
              </Link>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="/img/ad_2.jpg"
                alt="Second slide"
              />
              <Link
                to="/books/?b=5f32711a645a0642a023dc08"
                className="btn btn-ad-2"
              >
                Download Now
              </Link>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="img/ad_3.jpg" alt="Third slide" />
              <Link
                to="/books/?b=5f0713906f9995d012afb431"
                className="btn btn-ad-3"
              >
                Download Now
              </Link>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
