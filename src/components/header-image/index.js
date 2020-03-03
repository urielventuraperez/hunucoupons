import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Image from "../../assets/images/first-section.png";

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: 0
  },
  box: {
    height: "85vh",
    margin: 0,
    padding: 0,
    backgroundImage: `url(${Image})`,
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
        <Typography variant="h4" component="h2">
          Las mejores promociones en Hunucmá
        </Typography>
      </Grid>
    </Fragment>
  );
};

export default HeaderImage;
