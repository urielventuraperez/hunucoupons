import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import SettingsIcon from "@material-ui/icons/Settings";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link, useLocation } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import Box from '@material-ui/core/Box';
import { connect } from "react-redux";
import { getMyTotalFavCoupons } from "../../redux/actions/favorites";

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: '1',
    width: "70%",
    position: "fixed",
    bottom: 15,
    backgroundColor: theme.palette.background.default,
    boxShadow: "0 1px 5px rgb(0 0 0 / 15%), 0 0px 0px rgb(0 0 0 / 20%)",
    borderRadius: 50,
  },
  item: {
    color: theme.palette.text.disabled,
    maxWidth: 'initial',
    '&$selected': {
      borderRadius: 50,
      color: theme.palette.primary.dark,
      backgroundColor: theme.palette.secondary.light,
    },
  },
  selected:{}
}));

const BottomNavigator = props => {
  const classes = useStyles();
  let location = useLocation();
  const [value, setValue] = React.useState(location.pathname);
  
  const {myTotalFav} = props;

  useEffect(()=>{
    if(props.hasToken)
      myTotalFav();
  }, [myTotalFav])
  
  return (
    <Box display="flex" justifyContent="center">
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
            classes={{
              root: classes.item,
              selected: classes.selected
            }}
          />
          <BottomNavigationAction
            component={Link}
            to="/cupones-favoritos"
            label="Favoritos"
            value="/cupones-favoritos"
            icon={
              <Badge badgeContent={props.totalMyFav} color="primary" max={50}>
                <FavoriteIcon />
              </Badge>
            }
            classes={{
              root: classes.item,
              selected: classes.selected
            }}
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
            classes={{
              root: classes.item,
              selected: classes.selected
            }}
          />
        </BottomNavigation>
      )}
    </Box>
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
