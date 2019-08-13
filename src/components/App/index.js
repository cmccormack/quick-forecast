import React from "react";
import { useState, useEffect } from "react";

import "./App.scss";
import "../../assets/images/react-logo.png";

const App = props => {
  const { loc, setLoc } = useState("");
  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("woot");
    } else {
      console.log("doh");
    }

    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;

      fetch(`/api/forecast/${latitude},${longitude}`)
        .then(res => res.json())
        .then(json => console.log(json));
    });
  }, []);
  return (
    <>
      <div id="title-wrapper">
        <img src="assets/images/react-logo.png" />
        <h1 id="title">Get Weather in your Area!</h1>
      </div>
      <form id="location-form">
        <div className="form-row">
          <label htmlfor="location-input">Enter Location:</label>
          <input type="text" id="location-input" />
        </div>
      </form>
    </>
  );
};

export default App;
