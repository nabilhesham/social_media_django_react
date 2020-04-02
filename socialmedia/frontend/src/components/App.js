import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

// components imports
import Navbar from "./layout/Navbar";
import Dashboard from "./posts/Dashboard";

// store imports
import { Provider } from "react-redux";
import store from "../store";

// react-alert imports
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alerts from "./layout/Alerts";

// Alert Options
const alertOptions = {
  timeout: 5000,
  position: "top center"
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Fragment>
            <Navbar />
            <Alerts />
            <div className="container">
              <Dashboard />
            </div>
          </Fragment>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
