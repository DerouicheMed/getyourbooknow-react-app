import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./book-page.css";
import PaypalButton from "./paypal-button";

const BookPage = ({ id }) => {
  const [book, setBook] = useState({});
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const history = useHistory();
  useEffect(() => {
    console.log(id);
    axios
      .get(SERVER_URL + "/books/" + id)
      .then((res) => {
        setBook(res.data);
        console.log(res.status);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          history.push("/404");
        }
        console.error(err);
      });
  }, []);

  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <div style={{ textAlign: "center" }}>
                <img
                  src={`/img/${id}.jpg`}
                  alt="book cover"
                  className="book-cover"
                />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <h1>{book.title}</h1>
              <h3>{book.author}</h3>
              <h5>File : {book.file}</h5>
              <h5>ISBN : {book.isbn}</h5>
              <h5>Yeah : {book.year}</h5>
              <PaypalButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookPage;
