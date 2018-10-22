import React, { Component } from "react";
import "./App.css";

import GridHeader from "./GridHeader/GridHeader";

class App extends Component {
  render() {
    return (
      <div className="medal-widget-main">
        <h1>Medal Count</h1>
        <div className="medal-widget-stats">
          <div className="medal-widget-col-headers">
            <GridHeader colHeader={"gold"} />
            <GridHeader colHeader={"silver"} />
            <GridHeader colHeader={"bronze"} />
            <GridHeader colHeader={"total"} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
