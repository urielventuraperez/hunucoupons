import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import Avatar from "@material-ui/core/Avatar";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DrawerNavigator from "../drawer-navigation";
import Logo from "../../assets/images/isotipo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  logo: {
    width: "120px"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  appBar: {
    background: theme.palette.background.default,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  hide: {
    display: "none"
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  username: {
    color: theme.palette.text.secondary
  },
  bigAvatar: {
    margin: 8,
    width: 50,
    height: 50
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired
};

const TopNavigator = props => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              edge="start"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.hide)}
              aria-label="open drawer"
            >
              <MenuRoundedIcon color="action" />
            </IconButton>
            <Link to="/">
              <img className={classes.logo} src={Logo} alt="" />
            </Link>
            <div className={classes.grow} />
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <Link to="/profile">
                  { props.isLogged ? (
                    <Avatar
                      alt={props.userProfile.nombre}
                      src={props.userProfile.imageURL}
                      className={classes.bigAvatar}
                    />
                  ) : (
                    <Avatar
                      alt="Inicia sesión"
                      className={classes.bigAvatar}
                    ><AccountCircleIcon />
                    </Avatar>
                  )}
                </Link>
              </IconButton>
            </div>
          </Toolbar>
          <DrawerNavigator open={open} handleDrawerClose={handleDrawerClose} />
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    isLogged: state.auth.hasToken,
    userProfile: state.user.user
  };
};

export default connect(mapStateToProps, null)(TopNavigator);
