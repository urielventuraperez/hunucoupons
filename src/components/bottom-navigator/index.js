import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import SettingsIcon from "@material-ui/icons/Settings";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0
  },
}));

const BottomNavigator = () => {
  const classes = useStyles();
  let location = useLocation();
  const [value, setValue] = React.useState(location.pathname);

  return (
    <BottomNavigation
      value={value}
      onChange={ (event, newValue) => {
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
        label="Mis Cupones"
        value="/favorites-coupons"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/favorites-bussines"
        label="Mis lugares"
        value="/favorites-bussines"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/profile"
        label="Mi Perfil"
        value="/profile"
        icon={<SettingsIcon />}
      />
    </BottomNavigation>
  );
};

export default BottomNavigator;
