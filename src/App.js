import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SideMenu from "./components/SideMenu";
import Home from "./pages/Home";
import Editor from "./pages/Editor";
import Validate from "./pages/Validate";
import Deploy from "./pages/Deploy";
import Market from "./pages/Market";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <div>
              <div>
                <SideMenu />
              </div>
              <div style={{ margin: "10px 10px 10px 160px" }}>
                {/* Only match one */}
                <Route exact path="/home" component={Home} />
                <Route path="/editor" component={Editor} />
                <Route path="/validate" component={Validate} />
                <Route path="/deploy" component={Deploy} />
                <Route path="/market" component={Market} />
              </div>
            </div>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
