import React, { Component } from "react";
import StatisticData from "../components/StatisticData";
import ContractList from "../components/ContractList";
import SideMenu from "../components/SideMenu";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <SideMenu />
        </div>
        <div style={{ margin: "10px 10px 10px 160px" }}>
          <div>
            <StatisticData />
            <div class="row">
              <ContractList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
