import React from "react";
import { useState, useEffect } from "react";

import "./App.scss";
import Table from "../Table";
import "../../assets/images/react-logo.png";

const App = props => {
  const [loc, setLoc] = useState("");
  const [data, setData] = useState(props.data || undefined);

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      console.log("geolocation API not available.");
    }

    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;
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
        <img src="assets/images/react-logo.png" />
        <h1 id="title">Get Weather in your Area!</h1>
      </div>
      <form id="location-form">
        <div className="form-row">
          <label htmlFor="location-input">Enter Location:</label>
          <input type="text" id="location-input" />
        </div>
      </form>
      {data && <Table data={data} />}
    </>
  );
};

export default App;

// apparentTemperatureHigh: 83.66
// apparentTemperatureHighTime: 1565740800
// apparentTemperatureLow: 55.62
// apparentTemperatureLowTime: 1565784000
// apparentTemperatureMax: 83.66
// apparentTemperatureMaxTime: 1565740800
// apparentTemperatureMin: 52.17
// apparentTemperatureMinTime: 1565701200
// cloudCover: 0.01
// dewPoint: 32.41
// humidity: 0.28
// icon: "clear-day"
// moonPhase: 0.46
// ozone: 280.6
// precipIntensity: 0.0001
// precipIntensityMax: 0.001
// precipIntensityMaxTime: 1565766000
// precipProbability: 0.06
// precipType: "rain"
// pressure: 1017.66
// summary: "Clear throughout the day."
// sunriseTime: 1565700385
// sunsetTime: 1565749172
// temperatureHigh: 83.66
// temperatureHighTime: 1565740800
// temperatureLow: 55.62
// temperatureLowTime: 1565784000
// temperatureMax: 83.66
// temperatureMaxTime: 1565740800
// temperatureMin: 52.17
// temperatureMinTime: 1565701200
// time: 1565679600
// uvIndex: 12
// uvIndexTime: 1565726400
// visibility: 9.893
// windBearing: 260
// windGust: 12.92
// windGustTime: 1565730000
// windSpeed: 4.17
