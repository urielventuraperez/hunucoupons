import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SisalImage from "../../assets/images/sisal.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: 0
  },
  box: {
    height: "85vh",
    margin: 0,
    padding: 0,
    backgroundImage: `url(${SisalImage})`,
    backgroundSize: "cover"
  }
}));

const HeaderImage = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.box}
      >
        <Typography variant="h1" component="h2">
          TITLE
        </Typography>
      </Grid>
    </Fragment>
  );
};

export default HeaderImage;
