import React from "react";
import Social from "./Social"


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
        <Social />
      </div>
    </div>
  );
}
export default Home;
