import React from "react";

import "./GridRows.css";

function GridRows({ countries }) {
  const rows = countries.map((country, index) => {
    return (
      <div className="medals-widget-row">
        <div className="row">{index}</div>
        <div className="row">flag</div>
        <div className="row">{country.code}</div>
        <div className="row totals">{country.gold}</div>
        <div className="row totals">{country.silver}</div>
        <div className="row totals">{country.bronze}</div>
        <div className="row totals">100</div>
      </div>
    );
  });
  return <div className="medal-widget-grid-rows">{rows}</div>;
}

export default GridRows;
