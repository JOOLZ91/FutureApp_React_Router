import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <h2>
        <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
        Filip Ruszala
      </h2>
    </div>
  );
};

export default Footer;
