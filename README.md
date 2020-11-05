<a href="https://www.wrld3d.com/">
    <img src="https://cdn2.wrld3d.com/wp-content/uploads/2017/04/WRLD_Blue.png" align="right" height="80px" />
</a>

# wrld.js in React

This is an example of how [wrld.js](https://github.com/wrld3d/wrld.js) can be used in a [React](https://reactjs.org/) app. For simplicity this example has been created using [Create React App](https://github.com/facebook/create-react-app).

### Requirements

*   [Node.js](https://nodejs.org/en/)
*   npm (installed with Node.js)
*   A [WRLD API key](https://accounts.wrld3d.com/#/tab-keys) which can be obtained by signing up for a free account at [wrld3d.com](https://wrld3d.com)

## Runing the example

1.  From within the [_example_](/example) directory, run:

    ```sh
    npm install
    ```

1.  Replace [`"your_api_key_here"`](/example/src/WrldMap.js#L17) with your [WRLD API key](https://accounts.wrld3d.com/#/tab-keys).

1.  Then run:
    ```sh
    npm start
    ```
1.  Now go to [http://localhost:3000](http://localhost:3000)


See the generated [README](/example/README.md) for more info.

## Setting up your own project using Create React App

#### Create your react app

In a new directory where your project will be contained, run:

```sh
npm init react-app <project-name-here>
```

#### Install wrld.js

```sh
npm install --save wrld.js
```

#### Make some changes

Create the file [`src/WrldMap.js`](/example/src/WrldMap.js)

Don't forget to insert your [WRLD API key](https://accounts.wrld3d.com/#/tab-keys).

```js
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
```

Create the file [`src/WrldMap.css`](/example/src/WrldMap.css)

```css
/* WrldMap.css */

.map-container {
  margin: auto;
  position: relative;
  width: 600px;
  height: 400px;
}

#map {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

#wrld-indoor-control {
  position: absolute;
  top: 20px;
  right: 20px;
  bottom: 40px;
}
```

Update the file [`src/App.js`](/example/src/App.js)

```js
/* App.js */

import WrldMap from "./WrldMap";

function App() {
  
  return (
    <WrldMap/>
  );
}

export default App;
```

Remove the file [`src/App.css`] unless you plan to use it later.


Update [`public/index.html`](/example/public/index.html)

```html
<!-- Add this stylesheet to the head -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.1/leaflet.css" rel="stylesheet"/>

<!-- Add this stylesheet and these scripts to the head if you wish to use the WrldIndoorControl widget -->
<link href="https://cdn-webgl.wrld3d.com/wrldjs/addons/resources/latest/css/wrld.css" rel="stylesheet"/>
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"></script>
<script src="https://cdn-webgl.wrld3d.com/wrldjs/addons/indoor_control/latest/indoor_control.js"></script>
```

#### Running the app

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## License

This example is released under the Simplified BSD License. See [LICENSE.md](LICENSE.md) for details.
