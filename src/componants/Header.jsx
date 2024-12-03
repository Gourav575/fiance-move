import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/images/logo.svg'
// import Hamburger from "./Hamburger";
// import Logo from "./Logo";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container main-header">
        <div className="logo">
         
         <img src={logo} alt="logo" className="w-11/12" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="24" viewBox="0 0 52 24">
            <g transform="translate(-294 -47)">
              <rect width="25" height="4" rx="2" transform="translate(304 47)" fill="#000" />
              <rect width="25" height="4" rx="2" transform="translate(304 67)" fill="#000" />
              <rect width="35" height="4" rx="2" transform="translate(294 57)" fill="#000" />
            </g>
          </svg>
        </div>
        <div className={`nav-elements w-9/12 ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/*">Future</NavLink>
            </li>
            <li>
              <NavLink to="/*">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/*">About</NavLink>
            </li>
            <li>
              <NavLink to="/*">Contact</NavLink>
            </li>
           
          </ul>
          <div className="sign-btn-b">
        <button className="">Sign In</button>
        <button className="secontary-btn ml-3">Sign Up</button>
        </div>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
