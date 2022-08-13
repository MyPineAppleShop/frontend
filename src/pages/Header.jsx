import "../components/styled/header.css";
import React from "react";

const header = () => {
  return (
    <div className="header">
      <div className="inner">
        <a href="/" className="logo">
          <img
            src="https://img.icons8.com/ios-filled/40/000000/pineapple.png"
            alt="PineApple"
          />
        </a>
        <div className="menu"></div>
        <div className="iMacCategories">iMac</div>
        <div className="iPhoneCategories">iPhone</div>
        <a href="/Login" className="loginlogo">
        <img src="https://img.icons8.com/external-flat-icons-inmotus-design/67/000000/external-login-antivirus-flat-icons-inmotus-design.png" alt=""/>
        </a>
        <a href="/Basket" className="shoppingLogo">
        <img src="https://img.icons8.com/ios-glyphs/60/000000/shopping-bag.png" alt=""/>
        </a>
      </div>
    </div>
  );
};

export default header;
