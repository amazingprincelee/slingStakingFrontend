import React from "react";
import { Switch, Route } from 'react-router-dom';
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import RewardCalc from "./components/RewardCalc";
import Footer from "./components/Footer";
import UniswapWidget from "./components/UniswapWidget";
import StakingPage from "./pages/StakingPage";

function App() {

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <div>
            <Header />
            <RewardCalc />
            <UniswapWidget />
          </div>
        </Route>
        <Route path="/StakingPage">
          <StakingPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
