import React, { Component } from "react";
import ReactDOM from "react-dom";

class Editor extends Component {
  constructor() {
    super();
    this.state = {
      iFrameHeight: "1000px"
    };
  }
  render() {
    return (
      <iframe
        style={{
          width: "100%",
          height: this.state.iFrameHeight,
          overflow: "visible"
        }}
        ref="iframe"
        src="./local.html"
        width="100%"
        height={this.state.iFrameHeight}
        scrolling="no"
        frameBorder="0"
      />
    );
  }
}

export default Editor;
