import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(theme => ({
  icon: {
    position: "absolute",
    right: "2%",
    top: "15%",
    fontSize: "0.6rem"
  }
}));

const AddFavorite = () => {
  const classes = useStyles();

  return (
    <Tooltip title="Seguir" aria-label="add">
      <Fab
        variant={'round'}
        size={"medium"}
        className={classes.icon}
        color={"secondary"}
        aria-label="like"
      >
        <FavoriteIcon className={classes.extendedIcon} />
      </Fab>
    </Tooltip>
  );
};

export default AddFavorite;
