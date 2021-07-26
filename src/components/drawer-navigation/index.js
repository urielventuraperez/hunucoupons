import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import { NavLink } from "react-router-dom";
import { GetCategories } from "../../redux/actions/categories";
import { Typography } from "@material-ui/core";

const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.background.default,
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  icon: {
    width: 30,
    height: 30,
  },
  item: {
    color: theme.palette.secondary.main,
    fontSize: 15,
  },
}));

const DrawerNavigation = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const { categories } = props;

  const [itemSelect, setItemSelect] = useState("");

  const onSelected = (category) => {
    setItemSelect(category);
    setTimeout(() => {
      props.handleDrawerClose();
    }, 300);
  };

  useEffect(() => {
    categories();
  }, [categories]);

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={props.open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={props.handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <Close color="secondary" />
          ) : (
            <ArrowForwardIosIcon />
          )}
        </IconButton>
      </div>
      <List
      subheader={<ListSubheader>Categorías</ListSubheader>}
      >
        {props.viewCategories.map((category) => (
          <Link
            component={NavLink}
            to={`/categoria/${category.slug_nombre}`}
            variant="body1"
            underline="none"
            key={category.categoria_id}
          >
            <ListItem
              onClick={() => onSelected(category.slug_nombre)}
              selected={itemSelect === category.slug_nombre}
              button
            >
              {" "}
              <ListItemIcon>
                <Avatar
                  alt={`${category.nombre}`}
                  className={`${classes.item} ${classes.icon}`}
                  src={`data:image/jpeg;base64,${category.iconob64}`}
                />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body1" className={classes.item}>{category.nombre}</Typography>
                }
              />
            </ListItem>{" "}
          </Link>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

const mapStateToProps = (state) => {
  return {
    loadCategories: state.categories.loadCategories,
    viewCategories: state.categories.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categories: () => {
      dispatch(GetCategories());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerNavigation);
