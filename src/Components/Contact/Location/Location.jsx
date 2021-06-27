import React from "react";
import "./Location.css";

import { content } from "../../../content/languages";

const Location = (props) => {
  let { language } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);
  return (
    <div className="location contact-item">
      <div class="gmap_canvas">
        <iframe
          title="google"
          width="600"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Seb%20Gourmet%20Traiteur%20Villartier%2073440%20Les%20Belleville%20France&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
        {/* <style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style> */}
        {/* <style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style> */}
      </div>
    </div>
  );
};

export default Location;
