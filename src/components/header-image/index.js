import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// import AddFavorite from "../add-favorite";
import ChipLegend from "../chips";

const useStyles = makeStyles(theme => ({
  transparency: {
    backgroundColor: props => props.backgroundColor,
  },
  height: {
    height: props => props.height,
  },
  image: {
    marginTop: "25px",
    textAlign: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundBlendMode: 'multiply'
  },
  title: {
    fontWeight: "600",
    textShadow: "0px 2px 3px rgba(0,0,0,0.4)",
    color: theme.palette.text.light,
    textTransform: 'uppercase'
  },
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
        backgroundImage:
          `url(${props.image})`
      }}
    >
      <Typography className={classes.title} variant="h4">
        {props.title}
      </Typography>
    { /* props.isStore && <AddFavorite /> */ }
    { props.showChip && <ChipLegend totalCoupons={props.totalCoupons} /> }
    
    </Grid>
  );
};

export default HeaderImage;
