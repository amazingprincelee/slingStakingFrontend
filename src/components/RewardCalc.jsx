import React, { useState } from "react";
import {  useHistory } from "react-router-dom";

const calcResultStyle = { margin: "10px", fontSize: "1.5rem", color: "blue" };

function RewardCalc() {
  const history = useHistory();

  const [inputValue, setInputValue] = useState("");
  const [stakeAmount, setStakeAmount] = useState("");

  const handleChange = (event) => {
    const inputValue = event.target.value;
    let stakeAmount = "";
  
    if (inputValue) {
      stakeAmount = (parseFloat(inputValue) * 1.0625).toFixed(2);
    }
  
    setInputValue(inputValue);
    setStakeAmount(stakeAmount);
  };
  

  // create a formatter that uses the US locale and formats numbers with commas and without decimal points
  const formatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <div className="container-fluid mb-2 reward-calc">
      <div className="container">
        <div className="calculator m-5">
          <h1>Reward Calculator</h1>
          <div>
            <input
              placeholder="Amount to stake"
              value={inputValue}
              onChange={handleChange}
            />
          </div>
          {stakeAmount && (
            <p style={calcResultStyle}>
              After 90 Days: {formatter.format(stakeAmount)}
            </p>
          )}
        </div>

        <div className="stake-sling m-5 p-2">
          <h1>Stake Sling</h1>
          <p> Sling staking is currently available on the Ethereum Network.</p>
          <button className="primary-btn" onClick={() => history.push("/StakingPage")}>
              Launch Dapp
            </button>
        </div>
      </div>
    </div>
  );
}

export default RewardCalc;
