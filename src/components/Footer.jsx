import React from "react";
import "../Footer.css";
import logo from "../images/staking-logo.png";

function Footer() {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <img src={logo} alt="logo" className="img-fluid mb-3" />
            <p className="text-muted">
              Get the most out of your cryptocurrency with our Sling Staking app.
              Our simple and intuitive platform allows you to earn rewards on your
              holdings by staking them with ease.
            </p>
            <p className="text-muted mt-5">
              Designed by D'AmazingPrinceLee (BB)
            </p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h3 className="underline mb-3">Utilities</h3>
            <ul className="list-unstyled">
              <li>
                <a href="https://staking.slingclassic.com/" className="text-muted">Staking</a>
              </li>
              <li>
                <a href="https://burnt.slingclassic.com/" className="text-muted">Burn Dashboard</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h3 className="underline mb-3">Follow Us</h3>
            <ul className="list-unstyled">
              <li>
                <a href="https://twitter.com/SlingClassic" className="text-muted">Twitter</a>
              </li>
              <li>
                <a href="http://t.me/slingclassic" className="text-muted">Telegram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <p className="text-muted">
              &copy; {new Date().getFullYear()} SLING STAKING. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

