"use strict";

console.log("App.js Running...!!!!");
var templet = React.createElement(
  "div",
  null,
  React.createElement(
    "h3",
    null,
    "React"
  ),
  React.createElement(
    "p",
    null,
    " My First App"
  )
);
var appRoot = document.getElementById("app");
ReactDOM.render(templet, appRoot);
