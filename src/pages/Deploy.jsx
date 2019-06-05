import React, { Component } from "react";
import StepFlow from "../components/StepFlow";
import DeployForm from "../components/DeployForm";

class Deploy extends Component {
  state = {};
  render() {
    return (
      <div>
        <StepFlow />
        <DeployForm />
      </div>
    );
  }
}

export default Deploy;
