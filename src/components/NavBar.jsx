import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import ConnectBtn from "./ConnectBtn";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" className="navbar-brand logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavOpen ? "show" : ""} collapse navbar-collapse`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active text-light"
                aria-current="page"
                style={{ fontSize: "16px", margin: "10px" }}
                onClick={() => setIsNavOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/StakingPage"
                className="nav-link text-light"
                style={{ fontSize: "16px", margin: "10px" }}
                onClick={() => setIsNavOpen(false)}
              >
                Launch Dapp
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/#buy"
                className="nav-link text-light"
                style={{ fontSize: "16px", margin: "10px" }}
              >
                Buy Sling
              </Link>
            </li>
          </ul>
          <ConnectBtn btnName="Connect" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
