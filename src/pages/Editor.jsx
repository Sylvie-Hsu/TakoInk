import React, { Component } from "react";
import ReactDOM from "react-dom";

class Editor1 extends Component {
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

const Editor = () => (
  <iframe
    src="https://zju-incas.github.io/chaincodedesigner/"
    style={{ width: "100%", height: "780px" }}
    scrolling="no"
    border="0"
    frameBorder="no"
    framespacing="0"
    allowFullScreen="true"
  />
);

export default Editor;
