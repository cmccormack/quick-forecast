import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      width: "100%",
      marginTop: theme.spacing(3),
      overflowX: "auto",
    },
    table: {
      minWidth: 650,
    },
  })
);

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

export default props => {
  const classes = useStyles();

  const data = props.data.daily.data;

  data.forEach(
    row => (row.localeDate = new Date(row.time * 1000).toLocaleDateString())
  );

  console.log(data);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Moon Phase</TableCell>
            <TableCell align="right">Sunrise</TableCell>
            <TableCell align="right">Sunset</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.time}>
              <TableCell component="th" scope="row">
                {row.localeDate}
              </TableCell>
              <TableCell align="right">{getMoonPhase(row.moonPhase)}</TableCell>
              <TableCell align="right">
                {new Date(row.sunriseTime * 1000).toLocaleTimeString()}
              </TableCell>
              <TableCell align="right">
                {new Date(row.sunsetTime * 1000).toLocaleTimeString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
