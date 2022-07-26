import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { BsPeopleFill } from "react-icons/bs";

/**
 * Component to display a Header
 *
 * @component
 *
 * @returns (
 *  <Header />
 *)
 */

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/employe-list">
          <BsPeopleFill />
        </Link>
      </div>
      <div className="title">
        <Link to="/">
          <h1>HRNet</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
