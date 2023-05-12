import React from "react";
import { useHistory } from "react-router-dom";
import heroeImage from "../images/sling-pix.png";

function Header() {
  const history = useHistory();

  const handleBuyClick = () => {
    const buyButton = document.getElementById("buy-button");
    if (buyButton) {
      const yOffset = 50; // adjust this value to your preference
      const y = buyButton.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

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
            <button id="buy-button" className="secondary-btn" onClick={handleBuyClick}>
              Buy Sling
            </button>
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
