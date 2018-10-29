import React from "react";

import "./GridHeader.css";

function GridHeader({ selected, handleColSelect, colHeader }) {
  const active =
    selected === colHeader.medal || selected === colHeader.title
      ? "selected"
      : "";
  const medalHeader = colHeader.medal ? colHeader.medal : null;
  const headerValue = colHeader.medal ? colHeader.medal : colHeader.title;
  const header = medalHeader ? "medal" : "total-header";

  return (
    <div className={`column-header ${active}`}>
      <div
        className={`${header} ${medalHeader}`}
        onClick={handleColSelect}
        data-column={headerValue}
      >
        {colHeader.title === "total" ? "Total" : null}
      </div>
    </div>
  );
}

export default GridHeader;
