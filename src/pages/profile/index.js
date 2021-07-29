import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/auth";
import { changeThemeMode } from "../../redux/actions/theme";
import { Redirect } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { ACCESS_USER } from "../../environments";
import Hunucma1 from "../../assets/images/hunucma1.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    backgroundImage: `url(${Hunucma1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "80vh",
  },
  box: {
    marginTop: theme.spacing(1),
  },
  card: {
    backgroundColor: theme.palette.background.default
  },
  user: {
    color: theme.palette.primary.main
  },
  avatar: {
    width: 80,
    height: 80
  },  
  paper: {
    maxWidth: 360,
  },
  buttonGroup: {
    width: "100%",
  },
}));

const Profile = (props) => {
  const classes = useStyles();

  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(localStorage.getItem(ACCESS_USER)
    ? JSON.parse(localStorage.getItem(ACCESS_USER))
    : {})
  }, []);

  return (
    <Box
      className={classes.root}
      display="flex"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
    >
      {props.isLogged ? (
        <Paper className={classes.paper} elevation={5}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Box
                  className={classes.box}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  alignContent="center"
                  flex="2"
                >
                  <Box m={3}>
                    <Avatar className={classes.avatar} alt={user.email} src={user.imageURL} />
                  </Box>
                  <Typography className={classes.user} gutterBottom variant="subtitle1" component="h6">
                    {user.nombre}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="span"
                  >
                    <Box textAlign="center" m={1}>
                      {user.email}
                    </Box>
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <Box
                className={classes.buttonGroup}
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
              >
                <FormControlLabel
                  control={
                    <Switch
                      onChange={props.changeTheme}
                      checked={props.isDarkTheme ? true : false}
                    />
                  }
                  label="Modo oscuro"
                />
              </Box>
            </CardActions>
            <CardActions>
              <Box
                className={classes.buttonGroup}
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
              >
                <Button
                  onClick={() => {
                    props.logoutUser();
                  }}
                  size="small"
                  color="secondary"
                >
                  <ExitToAppIcon />
                  Cerrar sesión
                </Button>
              </Box>
            </CardActions>
          </Card>
        </Paper>
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      )}
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    loadUser: state.user.loadUser,
    isLogged: state.auth.hasToken,
    isDarkTheme: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => {
      dispatch(logoutUser());
    },
    changeTheme: () => {
      dispatch(changeThemeMode());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
