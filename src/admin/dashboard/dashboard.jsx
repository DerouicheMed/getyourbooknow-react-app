import React, { useState, useEffect } from "react";
import "./dashboard.css";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Dashboard = () => {
  const [user, setUser] = useState({ username: "", passwd: "" });
  const [badCredentials, setBadCredentials] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    localStorage.setItem("token", null);
  }, []);

  const handleInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response = await axios.post(
        `${SERVER_URL}/api/admin/authenticate`,
        user
      );
      localStorage.setItem("token", response.data.token);
      setLoggedIn(true);
    } catch (err) {
      if (
        err.response === undefined ||
        err.response === null ||
        err.response.status === 500
      )
        history.push("/500");
      else if (err.response.status === 404) {
        history.push("/404");
      } else if (err.response.status === 403) {
        setBadCredentials(true);
      }
    }
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
                    <label>Username</label>
                    <input
                      type="text"
                      class="form-control"
                      name="username"
                      value={user.username}
                      onChange={handleInputChange}
                      placeholder="Enter email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      name="passwd"
                      value={user.passwd}
                      onChange={handleInputChange}
                      placeholder="Password"
                    />
                  </div>
                  {badCredentials ? (
                    <div className="form-group">
                      <div class="alert alert-danger" role="alert">
                        <small>Username or password are incorrect !</small>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
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

export default Dashboard;
