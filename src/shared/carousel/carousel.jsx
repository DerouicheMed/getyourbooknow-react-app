import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./carousel.css";
import Box from "./box/box";

const Carousel = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    axios
      .get(SERVER_URL + "/api/books")
      .then((res) => {
        setSuggestions(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (
          err.response === undefined ||
          err.response === null ||
          err.response.status === 500
        )
          history.push("/500");
        else if (err.response.status === 404) {
          history.push("/404");
        }
      });
  }, []);

  const navigate = (position) => {
    let suggestionSlider = document.getElementById("suggestions-slider");
    console.log(suggestionSlider.offsetWidth);
    if (position === "right") suggestionSlider.scrollLeft += 600;
    else if (position === "left") suggestionSlider.scrollLeft -= 600;
  };

  return (
    <>
      <div id="suggestions-slider" className="suggestions-slider ">
        {loading ? (
          <div class="spinner-container d-flex justify-content-center">
            <div class="spinner-grow" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="inner-wrapper d-flex">
            {suggestions.map((book) => (
              <>
                <Box book={book} />
              </>
            ))}
          </div>
        )}
        <button
          className="btn navigation-btn navigation-btn-left"
          onClick={() => navigate("left")}
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <button
          className="btn navigation-btn navigation-btn-right"
          onClick={() => navigate("right")}
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
};

export default Carousel;
