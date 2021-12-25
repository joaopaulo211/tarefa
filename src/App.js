import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
var data = require('./frontend_data_gps.json');


export default function App() {
  const [viewport, setViewport] = useState({
    longitude: -46.28054,
    latitude: -23.963214,
    width: '100vw',
    height: '100vh',
    zoom: 10
  });

  return <div>
    <ReactMapGL {...viewport} mapboxApiAccessToken="pk.eyJ1Ijoic2d0YnJvdGhlciIsImEiOiJja3hjYXpza3QxbnYwMnByeTluaDI5bjlzIn0.0tEDXbV1vIAlYGbcczfbUg"
      mapStyle={"mapbox://styles/sgtbrother/ckxccm1su205m14o4mxl5jm2n"}
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
    >
      {data.courses.map((start) => (
        <Marker key={start.gps[0]}
          longitude={start.gps[0, 1, 2, 3, 4].longitude}
          latitude={start.gps[0, 1, 2, 3, 4].latitude}>
          <div><strong>ponto</strong></div>
        </Marker>
        
      ))}
    </ReactMapGL>
  </div>;
}