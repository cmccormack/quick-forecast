import React from "react";
import { useState, useEffect } from "react";

import "./App.scss";
import WeekList from "../WeekList";
import DayList from "../DayList";
import "../../assets/images/moon.png";

const App = props => {
  const [loc, setLoc] = useState("");
  const [data, setData] = useState(props.data || undefined);

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      console.log("geolocation API not available.");
    }

    console.log("Calling browser location API...");
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;
      console.log(
        `Location api call successful. Latitude/Longitude: ${latitude}/${longitude}`
      );
      setLoc(`${latitude},${longitude}`);
    });
  }, []);

  useEffect(() => {
    if (!loc) {
      return;
    }
    fetch(`/api/forecast/${loc}`)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setData(json);
      });
  }, [loc]);
  return (
    <>
      <div id="title-wrapper">
        <img src="assets/images/moon.png" />
        <h1 id="title">Get Weather in your Area!</h1>
      </div>
      <form id="location-form">
        <div className="form-row">
          <label htmlFor="location-input">Enter Location:</label>
          <input type="text" id="location-input" disabled />
        </div>
      </form>
      {data && <WeekList data={data} />}
      {data && <DayList data={data} />}
    </>
  );
};

export default App;
