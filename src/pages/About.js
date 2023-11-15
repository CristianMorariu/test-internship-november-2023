import React from "react";
import Header from "../components/Header/Header";
import "../index.css";
const About = () => {
  return (
    <div>
      <Header />
      <div className="aboutContent">
        <h1>About Page</h1>
        <p>You are currently on the About Page</p>
      </div>
    </div>
  );
};

export default About;
