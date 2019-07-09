import React, { Component } from "react";
import StepFlow from "../components/StepFlow";
import DeployForm from "../components/DeployForm";
import SideMenu from "../components/SideMenu";

class Deploy extends Component {
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
            <DeployForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Deploy;
