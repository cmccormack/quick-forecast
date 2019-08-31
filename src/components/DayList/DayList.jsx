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
    name: '"Feels Like" Temperature',
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

const StyledTitleRow = styled(Row)`
  background-color: #445;
  font-weight: 200;
  font-size: 1.1rem;
  height: 30px;
`;

const StyledList = styled("div")`
  background-color: #333;
  padding: 6px;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  .data-table-row:not(.data-table-header):nth-child(odd) {
    background-color: #2a2a2a;
  }
  width: ${props => props.width || "auto"};
`;

const DayList = ({ data }) => {
  console.log(data.currently);
  return (
    <StyledList className="data-table" width="400px;">
      <StyledTitleRow className="data-table-row data-table-header">
        <Col
          key={data.currently.time}
          className="data-table-col"
          align="center"
        >
          {new Date(data.currently.time * 1000).toDateString()}
        </Col>
      </StyledTitleRow>
      {Object.keys(data.currently).map(prop => (
        <Row key={prop} className="data-table-row">
          <Col className="data-table-col" align="flex-end">
            {currentNames[prop].name}
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
