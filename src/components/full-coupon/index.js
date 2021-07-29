import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import AddFavorite from "../add-favorite";
import Button from "@material-ui/core/Button";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { NavLink } from "react-router-dom";
import CouponBackground from "../../assets/images/coupon_background.jpg";

const useStyles = makeStyles((theme) => ({
  transparency: {
    backgroundColor: (props) => props.backgroundColor,
  },
  height: {
    height: (props) => props.height,
  },
  image: {
    marginTop: "25px",
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
    textAlign: "left",
    padding: theme.spacing(0),
    marginLeft: "1.3rem",
  },
  subtitle: {
    textShadow: "0px 2px 3px rgba(0,0,0,0.9)",
    color: theme.palette.text.light,
    padding: theme.spacing(0),
    marginLeft: "1.3rem",
  },
  button: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(5),
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const FullCoupon = (props) => {
  const classes = useStyles(props);
  return (
    <Grid
      className={`${classes.image} ${classes.transparency} ${classes.height}`}
      container
      direction="column"
      justifyContent="flex-end"
      alignItems="flex-start"
      style={{
        backgroundImage: props.image
          ? `url(${props.image})`
          : `url(${CouponBackground})`,
      }}
    >
      <Typography className={classes.title} variant="h4">
        {props.descuento}
        {"%"} {"de descuento"}
      </Typography>
      <Typography className={classes.title} variant="h5">
        {props.title}
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        {props.description}
      </Typography>
      <Typography className={classes.subtitle} variant="caption">
        {"Valido del"} {props.fechaInicial} {"al"} {props.fechaFinal}
      </Typography>
      <Box className={classes.button}>
      <Button
        variant="contained"
        color="primary"
        endIcon={<WhatsAppIcon />}
        href={`https://wa.me/${props.celular}/?text=Hola ${props.comercio}, en CUPONESH observé el cupon ${props.title} y estoy interesado en saber más, gracias.`}
        target="_blank"
      >
        Contacta por Whatsapp
      </Button>
      <Button
        component={NavLink}
        to={`/comercio/${props.slugComercio}`}
        variant="contained"
        color="primary"
        endIcon={<ArrowForwardIosIcon />}
      >
        Visitar comercio
      </Button>
      </Box>
      {props.showFavorite && <AddFavorite />}
    </Grid>
  );
};

export default FullCoupon;
