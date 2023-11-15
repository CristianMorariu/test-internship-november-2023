import React from "react";
import "./Header.css";
import logo from "../../assets/Images/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="headerContainer">
      <img src={logo} alt="" />
      <div className="data">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          Home
        </Link>
      </div>
      <div className="data">
        <Link to={"/about-us"} style={{ textDecoration: "none" }}>
          About
        </Link>
      </div>
      <div className="data">
        <Link to={"/contact"} style={{ textDecoration: "none" }}>
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
