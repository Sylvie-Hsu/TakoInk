import React, { Component } from "react";
import DocumentTitle from "react-document-title";
import Banner from "../components/Banner";
// import Introduction from "../components/Introduction";
import "../static/style";

class Index extends React.PureComponent {
  render() {
    return (
      <div className="home-page">
        <Banner key="banner" />
        {/* <Introduction key="page1" /> */}
        <DocumentTitle title="Tako - 智能合约在线服务平台" />
      </div>
    );
  }
}
export default Index;
