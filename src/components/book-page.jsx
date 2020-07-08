import React from "react";

const url = "/img/How_to_win_friends_and_influence_people.jpg";

const container = {
  backgroundImage: `url(${url})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100vh",
};

const title = {
  fontWeight: "700",
  fontSize: "48px",
};

const bookCover = {
  width: "80%",
};

const BookPage = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="row" style={{ textAlign: "center" }}>
            <div className="col-12">
              <h1 style={title}>Get your book right now for the best price</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-12">
              <div style={bookCover}>
                <img src={url} alt="book cover" />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <h1>How To Friends and Influence People</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookPage;
