import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

//EXPORT WIDGET TO CALL IN CLIENT:
// export const initialize = (medal, selector) => {
//   const container = document.getElementById(selector)
//     ? document.getElementById(selector)
//     : document.getElementById("root"); //this ternary is mostly for a practical test example
//   ReactDOM.render(<App medal={medal} />, container);
// };

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
