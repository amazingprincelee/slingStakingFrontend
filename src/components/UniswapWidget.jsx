import React from "react";
import { SwapWidget } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";
import MyTokenList from "../MyTokenList";

const theme = {
  borderRadius: 0,
  fontFamily: "Helvetica",
  container: "orange",
  primaryColor: "white",
  secondaryColor: "#ff7f00",
};




function UniswapWidget() {
  return (
    <div className="container-fluid buy-section">
      <div className="container">
      <div className="buy-instruction m-5">
        <h1>How to Buy Sling</h1>
        <ol>
          <li>Create a wallet</li>
          <li>Fund wallet with Etherium</li>
          <li>Connect your wallet to Uniswap</li>
          <li>Swap Etherium for Sling</li>
        </ol>
        <p style={{color: "darkred",  fontSize: "20px", textAlign: "center" }}>Set slippage tolerance within the settings to 0.5%</p>
      </div>

      <div className="widget m-5">
        <SwapWidget theme={theme} tokenList={MyTokenList} />
      </div>
    </div>
    </div>
  );
}

export default UniswapWidget;
