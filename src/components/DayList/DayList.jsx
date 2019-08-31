import React from "react";
import styled from "styled-components";

import Row from "../List/Row";
import Col from "../List/Col";

const currentNames = {
  time: { name: "Current Time", unit: "unixtime" },
  summary: { name: "Summary", unit: "string" },
  icon: { name: "Icon", unit: "string" },
  nearestStormDistance: { name: "Nearest Storm Distance", unit: "miles" },
  nearestStormBearing: { name: "Nearest Storm Bearing", unit: "degrees" },
  precipIntensity: { name: "Rain Intensity", unit: "inchesperhour" },
  precipProbability: { name: "Chance of Rain", unit: "percent" },
  temperature: { name: "Air Temperature", unit: "degreesfarenheit" },
  apparentTemperature: {
    name: '"Feels Like Temperature"',
    unit: "degreesfarenheit",
  },
  dewPoint: { name: "Dew Point", unit: "degreesfarenheit" },
  humidity: { name: "Humidity", unit: "percent" },
  pressure: { name: "Sea-level Air Pressure", unit: "millibars" },
  windSpeed: { name: "Wind Speed", unit: "milesperhour" },
  windGust: { name: "Wind Gust Speed", unit: "milesperhour" },
  windBearing: { name: "Wind Bearing from North", unit: "degrees" },
  cloudCover: { name: "Cloud Cover", unit: "percent" },
  uvIndex: { name: "UV Index", unit: "integer" },
  visibility: { name: "Visibility", unit: "miles" },
  ozone: { name: "Atmospheric Ozone Density", unit: "dobson" },
};

const StyledList = styled("div")`
  background-color: #333;
  padding: 6px;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;

const DayList = ({ data }) => {
  console.log(data.currently);
  return (
    <StyledList className="data-table">
      {Object.keys(data.currently).map(prop => (
        <Row className="data-table-row">
          <Col className="data-table-col" align="flex-end">
            {prop}
          </Col>
          <Col className="data-table-col" align="center">
            {data.currently[prop]}
          </Col>
        </Row>
      ))}
    </StyledList>
  );
};

export default DayList;
