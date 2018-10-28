import React from "react";

import "./GridHeader.css";

function GridHeader({ selected, handleColSelect, colHeader }) {
  //const active = selected === colHeader ? "selected" : "";
  const medalHeader = colHeader.medal ? colHeader.medal : null;
  const headerValue = colHeader.medal ? colHeader.medal : colHeader.title;
  const medal = medalHeader ? "medal" : null;

  return (
    <div className={`column-header`}>
      <div
        className={medal}
        onClick={handleColSelect}
        data-column={headerValue}
        style={{
          color: `${medalHeader}`,
          fontSize: "1.5em",
          textAlign: "center"
        }}
      >
        {colHeader.title === "total" ? "Total" : null}
      </div>
    </div>
  );
}

export default GridHeader;
