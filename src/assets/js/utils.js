import moment from "moment";

export const getDate = date => moment(date * 1000);

export const get24HourTime = date => getDate(date).format("HH:mm");

export const getTime = date => get24HourTime(date);

export const getMoonPhase = value => {
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
