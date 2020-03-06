import React from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/auth";
import { Redirect } from "react-router-dom";
import Hunucma from "../../assets/images/hunucma.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
    backgroundImage: `url(${Hunucma})`,
    height: "80vh"
  },
  box: {
    marginTop: theme.spacing(1)
  },
  paper: {
    maxWidth: 360
  },
  buttonGroup: {
    width: "100%"
  }
}));

const Profile = props => {
  const classes = useStyles();

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
          <Card>
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
                    <Avatar alt={props.user.email} src={props.user.imageURL} />
                  </Box>
                  <Typography gutterBottom variant="subtitle1" component="h6">
                    {props.user.nombre}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <Box textAlign="center" m={1}>
                      {props.user.email}
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
                <Button
                  onClick={() => {
                    props.logoutUser();
                  }}
                  size="small"
                  color="primary"
                >
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
            state: { from: props.location }
          }}
        />
      )}
    </Box>
  );
};

const mapStateToProps = state => {
  return {
    loadUser: state.user.loadUser,
    user: state.user.user,
    isLogged: state.auth.hasToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => {
      dispatch(logoutUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
