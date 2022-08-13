import "../components/styled/header.css";
import React from "react";

const header = () => {
  return (
    <div className="header">
      <div className="inner">
        <a href="/" className="logo">
          <img src="https://img.icons8.com/ios-filled/60/000000/pineapple.png" alt="PineApple" />
        </a>
      </div>
    </div>
  );
};

export default header;
