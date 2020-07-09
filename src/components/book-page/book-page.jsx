import React, { useEffect, useState } from "react";
import axios from "axios";
import "./book-page.css";
import PaypalButton from "./paypal-button";

const url = "/img/How_to_win_friends_and_influence_people.jpg";

const container = {
  backgroundImage: `url(${url})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
};
const title = {
  fontWeight: "700",
  fontSize: "48px",
};
const bookCover = {
  height: 500,
  margin: "auto",
};

const BookPage = ({ id }) => {
  const [book, setBook] = useState({});
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  useEffect(() => {
    console.log(id);
    axios
      .get(SERVER_URL + "/books/" + id)
      .then(({ data }) => {
        setBook(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
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
                  style={bookCover}
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
