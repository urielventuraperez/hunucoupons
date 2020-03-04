import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import SettingsIcon from "@material-ui/icons/Settings";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link, useLocation } from "react-router-dom";
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
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
  );
};

export default BottomNavigator;
