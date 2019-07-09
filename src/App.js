import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import SideMenu from "./components/SideMenu";
import Home from "./pages/Home";
import Editor from "./pages/Editor";
import Validate from "./pages/Validate";
import Publish from "./pages/Publish";
import Deploy from "./pages/Deploy";
import Market from "./pages/Market";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Route path="/index" component={Index} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/home" component={Home} />
          <Route path="/editor" component={Editor} />
          <Route path="/validate" component={Validate} />
          <Route path="/publish" component={Publish} />
          <Route path="/deploy" component={Deploy} />
          <Route path="/market" component={Market} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
