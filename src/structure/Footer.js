import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <nav>
        <ul className="menu-footer">
          <li>
            <a
              href="https://github.com/delyana-dv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/delyana-ivanova/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li title="Download CV">
            <a
              href="./../../public/resources/DelyanaIvanovaCV - EN.doc"
              download
              rel="noopener noreferrer"
            >
              <i className="fa fa-download"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
