import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SideMenu from "./components/SideMenu";
import Home from "./pages/Home";
import Editor from "./pages/Editor";
import Deploy from "./pages/Deploy";
import Market from "./pages/Market";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div>
            <div>
              <SideMenu />
            </div>
            <div style={{ margin: "10px 10px 10px 160px" }}>
              <Switch>
                {/* Only match one */}
                <Route exact path="/" component={Home} />
                <Route path="/editor" component={Editor} />
                <Route path="/deploy" component={Deploy} />
                <Route path="/market" component={Market} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
