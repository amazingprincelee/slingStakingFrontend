import React from "react";
import "../stakingPage.css";
import { Carousel } from "react-bootstrap";
import newsImage1 from "../images/news.jpeg";
import newsImage2 from "../images/sling-logo.png";

function StakingPage() {
  const carouselItems = [
    {
      id: 1,
      image: newsImage1,
      title: "Announcement",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    },
    {
      id: 2,
      image: newsImage2,
      title: "New Feature",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    },
    {
      id: 3,
      image: newsImage1,
      title: "Upcoming Event",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    },
    {
      id: 4,
      image: newsImage2,
      title: "Important Update",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    },
  ];

  return (
    <div>
      <div class="container mt-5">
        <div class="container text-center">
          <div class="row align-items-center">
            <div class="col-3-lg col-lg-6 border rounded bg-warning border-warning m-2 mx-auto">
              <p>Staking Balance</p>
              <p>0 SLING</p>
            </div>
            <div class="col-3-lg col-lg-6 border rounded bg-warning border-warning m-2 mx-auto">
              <p>Reward Balance</p>
              <p>0 SLING</p>
            </div>
            <div className="col-3-lg border rounded bg-warning border-warning m-2 mx-auto">
              <p>Token Balanced</p>
              <p>0 SLING</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container text-center">
        <div class="row align-items-center">
          <div class="col">
            <div class="container mb-5 ">
              <div className="staking-form box-showdown">
                <h1>STAKE SLING</h1>
                <p>Duration: 90 Days</p>
                <input type="number" placeholder="Amount to stake" />
                <div className="percentage-buttons">
                  <button className="percentage-button">25%</button>
                  <button className="percentage-button">50%</button>
                  <button className="percentage-button">75%</button>
                  <button className="percentage-button">Max</button>
                </div>
                <button className="submit-button">DEPOSIT</button>
                <button className="submit-button">WiTHDRAW</button>
              </div>
            </div>
          </div>
          <div class="col mb-5">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default StakingPage;
