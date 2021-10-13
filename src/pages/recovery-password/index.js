import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import IconoCuponesh from "../../assets/images/icono-cuponesh.png";
import Hunucma1 from "../../assets/images/hunucma-city-cuponesh.jpg";
import UpdatePassword from "../../components/update-password-form";
import Fade from '@material-ui/core/Fade';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit">Cuponesh</Link> {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${Hunucma1})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "transparent",
    border: 0,
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const RecoveryPassword = (props) => {
  const classes = useStyles();

  const tokenRecoveryPassword = props.match.params.token;
  
  const [ effect, setEffect ] = useState(false);

  React.useEffect(() => {
    setEffect(true);
  }, []);

  return (
    <Fade in={effect} timeout={1500}>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <img
              className={classes.avatar}
              alt="Cuponesh"
              src={IconoCuponesh}
            />
            <Typography variant="subtitle1">{"Cuponesh"}</Typography>
            <Typography variant="subtitle2">{"Recupera tu contraseña"}</Typography>
            <UpdatePassword token={tokenRecoveryPassword} />
            <Box mt={5}>
              <Copyright />
            </Box>
          </div>
        </Grid>
      </Grid>
    </Fade>
  );
}

export default RecoveryPassword;