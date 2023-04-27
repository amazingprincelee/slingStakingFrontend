import React from "react";
import {  useHistory } from "react-router-dom";
import heroeImage from "../images/sling-pix.png";


function Header() {
  const history = useHistory();
  
  return (
    <div className="container-fluid header">
      <div className="container mb-5">
        <div className="left-column">
          <h1>
            Get more rewards with <br /> Sling Staking
          </h1>
          <p className="desc">
            maximize your cryptocurrency earnings by staking your coins with
            Sling Staking to earn up to 25% APR over a 90-day lock-in period.
          </p>

          <div className="button-container">
            

            <button className="primary-btn" onClick={() => history.push("/StakingPage")}>
              Launch Dapp
            </button>

            <button className="secondary-btn">Buy Sling</button>
          </div>
        </div>

        <div className="right-column header-image">
          <img src={heroeImage} alt="staking %" />
        </div>
      </div>
    </div>
  );
}

export default Header;
