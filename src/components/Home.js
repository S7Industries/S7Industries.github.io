import React from "react";

function Home() {
  return (
    <div>
      <div class="row">
        <div class="leftcolumn">
          <div class="card">
            <h2>Home</h2>
            <div class="fakeimg" style={{ height: "200px" }}>
              Breve intro di presentazione
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
    </div>
  );
}
export default Home;
