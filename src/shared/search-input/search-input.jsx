import React, { useState } from "react";
import "./search-input.css";
import { useHistory } from "react-router-dom";

const SearchInput = ({ searchActivated }) => {
  const [initiateSearch, setInitiateSearch] = useState(searchActivated);
  const [searchValue, setSearchValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const history = useHistory();

  const setInputFocus = () => {
    var searchInput = document.getElementById("search-input");
    setInitiateSearch(true);
    searchInput.focus();
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) handleInputSubmit();
  };

  const handleInputSubmit = () => {
    setSubmitted(true);
    if (searchValue !== "") {
      history.push("/search/?s=" + searchValue);

      setSubmitted(false);
    }
  };

  return (
    <div className="search-input-wrapper">
      <input
        className="btn input-search animate__animated"
        type="text"
        name=""
        id="search-input"
        value={searchValue}
        onChange={handleInputChange}
        onKeyUp={handleKeyUp}
      />
      {submitted && searchValue === "" ? (
        <small class="form-text text-center text-muted">
          Please insert something to search
        </small>
      ) : (
        <></>
      )}
      {initiateSearch !== true ? (
        <button className="btn focus-input-btn" onClick={setInputFocus}>
          <i className="fas fa-search search-btn-icon"></i> Search Book
        </button>
      ) : (
        <></>
      )}
      <button className=" btn submit-search-btn" onClick={handleInputSubmit}>
        <i className="fas fa-search search-btn-icon"></i>
      </button>
    </div>
  );
};

export default SearchInput;
