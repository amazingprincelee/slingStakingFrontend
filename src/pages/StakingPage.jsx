import React, { useEffect, useState } from "react";
import "../stakingPage.css";
import { ethers } from "ethers";
import ABI from "../ABI";

//development

function StakingPage() {
  const [inputValue, setInputValue] = useState();
  const [currentAction, setCurrentAction] = useState(null);
  const [tokenBalance, setTokenBalance] = useState(0);
  const [stakingBalance, setStakingBalance] = useState(0.0);
  const [rewardBalance, setRewardBalance] = useState(0);
  const [contractName, setContractname] = useState("The name of project");

  // Web3 connection
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contractAddress = "0x9E9227070CF650Bc0b1d37eF67Cb10f814c8FB08";

  // The Contract object
  const contract = new ethers.Contract(contractAddress, ABI, signer);

  useEffect(() => {
    const connectWallet = async () => {
      await provider.send("eth_requestAccounts", []);
    };

    const getName = async () => {
      const dName = await contract.contractName();
      console.log(dName);
      setContractname(dName);
    };

    const getBalance = async () => {
      const balance = await contract.getTokenBalance({
        from: signer.getAddress(),
      });
      const balanceFormatted = ethers.utils.formatEther(balance);
      const balanceRounded = parseFloat(balanceFormatted).toFixed(2);
      setTokenBalance(balanceRounded);
    };

    const getStakingBalance = async () => {
      const stakedBalance = await contract.getStakingBalance();
      const stakedBalanceFormatted = ethers.utils.formatEther(stakedBalance);
      setStakingBalance(stakedBalanceFormatted);
    };

    const getRewardBalanceUi = async () => {
      const balanceOfReward = await contract.getRewardBalance();
      const rewardBalanceFormatted = ethers.utils.formatEther(balanceOfReward);
      const rewardRounded = parseFloat(rewardBalanceFormatted).toFixed(2);
      setRewardBalance(rewardRounded);
    };

    getName().catch(console.error);
    connectWallet().catch(console.error);
    getBalance().catch(console.error);
    getStakingBalance().catch(console.error);
    getRewardBalanceUi().catch(console.error);
  });

  // const handleClaimReward = async () => {
  //   const reward = await contract.claim();
  //   console.log(`Transaction hash: ${reward.hash}`);
  //   await reward.wait();
  //   const rewardBalance = await contract.getRewardBalance();
  //   console.log(`Reward balance: ${rewardBalance}`);
  // };

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
      <h1>{contractName}</h1>
      <div class="container mt-5">
        <div class="container text-center">
          <div class="row align-items-center">
            <div class="col-3-lg col-lg-6 border rounded bg-warning border-warning m-2 mx-auto">
              <p>Amount Staked</p>
              <p>{stakingBalance} SLING</p>
            </div>
            <div class="col-3-lg col-lg-6 border rounded bg-warning border-warning m-2 mx-auto">
              <p>Reward Balance</p>
              <p>{rewardBalance} SLING</p>
            </div>
            <div className="col-3-lg border rounded bg-warning border-warning m-2 mx-auto">
              <p>Token Balance</p>
              <p>{tokenBalance} SLING</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container ">
        <div class="row align-items-center">
          <div class="col">
            <div class="container text-center mb-5 ">
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
          <div class="col mb-5">
            <div
              className="transfer-form box-showdown"
              style={{ height: "350px" }}
            >
              {/* <div class="col-3-lg col-lg-6 border rounded bg-warning border-warning m-2 mx-auto">
                <p>{rewardBalance} SLING</p>
              </div>
              <button
                className="submit-button d-flex justify-content-center m-2 mx-auto"
                onClick={handleClaimReward}
              >
                CLAIM REWARD
              </button> */}

              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">STAKED</th>
                    <th scope="col">EARNED</th>
                    <th scope="col">ACTIVE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p style={{fontWeight: "bold"}}>5000000</p>
                      <p>90 Day Locked - APR 25%</p>
                    </td>
                    <td>2500000 of 2500000 rewards earned</td>
                    <td>WITHDRAW</td>
                  </tr>
                  <tr>
                    <td>
                      <p style={{fontWeight: "bold"}}>10000000</p>
                      <p>90 Day Locked - APR 25%</p>
      
                    </td>
                    <td>5000000 of 5000000 rewards earned</td>
                    <td>WITHDRAW</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StakingPage;
