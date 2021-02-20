import React from "react";
import Social from "./Social"


function Guida() {
  return (
    <div class="row">
      <div class="leftcolumn">
        <div class="card">
          <h2>Guida singola</h2>
          <h5>Sottotitolo per vantarsi</h5>
          <h5>Guida alla CdC punto 1</h5>
          <div class="fakeimg" style={{height: "200px"}}>
            immagine1
          </div>
          <h5>Guida alla CdC punto2</h5>
          <div class="fakeimg" style={{height: "200px"}}>
            immagine2
          </div>
          <h5>Guida alla CdC punto3</h5>
          <div class="fakeimg" style={{height: "200px"}}>
            immagine3
          </div>
          <h5>Guida alla CdC punto4</h5>
          <div class="fakeimg" style={{height: "200px"}}>
            immagine4
          </div>
          <h5>Eccetera...</h5>
        </div>
      </div>
      <Social />
    </div>
  );
}
export default Guida;
