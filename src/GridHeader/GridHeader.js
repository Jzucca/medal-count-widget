import React from "react";

import "./GridHeader.css";

class GridHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleColumnSort = this.handleColumnSort.bind(this);
  }

  handleColumnSort() {
    const medal = this.props.column;
    console.log("medal ", medal);
  }

  render() {
    return (
      <div
        className={`medal-stats-header ${this.props.colHeader}-col-header`}
      />
    );
  }
}

export default GridHeader;
