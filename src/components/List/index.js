import React from "react";
import styled from "styled-components";

const dataHeaders = [
  { name: "Date" },
  { name: "Moon Phase", width: "40%" },
  { name: "Sunrise" },
  { name: "Sunset" },
];

const getMoonPhase = value => {
  if ((value >= 0 && value < 0.125) || value == 1.0) {
    return "New Moon";
  }
  if (value >= 0.125 && value < 0.25) {
    return "Waxing Crescent";
  }
  if (value >= 0.25 && value < 0.375) {
    return "First Quarter";
  }
  if (value >= 0.375 && value < 0.5) {
    return "Waxing Gibbous";
  }
  if (value >= 0.5 && value < 0.55) {
    return "Full";
  }
  if (value >= 0.625 && value < 0.75) {
    return "Waning Gibbous";
  }
  if (value >= 0.75 && value < 0.875) {
    return "Last Quarter";
  }
  return "Waning Crescent";
};

const getDate = date => new Date(date * 1000);

const get24HourTime = date =>
  `${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes()
  ).padStart(2, "0")}`;

const getTime = date => {
  return get24HourTime(getDate(date));
};

const StyledRow = styled("div")`
  display: flex;
  flex-direction: row;
  background-color: #222;
  color: white;
  height: 20px;
  font-size: 12px;
  margin: 2px 0;
`;

const StyledTitleRow = styled(StyledRow)`
  background-color: #445;
  font-weight: 600;
`;

const StyledTable = styled("div")`
  background-color: #333;
  padding: 6px;
  display: flex;
  flex-direction: column;
`;

const StyledCol = styled("div")`
  margin: 3px;
  display: flex;
  flex-grow: 1;
  justify-content: ${props => props.align || "flex-start"};
  align-items: center;
  width: ${props => props.width || "20%"};
`;

const List = props => {
  const data = props.data.daily.data;

  data.forEach(
    row => (row.localeDate = new Date(row.time * 1000).toLocaleDateString())
  );

  console.log(data);
  return (
    <StyledTable className="data-table">
      <StyledTitleRow className="data-table-row">
        {dataHeaders.map(({ name, width }) => (
          <StyledCol
            key={name}
            className="data-table-col"
            align="center"
            width={width}
          >
            {name}
          </StyledCol>
        ))}
      </StyledTitleRow>
      {data.map((row, i) => (
        <StyledRow key={row.time} className="data-table-row" evenrow={i % 2}>
          <StyledCol className="data-table-col" align="center">
            {row.localeDate}
          </StyledCol>
          <StyledCol className="data-table-col" align="center" width="40%">
            {getMoonPhase(row.moonPhase)}
          </StyledCol>
          <StyledCol className="data-table-col" align="center">
            {getTime(row.sunriseTime)}
          </StyledCol>
          <StyledCol className="data-table-col" align="center">
            {getTime(row.sunsetTime)}
          </StyledCol>
        </StyledRow>
      ))}
    </StyledTable>
  );
};

export default List;
