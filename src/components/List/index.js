import React from "react";
import styled from "styled-components";
import moment from "moment";

const dataHeaders = [
  { name: "Date" },
  { name: "Moon Phase", width: "34%" },
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
  if (value >= 0.55 && value < 0.75) {
    return "Waning Gibbous";
  }
  if (value >= 0.75 && value < 0.875) {
    return "Last Quarter";
  }
  return "Waning Crescent";
};

const moonEmojis = {
  "New Moon": "🌑",
  "Waxing Crescent": "🌒",
  "First Quarter": "🌓",
  "Waxing Gibbous": "🌔",
  Full: "🌕",
  "Waning Gibbous": "🌖",
  "Last Quarter": "🌗",
  "Waning Crescent": "🌘",
};

const getDate = date => moment(date * 1000);

const get24HourTime = date => getDate(date).format("HH:mm");

const getTime = date => get24HourTime(date);

const StyledRow = styled("div")`
  display: flex;
  flex-direction: row;
  background-color: #222;
  color: white;
  height: 2.4rem;
  font-size: 1rem;
  margin: 2px 0;
  word-wrap: break-word;
`;

const StyledTitleRow = styled(StyledRow)`
  background-color: #445;
  font-weight: 200;
  font-size: 1.1rem;
  height: 30px;
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
  width: ${props => props.width || "22%"};
`;

const List = props => {
  const data = props.data.daily.data;

  data.forEach(row => (row.localeDate = getDate(row.time)));

  console.log(moment(data[0].time * 1000).format());

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
        <StyledRow key={row.time} className="data-table-row">
          <StyledCol className="data-table-col" align="center">
            {row.localeDate.format("MMM Do")}
          </StyledCol>
          <StyledCol
            className="data-table-col"
            align="center"
            title={getMoonPhase(row.moonPhase)}
            width="34%"
          >
            {moonEmojis[getMoonPhase(row.moonPhase)]}
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
