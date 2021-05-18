"use strict";

console.log("App.js Running...!!!!");
var templet=(<div>
  <h3>React</h3>
  <p> My First App</p>
  </div>);
var appRoot = document.getElementById("app");
ReactDOM.render(templet, appRoot);
