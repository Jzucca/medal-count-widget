import React from "react";

import "./GridHeaders.css";
import GridHeader from "./GridHeader";

function GridHeaders({ headers, handleColumnClick, selected }) {
  const gridHeaders = headers.map(headerVal => {
    return (
      <GridHeader
        key={headerVal}
        colHeader={headerVal}
        handleColSelect={handleColumnClick}
        selected={selected}
      />
    );
  });

  return <div className="medal-widget-grid-headers">{gridHeaders}</div>;
}

export default GridHeaders;
