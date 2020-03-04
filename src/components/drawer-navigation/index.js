import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from '@material-ui/core/Avatar';
import { Typography } from "@material-ui/core";
import { GetCategories } from '../../redux/actions/categories';

const drawerWidth = 240;

const useStyles = makeStyles({
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
    justifyContent: "flex-end"
  }
});

const DrawerNavigation = props => {
  const classes = useStyles();
  const theme = useTheme();
  
  const { categories } = props;

  useEffect(()=>{
    categories()
  },[categories]);

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={props.open}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={props.handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <Close color="primary" />
          ) : (
            <ArrowForwardIosIcon />
          )}
        </IconButton>
      </div>
      <List>
        {props.viewCategories.map((category) => (
          <ListItem button key={category.categoria_id}>
            <ListItemIcon>
            <Avatar alt="Remy Sharp" src={`data:image/jpeg;base64,${category.iconob64}`} />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body1">{category.nombre}</Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

const mapStateToProps = state => {
  return {
    loadCategories: state.categories.loadCategories,
    viewCategories: state.categories.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    categories: () => {
      dispatch(GetCategories())
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(DrawerNavigation);
