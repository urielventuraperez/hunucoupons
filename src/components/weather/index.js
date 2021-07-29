import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  API_WEATHER,
  ICONS_API_WEATHER,
  KEY_API_WEATHER,
  LAT_API_WEATHER,
  LON_API_WEATHER,
  WIDGET_WEATHER
} from "../../../src/environments";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: 80,
    padding: 30,
    backgroundColor: 'transparent',
    textAlign: "center",
  },
  paper: {
    padding: 40
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    display: "flex",
    color: "white",
    width: 520,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  image: {
    width: '100%',
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  icon: {
    margin: "0 auto",
    height: 70,
    width: 70,
  },
}));

const Weather = () => {
  const classes = useStyles();

  const [weather, setWeather] = useState({
    name: "Hunucmá",
    icon: "01d",
    description: "Soleado",
    temp: "33",
  });

  useEffect(() => {
    async function getWeather() {
      await fetch(
        `${API_WEATHER}/weather?lat=${LAT_API_WEATHER}&lon=${LON_API_WEATHER}&lang=sp&units=metric&appid=${KEY_API_WEATHER}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeather({
            name: data.name,
            icon: data.weather[0].icon,
            description: data.weather[0].description,
            temp: data.main.temp,
          });
        });
    }
    if(WIDGET_WEATHER) { getWeather() };
  }, []);

  return (
    <Grid container className={classes.root}>
      <Grid className={classes.center} item md={6} xs={12}>
        <Paper className={classes.paper}>
          <Typography variant="subtitle2">
            {" "}
            El clima en nuestra ciudad{" "}
          </Typography>
          <Typography color="primary" variant="subtitle1">
            {weather.name}
          </Typography>
          <Typography variant="caption">{weather.description}</Typography>
          <Avatar
            className={classes.icon}
            alt={weather.description}
            src={`${ICONS_API_WEATHER}${weather.icon}@2x.png`}
          />
          <Typography variant="caption">{weather.temp}° C</Typography>
        </Paper>
      </Grid>
      <Grid className={classes.grid} item md={6} xs={12}>
        <Typography variant="h6">
          {" "}
          Encuentra y corre por lo que tu cupón favorito ofrece.{" "}
        </Typography>
        <img alt="Cuponesh" className={classes.image} src="/cuponesh_navigation.png" />
      </Grid>
    </Grid>
  );
};

export default Weather;
