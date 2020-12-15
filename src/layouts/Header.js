import React from "react";
import "../styles/Header.css";
import img1 from "../images/logo.png";

const Header = () => {
  return (
    <>
      <img src={img1} alt="logo" />
      <div className="town">
        <p className="future">Future</p>
      </div>
      <span className="appspan">your App</span>
      <p className="motto">The future depends on what you do today.</p>
    </>
  );
};

export default Header;
