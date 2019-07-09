import React, { Component } from "react";
import PublishForm from "../components/PublishForm";
import StepFlow from "../components/StepFlow";
import SideMenu from "../components/SideMenu";

class Publish extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <SideMenu />
        </div>
        <div style={{ margin: "10px 10px 10px 160px" }}>
          <div>
            <StepFlow />
            <PublishForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Publish;
