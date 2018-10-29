import React from "react";

import "./GridRows.css";

function GridRows({ countries, sortBy }) {
  const tieBreaker = sortBy === "gold" ? "silver" : "gold";
  //the sort method is "in place" so we make a copy of the array to avoid mutating state
  let copy = [...countries];

  copy = countries.sort((a, b) => {
    if (sortBy === "total") {
      const aTotal = a.gold + a.silver + a.bronze;
      const bTotal = b.gold + b.silver + b.bronze;
      //sort by descending order
      //if two values are equal break by tiebreaker value (same below)
      return bTotal - aTotal || b[tieBreaker] - a[tieBreaker];
    }

    return b[sortBy] - a[sortBy] || b[tieBreaker] - a[tieBreaker];
  });

  //render only the top ten results
  copy = copy.slice(0, 10);

  const rows = copy.map((country, index) => {
    return (
      <div className="medals-widget-row" key={country.code}>
        <div className="row">{index + 1}</div>
        <div className={`row flags ${country.code}`} />
        <div className="row">{country.code}</div>
        <div className="row rankings">{country.gold}</div>
        <div className="row rankings">{country.silver}</div>
        <div className="row rankings">{country.bronze}</div>
        <div className="row rankings total">
          {country.gold + country.silver + country.bronze}
        </div>
      </div>
    );
  });
  return <div className="medal-widget-grid-rows">{rows}</div>;
}

export default GridRows;
