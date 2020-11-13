import React, { useEffect, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import SettingsIcon from "@material-ui/icons/Settings";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link, useLocation } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import { connect } from "react-redux";
import { getMyTotalFavCoupons } from "../../redux/actions/favorites";

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
  
  const {myTotalFav} = props;

  useEffect(()=>{
    myTotalFav();
  }, [myTotalFav])
  
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
              <Badge badgeContent={props.totalMyFav} color="secondary" max={50}>
                <FavoriteIcon />
              </Badge>
            }
          />
          {/* 
          <BottomNavigationAction
            component={Link}
            to="/favorites-bussines"
            label="Categorias"
            value="/favorites-bussines"
            icon={<CategoryIcon />}
          /> 
          */}
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

const mapDispatchToProps = dispatch => {
  return {
    myTotalFav: () => {
      dispatch(getMyTotalFavCoupons())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomNavigator);
