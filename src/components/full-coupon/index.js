import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AddFavorite from "../add-favorite";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

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
    textTransform: 'uppercase',
    textAlign: "left",
    padding: theme.spacing(0),
    marginLeft: '1.3rem'
  },
  subtitle: {
    textShadow: "0px 2px 3px rgba(0,0,0,0.9)",
    color: theme.palette.text.light,
    padding: theme.spacing(0),
    marginLeft: '1.3rem'
  },
  button: {
    marginTop: theme.spacing(4),
    margin: theme.spacing(3)
  }
}));


const FullCoupon = (props) => {
  const classes = useStyles(props);
  return (
    <Grid
      className={`${classes.image} ${classes.transparency} ${classes.height}`}
      container
      direction="column"
      justify="flex-end"
      alignItems="flex-start"
      style={{
        backgroundImage:
          `url(${props.image})`
      }}
    >
      <Typography className={classes.title} variant="h4">
        {'50% de descuento'}
      </Typography>
      <Typography className={classes.title} variant="h5">
        {props.title}
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        {'Descripcion del cupon'}
      </Typography>
      <Typography className={classes.subtitle} variant="caption">
        {'Valido del 1 de abril al 20 de abril'}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        endIcon={<DeleteIcon/>}
      >
        Visitar tienda
      </Button>
      { props.showFavorite && <AddFavorite /> }
    </Grid>
  );
};

export default FullCoupon;
