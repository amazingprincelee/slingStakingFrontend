import React, { useEffect, useState } from "react";
import "../stakingPage.css";
import { ethers } from "ethers";
import ABI from '../ABI'

//development

function StakingPage() {
  const [inputValue, setInputValue] = useState();
  const [currentAction, setCurrentAction] = useState(null);
  const [tokenBalance, setTokenBalance] = useState(0);
  const [stakingBalance, setStakingBalance] = useState(0.0);
  const [rewardBalance, setRewardBalance] = useState(0)
 

  // Web3 connection
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"



// The Contract object
const contract = new ethers.Contract(contractAddress, ABI, signer); 




  useEffect(() => {

    const connectWallet = async () => {
      await provider.send("eth_requestAccounts", []);
    };

    const getBalance = async () => {

      const balance = await signer.getBalance();;
        // format balance
      const balanceFormatted = ethers.utils.formatEther(balance);
      setTokenBalance(balanceFormatted);
      

    }

    const getStakingBalance = async () => {
      const stakedBalance = await contract.checkStakingBalance()
      setStakingBalance(stakedBalance)
    }

    const getRewardBalanceUi = async () => {
      const RWDbalance = await contract.checkStakingBalance();
      const RWDbalanceFormatted = ethers.utils.formatEther(RWDbalance);
      setRewardBalance(RWDbalanceFormatted);

    }


    connectWallet()
    .catch(console.error);

    getBalance()
    .catch(console.error);

    getStakingBalance()
    .catch(console.error);

    getRewardBalanceUi()
    .catch(console.error)

  });

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  const handleDeposit = () => {
    setCurrentAction("deposit");
  };

  const handleWithdraw = () => {
    setCurrentAction("withdraw");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentAction === "deposit") {
      setCurrentAction("deposit");
      const parsedValue = ethers.utils.parseEther(inputValue);
      const depositUpdate = await contract.stake(parsedValue);
      await depositUpdate.wait();
      setInputValue("");

    } else if (currentAction === "withdraw") {
      // handle withdraw logic here
      setCurrentAction("withdraw");
      const parsedWithdrawValue = ethers.utils.parseEther(inputValue);
      const depositWithdrawUpdate = await contract.unstake(parsedWithdrawValue);
      await depositWithdrawUpdate.wait();
      setInputValue("");
    }
  };

  return (
    <div>
      <div class="container mt-5">
        <div class="container text-center">
          <div class="row align-items-center">
            <div class="col-3-lg col-lg-6 border rounded bg-warning border-warning m-2 mx-auto">
              <p>Staking Balance</p>
              <p>{stakingBalance} SLING</p>
            </div>
            <div class="col-3-lg col-lg-6 border rounded bg-warning border-warning m-2 mx-auto">
              <p>Reward Balance</p>
              <p>{rewardBalance} SLING</p>
            </div>
            <div className="col-3-lg border rounded bg-warning border-warning m-2 mx-auto">
              <p>Balance</p>
              <p>{tokenBalance} Eth</p>
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
                <form onSubmit={handleSubmit}>
                <input
                  type="number"
                  step="any"
                  placeholder="Amount to stake"
                  onChange={handleChange}
                  value={inputValue}
                />
                  <div className="percentage-buttons">
                    <button className="percentage-button">25%</button>
                    <button className="percentage-button">50%</button>
                    <button className="percentage-button">75%</button>
                    <button className="percentage-button">Max</button>
                  </div>
                  <button className="submit-button" onClick={handleDeposit}>
                    DEPOSIT
                  </button>
                  <button className="submit-button" onClick={handleWithdraw}>
                    WiTHDRAW
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div class="col mb-5" >
            <div className="staking-form box-showdown" style={{height: '350px'}}>
              <p>
                Sling Staking is a way for users to earn rewards on their SLING{" "}
                <br />
                tokens by locking them up for a set period of time. <br />
                By participating in Sling Staking, users can earn an annual{" "}
                <br />
                percentage rate (APR) of 25% on their staked tokens.
                <br /> This incentivizes users to hold onto their SLING tokens
                for a longer period of time
                <br /> and contributes to the overall stability of the SLING
                ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StakingPage;
