import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import GridHeaders from "./GridHeaders/GridHeaders";
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
      selectedColumn: this.props.medal || "gold", //when we get props from initialzing the widget
      error: ""
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
        this.setState({
          error: err.response.status
        });
      });
  }

  handleColumnSort(event) {
    //using the data-* attribute to access which header is selected
    const columnHeader = event.target.dataset.column;
    this.setState({
      selectedColumn: columnHeader
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage error={this.state.error} />;
    }

    return (
      <div className="medal-widget-main">
        <h1>Medal Count</h1>
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
    );
  }
}

export default App;
