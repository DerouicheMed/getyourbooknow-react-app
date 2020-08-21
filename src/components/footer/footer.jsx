import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div class="container text-center">
        <div class="row">
          <div class="col-12">
            &copy; {year} GetYourBook<span className="text-bold">Now</span>. All
            rights reserved.
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Link to="/About">About</Link>&nbsp;|&nbsp;
            <Link to="/privacy">Privacy Policy</Link>&nbsp;|&nbsp;
            <Link to="/terms">Terms and Conditions</Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            Powered By :{" "}
            <a href="https://www.derouichemohamed.tk">
              www.derouichemohamed.tk
            </a>
            <a
              href="https://www.linkedin.com/in/derouiche-mo7amed/"
              class="ml-2"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/DerouicheMed" class="ml-2">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
