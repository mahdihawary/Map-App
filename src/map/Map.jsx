import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import React from "react";
import "leaflet/dist/leaflet.css";

export default function Map({ coords, display_name }) {
  const { latitude, longitude } = coords;
  console.log(coords);

  function MapView() {
    let map = useMap();
    map.setView([latitude, longitude], map.getZoom());
    return null;
  }

  return (
    <MapContainer
      style={{ height: "50vh", width: "50vw", margin: "auto" }}
      classsName="map"
      center={[latitude, longitude]}
      zoom={10}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> 
        contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapView />
    </MapContainer>
  );
}
