import React from "react";

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
      <div class="rightcolumn">
        <div class="card">
          <h3>Seguici</h3>
          <img
            src="icons/facebookresizet.png"
            alt="contatto facebook"
            title="faccialibro"
          />
          <img
            src="icons/twitterresizet.png"
            alt="contatto twitter"
            title="birdo"
          />
          <img
            src="icons/linkedinresizet.png"
            alt="contatto linkedin"
            title="inn"
          />
          <img
            src="icons/telegramresizet.png"
            alt="contatto telegram"
            title="telegrammo"
          />
          <img
            src="icons/instagramresizet.png"
            alt="contatto instagram"
            title="instagrammo"
          />
        </div>
      </div>
    </div>
  );
}
export default About;
