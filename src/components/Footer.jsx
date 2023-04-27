import React from "react";
import "../Footer.css";
import logo from "../images/staking-logo.png";

function Footer() {
  return (
    <footer>
      <div className="footer-container mb-5">
        <div className="left">
          <img src={logo} alt="logo" />
          <p style={{ fontSize: "1rem", }}>
            Get the most out of your cryptocurrency with our Sling Staking app.
            Our simple and intuitive platform allows you to earn rewards on your
            holdings by staking them with ease.
          </p>
        </div>
        <div className="middle">
          <h3 className="underline">Utilities</h3>
          <ul>
            <li>
              <a href="https://staking.slingclassic.com/">Staking</a>
            </li>
            <li>
              <a href="https://burnt.slingclassic.com/">Burn Dashboard</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <h3 className="underline">Follow Us</h3>
          <ul>
            <li>
              <a href="https://twitter.com/SlingClassic">Twitter</a>
            </li>
            <li>
              <a href="http://t.me/slingclassic">Telegram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
