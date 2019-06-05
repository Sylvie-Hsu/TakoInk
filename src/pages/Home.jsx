import React, { Component } from "react";
import StatisticData from "../components/StatisticData";
import ContractList from "../components/ContractList";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <StatisticData />
        <ContractList />
      </div>
    );
  }
}

export default Home;
