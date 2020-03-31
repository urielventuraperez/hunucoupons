import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PhoneIcon from "@material-ui/icons/Phone";
import RoomIcon from "@material-ui/icons/Room";
import HeaderImage from "../../components/header-image";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  image: {
    height: "60vh",
    marginTop: "25px",
    textAlign: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    backgroundBlendMode: "multiply"
  },
  title: {
    fontWeight: "600",
    textShadow: "0px 2px 3px rgba(0,0,0,0.4)",
    color: theme.palette.text.light
  },
  subtitle: {
    fontWeight: "100",
    textAlign: "center"
  },
  paper: {
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.text.disabled}`,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Commerce = () => {
  const classes = useStyles();
  return (
    <div>
      <HeaderImage
        title={"Nombre del lugar"}
        height={"55vh"}
        backgroundColor={"rgba(0, 0, 0, 0.20)"}
        isStore={true}
      />
      <Box m={8}>
        <Typography className={classes.subtitle} color="secondary" variant="h6">
          Description
        </Typography>
      </Box>
      <Box>
        <Grid container justify="space-around">
          <Grid item xs={12} md={3}>
            <Paper elevation={0} className={classes.paper}>
              <AccessTimeIcon />
              <Typography color="textPrimary" variant="subtitle2">
                Horario
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper elevation={0} className={classes.paper}>
              <PhoneIcon />
              <Typography color="textPrimary" variant="subtitle2">
                Contacto
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper elevation={0} className={classes.paper}>
              <RoomIcon />
              <Typography color="textPrimary" variant="subtitle2">
                Ubicación
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Box m={8}>
          <Typography
            className={classes.subtitle}
            color="secondary"
            variant="h6"
          >
            Cupones
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Commerce;
