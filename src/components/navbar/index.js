import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import DrawerNavigator from "../drawer-navigation";
import Logo from "../../assets/images/isotipo.png";
import ProfileImage from "../profile-image";
import { Link, useLocation } from "react-router-dom";

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
  icon: {
    color: theme.palette.text.primary
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
  let location = useLocation();
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
      {location.pathname !== "/login" && (
        <div>
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
                  <MenuRoundedIcon className={classes.icon} />
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
                    <ProfileImage />
                  </IconButton>
                </div>
              </Toolbar>
              <DrawerNavigator
                open={open}
                handleDrawerClose={handleDrawerClose}
              />
            </AppBar>
          </ElevationScroll>
          <Toolbar />
        </div>
      )}
    </React.Fragment>
  );
};

export default TopNavigator;
