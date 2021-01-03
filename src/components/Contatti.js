import React from "react";

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
      <div class="rightcolumn">
        <div class="card">
          <h3>Seguici</h3>
          <p>
            {" "}
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
          </p>
        </div>
      </div>
    </div>
  );
}
export default Contatti;
