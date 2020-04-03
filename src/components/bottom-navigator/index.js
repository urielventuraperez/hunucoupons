import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import SettingsIcon from "@material-ui/icons/Settings";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link, useLocation } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: '1',
    width: "100%",
    position: "fixed",
    bottom: 0
  }
}));

const BottomNavigator = props => {
  const classes = useStyles();
  let location = useLocation();
  const [value, setValue] = React.useState(location.pathname);

  return (
    <Fragment>
      {" "}
      {props.hasToken && (
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          className={classes.root}
        >
          <BottomNavigationAction
            component={Link}
            to="/"
            label="Inicio"
            value="/"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/favorites-coupons"
            label="Cupones"
            value="/favorites-coupons"
            icon={
              <Badge badgeContent={14} color="secondary" max={10}>
                <FavoriteIcon />
              </Badge>
            }
          />
          <BottomNavigationAction
            component={Link}
            to="/favorites-bussines"
            label="Comercios"
            value="/favorites-bussines"
            icon={
              <Badge badgeContent={4} max={10} color="error">
                <LocationOnIcon />
              </Badge>
            }
          />
          <BottomNavigationAction
            component={Link}
            to="/profile"
            label="Perfil"
            value="/profile"
            icon={<SettingsIcon />}
          />
        </BottomNavigation>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    hasToken: state.auth.hasToken
  };
};

export default connect(mapStateToProps)(BottomNavigator);
