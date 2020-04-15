import React from "react";
import "../styles/Header.css";

const Header = () => {
  function toggleMenu(e) {
    const itemMenu = document.getElementById("itemMenu");

    if (itemMenu.className === "menu") {
      itemMenu.className += " hide";
    } else {
      itemMenu.className = "menu";
    }
  }

  return (
    <nav className="Header">
      <div className="logo">Delyana Ivanova</div>

      <ul className="menu hide" id="itemMenu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className="h-menu" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </div>
    </nav>
  );
};

export default Header;
