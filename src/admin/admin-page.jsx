import React, { useState } from "react";
import "./admin-page.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AdminPage = () => {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("sessionId") === null ? false : true
  );

  useEffect(() => {
    localStorage.setItem("sessionId", "1234");
    setLoggedIn(false);
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("sessionId", "1234");
    setLoggedIn(true);
  };
  if (!loggedIn)
    return (
      <section id="login-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 offset-md-4">
              <div className="login-form">
                <form onSubmit={handleSubmit}>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" class="btn btn-primary form-control">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  else
    return (
      <>
        <h1>this is admin page</h1>
        <Link to="/admin/add-book"> Add a book</Link>
      </>
    );
};

export default AdminPage;
