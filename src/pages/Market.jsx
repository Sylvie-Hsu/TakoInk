import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import ContractMarket from "../components/ContractMarket";
import FeedBack from "../components/FeedBack";
import SideMenu from "../components/SideMenu";

class Market extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <SideMenu />
        </div>
        <div style={{ margin: "10px 10px 10px 160px" }}>
          <div>
            <SearchBar />
            <ContractMarket />
            {/* <FeedBack /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Market;
