import React, { Component } from "react";
import DividePanel from "../components/DividePanel";
import ValidateReport from "../components/ValidateReport";
import SideMenu from "../components/SideMenu";

class Validate extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <SideMenu />
        </div>
        <div style={{ margin: "10px 10px 10px 160px" }}>
          <div>
            <DividePanel />
            <ValidateReport />
          </div>
        </div>
      </div>
    );
  }
}

export default Validate;
