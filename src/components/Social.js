import React from "react";

import facebook  from './icons/facebookresizet.png'
import twitter  from './icons/twitterresizet.png'
import linkedin  from './icons/linkedinresizet.png'
import telegram  from './icons/telegramresizet.png'
import instagram from './icons/instagramresizet.png' 

function Social() {
  return (
    <div class="rightcolumn">
      <div class="card">
        <h3>Seguici</h3>
        <img
          src = {facebook}
          alt="contatto facebook"
          title="faccialibro"
        />
        <img
          src= {twitter}
          alt="contatto twitter"
          title="birdo"
        />
        <img
          src= {linkedin}
          alt="contatto linkedin"
          title="inn"
        />
        <img
          src={telegram}
          alt="contatto telegram"
          title="telegrammo"
        />
        <img
          src={instagram}
          alt="contatto instagram"
          title="instagrammo"
        />
      </div>
    </div>
  );
}

export default Social;