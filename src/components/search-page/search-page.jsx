import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import "./search-page.css";
import SearchInput from "../search-input/search-input";
import Loader from "../loader/loader";

const SearchPage = ({ searchString }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const history = useHistory();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${SERVER_URL}/api/books/search/${searchString}`)
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
        console.log(res.data);
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
  }, [searchString]);

  const renderBooks = () => {
    if (books.length === 0) {
      return <h1 className="not-found-text">No results founds</h1>;
    } else {
      return books.map((book) => (
        <div class="media mb-3">
          <img
            class="mr-3"
            src={`${SERVER_URL}/public/${book._id}.jpg`}
            alt="Generic placeholder image"
          />
          <div class="media-body">
            <Link to={`/books/?b=${book._id}`}>
              <h1>{book.title}</h1>
            </Link>
            <h2> By {book.author}</h2>
            <h3>File : {book.file}</h3>
            <h3>ISBN : {book.isbn}</h3>
            <h3>Yeah : {book.year}</h3>
          </div>
        </div>
      ));
    }
  };
  return (
    <>
      <section id="search-bar">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SearchInput searchActivated={true} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {loading ? (
                <>
                  <div class=" d-flex justify-content-center">
                    <div class="spinner-grow" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>
                </>
              ) : (
                renderBooks()
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchPage;
