import React from "react";
import Social from "./Social"


function Contatti() {
  return (
    <div class="row">
      <div class="leftcolumn">
        <div class="card">
          <h2>Contattaci</h2>
          <h5>Sottotitolo per vantarsi e form</h5>
          <div class="fakeimg" style={{ height: "200px" }}>
            Form
          </div>
          <p>Altre cose...</p>
          <p>
            {" "}
            Sunt in culpa qui officia deserunt mollit anim id est laborum
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.{" "}
          </p>
        </div>
      </div>
      <Social />
    </div>
  );
}
export default Contatti;
