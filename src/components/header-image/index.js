import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
// import AddFavorite from "../add-favorite";
import ChipLegend from "../chips";

const useStyles = makeStyles((theme) => ({
  transparency: {
    backgroundColor: (props) => props.backgroundColor,
  },
  height: {
    height: (props) => props.height,
  },
  image: {
    marginTop: "25px",
    textAlign: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundBlendMode: "multiply",
  },
  title: {
    fontWeight: "600",
    textShadow: "0px 2px 3px rgba(0,0,0,0.4)",
    color: theme.palette.text.light,
    textTransform: "uppercase",
  },
  subtitle: {
    fontWeight: "300",
    textShadow: "0px 2px 3px rgba(0,0,0,0.2)",
    color: theme.palette.text.light,
    textTransform: "uppercase",
    margin: `${'1.1rem 0'}`
  }
}));

const HeaderImage = (props) => {
  const classes = useStyles(props);
  return (
    <Grid
      className={`${classes.image} ${classes.transparency} ${classes.height}`}
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    >
      <Typography className={classes.title} variant="h4">
        {props.title}
      </Typography>
      {props.subtitle && (
        <Typography className={classes.subtitle} variant="h6">
          {props.subtitle}
        </Typography>
      )}
      {props.action &&
        <Button href={props.redirect} color="primary" variant="contained">
          {props.action}
        </Button>
      }
      {/* props.isStore && <AddFavorite /> */}
      {props.showChip && <ChipLegend totalCoupons={props.totalCoupons} />}
    </Grid>
  );
};

export default HeaderImage;
