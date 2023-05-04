import "./App.css";
import Map from "./map/Map";
import Search from "./components/Search";
import { useState, useEffect } from "react";
import { useGetMapQuery } from "./redux/api/api";

function App() {
  const [coords, setCorrds] = useState({
    latitude: "",
    longitude: "",
  });
  const [display_name, setName] = useState("");
  const [address, setAddress] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      getCurrentCityName,
      error,
      options
    );
  });

  function error(err) {
    if (err.code === 1 || err.code === 2 || err.code === 3) {
      alert(err.message);
    } else {
      alert(err);
    }
  }

  const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
  };
  function getCurrentCityName(position) {
    // setCorrds({
    //   latitude: position.coords.latitude,
    //   longitude: position.coords.longitude,
    // });
  }

  // const data = useGetMapQuery(coords);
  console.log("in app");

  return (
    <div className="App" style={{ padding: "20px" }}>
      <Map coords={coords} dispaly_name={display_name} />
    </div>
  );
}

export default App;
