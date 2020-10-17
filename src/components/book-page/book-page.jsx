import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./book-page.css";
import { Carousel, Loader, PaypalButton, Advertisement } from "../../shared";
import { downloadFile } from "../../services/download-file";

const BookPage = ({ id }) => {
  const [book, setBook] = useState({});
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(true);
  const [transactionCompleted, setTransactionCompleted] = useState(false);
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const history = useHistory();

  useEffect(() => {
    setTransactionCompleted(false);
    setLoading(true);
    axios
      .get(SERVER_URL + "/api/books/" + id)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
        window.scrollTo(0, 0);
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
  }, [id]);

  const transactionState = (data) => {
    if (data === "transaction completed") {
      setTransactionCompleted(true);
      downloadFile(book);
    }
  };

  const handleDownload = () => {
    downloadFile(book);
  };

  return (
    <>
      <Loader loading={loading} />
      <section id="book-section" className={loading ? "d-none" : ""}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="img-container text-center mb-5">
                <img
                  src={`${SERVER_URL}/public/${id}.jpg`}
                  alt="book cover"
                  className="book-cover"
                />
              </div>
            </div>
            <div className="col-md-6 col-12 book-info">
              <h1>{book.title}</h1>
              <h2> By {book.author}</h2>
              <h3>File : {book.file}</h3>
              <h3>ISBN : {book.isbn}</h3>
              <h3>Year : {book.year}</h3>
              {!transactionCompleted ? (
                <PaypalButton
                  loading={loading}
                  transactionStateCallback={transactionState}
                />
              ) : (
                <>
                  Your download will start soon. If download doesn't start
                  please click
                  <button className="btn" onClick={handleDownload}>
                    Download Book
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <section id="advertisement" className={loading ? "d-none" : ""}>
        <Advertisement />
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
    </>
  );
};

export default BookPage;
