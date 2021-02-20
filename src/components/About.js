import React from "react";
import Social from "./Social"

function About() {
  return (
    <div class="row">
      <div class="leftcolumn">
        <div class="card">
          <h2>Chi siamo</h2>
          <h5>Sottotitolo per vantarsi e data</h5>
          <h5>Contatto 1</h5>
          <div class="fakeimg" style={{ height: "100px", width: "100px" }}>
            Foto
          </div>
          <h5>Contatto 2</h5>
          <div class="fakeimg" style={{ height: "100px", width: "100px" }}>
            Foto
          </div>
        </div>
      </div>
      <Social />
    </div>
  );
}
export default About;
