import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import DraftsIcon from "@material-ui/icons/Drafts";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconoCuponesh from "../../assets/images/icono-cuponesh.png";
import Hunucma1 from "../../assets/images/hunucma1.jpg";
import { FACEBOOK_PROVIDER, GOOGLE_PROVIDER } from "../../environments";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit">
        Cuponesh
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: `url(${Hunucma1})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    border: 0,
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar
            className={classes.avatar}
            alt="Cuponesh"
            src={IconoCuponesh}
          />
          <Typography component="h1" variant="h5">
            {"¡Regístrate!"}
          </Typography>
          <Box mt={3} mb={3}>
            <Typography variant="body1">
              {"Elige tu red social favorita"}
            </Typography>
          </Box>
          <Box mt={3} mb={3}>
            <ButtonGroup
              variant="text"
              color="primary"
              aria-label="text primary button group"
            >
              <Button
                variant="contained"
                color="primary"
                startIcon={<FacebookIcon />}
                href={FACEBOOK_PROVIDER}
              >
                Facebook
              </Button>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<DraftsIcon />}
                href={GOOGLE_PROVIDER}
              >
                Gmail
              </Button>
            </ButtonGroup>
          </Box>
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}
