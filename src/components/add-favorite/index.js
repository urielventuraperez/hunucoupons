import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CustomTooltip from "../../components/custom-tooltip";

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
    <CustomTooltip title="Seguir" aria-label="add">
      <Fab
        variant={'round'}
        size={"medium"}
        className={classes.icon}
        color={"secondary"}
        aria-label="like"
      >
        <FavoriteIcon className={classes.extendedIcon} />
      </Fab>
    </CustomTooltip>
  );
};

export default AddFavorite;
