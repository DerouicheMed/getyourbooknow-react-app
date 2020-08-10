import React from "react";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-6 text-center">
            &copy; {year} GetYourBook<span className="text-bold">Now</span>
          </div>
          <div class="col-md-6 text-center">
            Made by&nbsp;
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
