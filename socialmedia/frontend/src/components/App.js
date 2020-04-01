import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

// components imports
import Navbar from "./layout/Navbar";
import Dashboard from "./posts/Dashboard";

// store imports
import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Navbar />
          <div className="container">
            <Dashboard />
          </div>
        </Fragment>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
