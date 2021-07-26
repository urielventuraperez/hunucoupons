import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
      marginTop: 120
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Weather = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>xs=12 sm=6</Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>xs=12 sm=6</Paper>
      </Grid>
    </Grid>
  );
};

export default Weather;
