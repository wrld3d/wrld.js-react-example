/* WrldMap.js */

/* globals WrldIndoorControl */

// import the useEffect hook which we use to create the map once the element has mounted.
import { useEffect } from 'react';

// import wrlds.js
import Wrld from 'wrld.js';

import './WrldMap.css';

function WrldMap() {

  useEffect(() => {
    // Create the map once the 'map' element has mounted.
    const map = Wrld.map("map", "your_api_key_here", {
      center: [56.458598, -2.969868],
      indoorsEnabled: true
    });

    // Optionally use the WrldIndoorControl widget.
    const indoorControl = new WrldIndoorControl("wrld-indoor-control", map);

    return () => {
      // This will find the map element and remove it since there is currently no API point to destroy a map.
      const mapElement = document.getElementById("map");
      if (mapElement) {
        mapElement.childNodes.forEach((child) => {
          if (child.id.indexOf("wrld-map-container") === 0) {
            mapElement.removeChild(child);
          }
        });
      }
    };
  });
  
  return (
    <div className="map-container">
      <div id="wrld-indoor-control"/>
      <div id="map"/>
    </div>
  );
}

export default WrldMap;