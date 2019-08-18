import React from "react";
import styled from "styled-components";

import moonEmojis from "../../assets/js/moonEmojis.json";
import { getDate, getTime, getMoonPhase } from "../../assets/js/utils";

import Row from "./Row";
import Col from "./Col";

const dataHeaders = [
  { name: "Date" },
  { name: "Moon Phase", width: "34%" },
  { name: "Sunrise" },
  { name: "Sunset" },
];

const StyledTitleRow = styled(Row)`
  background-color: #445;
  font-weight: 200;
  font-size: 1.1rem;
  height: 30px;
`;

const StyledList = styled("div")`
  background-color: #333;
  padding: 6px;
  display: flex;
  flex-direction: column;
`;

const List = props => {
  const data = props.data.daily.data;

  data.forEach(row => (row.localeDate = getDate(row.time)));

  return (
    <StyledList className="data-table">
      <StyledTitleRow className="data-table-row">
        {dataHeaders.map(({ name, width }) => (
          <Col
            key={name}
            className="data-table-col"
            align="center"
            width={width}
          >
            {name}
          </Col>
        ))}
      </StyledTitleRow>
      {data.map((row, i) => (
        <Row key={row.time} className="data-table-row">
          <Col className="data-table-col" align="center">
            {row.localeDate.format("MMM Do")}
          </Col>
          <Col
            className="data-table-col"
            align="center"
            title={getMoonPhase(row.moonPhase)}
            width="34%"
          >
            {moonEmojis[getMoonPhase(row.moonPhase)]}
          </Col>
          <Col className="data-table-col" align="center">
            {getTime(row.sunriseTime)}
          </Col>
          <Col className="data-table-col" align="center">
            {getTime(row.sunsetTime)}
          </Col>
        </Row>
      ))}
    </StyledList>
  );
};

export default List;
