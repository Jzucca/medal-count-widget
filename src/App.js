import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import GridHeaders from "./GridHeader/GridHeaders";
import GridRows from "./GridRows/GridRows";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

const url =
  "https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json";

const gridHeaders = [
  { title: "rank" },
  { title: "flag" },
  { title: "country" },
  { medal: "gold" },
  { medal: "silver" },
  { medal: "bronze" },
  { title: "total" }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      selectedColumn: "gold",
      displayError: false
    };

    this.handleColumnSort = this.handleColumnSort.bind(this);
  }

  componentDidMount() {
    axios
      .get(url)
      .then(data => {
        this.setState({
          countries: this.state.countries.concat(data.data)
        });
      })
      .catch(err => {
        this.setState({ displayError: true });
      });
  }

  handleColumnSort(event) {
    const columnHeader = event.target.dataset.column;
    this.setState({
      selectedColumn: columnHeader
    });
  }

  render() {
    if (this.state.displayError) {
      return <ErrorMessage error={this.state.displayError} />;
    }

    return (
      <div className="medal-widget-main">
        <h1>Medal Count</h1>
        <div className="medal-widget-grid">
          <GridHeaders
            headers={gridHeaders}
            selected={this.state.selectedColumn}
            handleColumnClick={this.handleColumnSort}
          />
          <GridRows
            countries={this.state.countries}
            sortBy={this.state.selectedColumn}
          />
        </div>
      </div>
    );
  }
}

export default App;
