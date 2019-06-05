import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import ContractMarket from "../components/ContractMarket";
import FeedBack from "../components/FeedBack";

class Market extends Component {
  state = {};
  render() {
    return (
      <div>
        <SearchBar />
        <ContractMarket />
        <FeedBack />
      </div>
    );
  }
}

export default Market;
