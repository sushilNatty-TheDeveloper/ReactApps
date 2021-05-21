"use strict";

console.log("App.js Running...!!!!");
var templet=(<div>
  <h3>React</h3>
  <p> My First App..configured to Git</p>

  <input type="text" name="usernametxt" />
  <br></br>
  <input type="password" name="passwordtxt"/>
  <br></br>
  <button id="Submit"> Submits</button>
  </div>);
var appRoot = document.getElementById("app");
ReactDOM.render(templet, appRoot);
