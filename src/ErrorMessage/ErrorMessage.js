import React from "react";

import "./ErrorMessage.css";
import errorImg from "../error.png";

function ErrorMessage({ error }) {
  if (!error) {
    return null;
  }

  return (
    <div className="error">
      <img src={errorImg} alt="http error" />
      <h1>{error}</h1>
    </div>
  );
}

export default ErrorMessage;
