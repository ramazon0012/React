import React from "react";
import './Nav.css';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <Link className="navbar-brand" to="/">Logo</Link>
        <ul>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
