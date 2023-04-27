import React from "react";
import "../stakingPage.css";
import { Carousel } from "react-bootstrap";
import newsImage1 from "../images/news.jpeg";
import newsImage2 from "../images/sling-logo.png";
import heroeImage from "../images/sling-pix.png";

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
      <div class="container">
        <div class="container text-center">
          <div class="row align-items-start">
            <div class="col">
              <div className="token-balance box-showdown m-2">
                <p>Staking Balance</p>
                <p>0 SLING</p>
              </div>
            </div>
            <div class="col">
              <div className="token-balance box-showdown m-2">
                <p>Reward Balance</p>
                <p>0 SLING</p>
              </div>
            </div>
            <div class="col">
              <div className="news-update box-showdown carousel m-2">
                <Carousel>
                  {carouselItems.map((item) => (
                    <Carousel.Item key={item.id}>
                      <div className="row">
                        <div className="col-md-4">
                          <img
                            className="d-block w-100"
                            src={item.image}
                            alt={item.title}
                          />
                        </div>
                        <div className="col-md-8 mb-3">
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container text-center">
  <div class="row align-items-center">
    <div class="col">
    <div class="container mb-3 ">
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
    Sling is a decentralized finance (DeFi) platform that offers a staking <br/> app with an impressive 25% annual percentage rate
    </div>
    
  </div>
</div>
      
    </div>
  );
}

export default StakingPage;
