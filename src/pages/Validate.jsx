import React, { Component } from "react";
import DividePanel from "../components/DividePanel";
import ValidateReport from "../components/ValidateReport";

class Validate extends Component {
  state = {};
  render() {
    return (
      <div>
        <DividePanel />
        <ValidateReport />
      </div>
    );
  }
}

export default Validate;
