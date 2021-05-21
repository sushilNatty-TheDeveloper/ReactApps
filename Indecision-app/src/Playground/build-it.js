"use strict";

console.log("App.js Running...!!!!");
const appRoot = document.getElementById("app");
 let app={
     states :"hide",
     texts:"Show Details",
     detailText:null
 };
const Onsubmit=()=>{
 if(app.states==="hide")
 {
  app.states="show";
  app.texts="hide details";
  app.detailText="showing details Baby...!!!";
     
 }
 else{
  app.states="hide";
  app.texts="show details";
  app.detailText=null;

 }
 render();

};
 const render=()=>{
let templet=(<div>
  <h3><b>Visibility Toggle</b></h3>


  
  <button id="Submit" onClick={Onsubmit}> {app.texts}</button>
  <p>{app.detailText}</p>
  </div>);

ReactDOM.render(templet, appRoot);
};
render();