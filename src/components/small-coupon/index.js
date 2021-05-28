import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CustomTooltip from "../../components/custom-tooltip";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Toast from "../toast";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import Zoom from "@material-ui/core/Zoom";
import { connect } from "react-redux";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { updateMyTotalFav } from "../../redux/actions/favorites";

const useStyles = makeStyles((theme) => ({
  card: {
    "&:hover, &:focus": {
      boxShadow: "0 4px 18px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.22)",
    },
    backgroundColor: theme.palette.background.paper,
    borderRadius: 0,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  date: {
    position: "absolute",
    float: "left",
    bottom: "0px",
    color: theme.palette.text.light,
    background: theme.palette.primary.dark,
    padding: `${theme.spacing(1)}px ${theme.spacing(3)}px`,
  },
  button: {
    textTransform: 'capitalize',
    padding: '0.3rem 1.4rem',
    fontSize: '0.9rem',
    margin: theme.spacing(2)
  },
  iconButton: {
    float: "right",
    marginRight: theme.spacing(1),
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    bottom: 22,
    backgroundColor: theme.palette.background.default,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.background.default,
      boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    },
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Coupon = (props) => {
  let isMyFav;

  props.myFav === "true" ? (isMyFav = true) : (isMyFav = false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [fav, setFavorite] = React.useState(isMyFav);

  const [makeZoom, setMakeZoom] = React.useState(false);

  const formatDate = (date) => {
    let newDate = new Date(date);
    let event = new Date(
      Date.UTC(
        newDate.getFullYear(),
        newDate.getMonth(),
        newDate.getUTCDate(),
        newDate.getUTCHours(),
        0,
        0
      )
    );
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return event.toLocaleDateString("es-MX", options);
  };

  useEffect(() => {
    setFavorite(fav);
    setTimeout(() => {
      setMakeZoom(true);
    }, 500);
  }, [fav]);

  const addToFavorite = () => {
    setOpenSnackbar(true);
    props.updateTotalFav(props.slug);
    setFavorite(!fav);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const toastMessage = (commerce, isMyFav) => {
    let message;
    isMyFav
      ? (message = `${commerce} se ha añadido a tus favoritos`)
      : (message = `${commerce} se ha eliminado de tus favoritos`);
    return message;
  };

  const classes = useStyles();
  return (
    <Zoom in={makeZoom} style={{ transitionDelay: makeZoom ? "50ms" : "0ms" }}>
      <Paper elevation={6} className={classes.card}>
        <CardActionArea>
          <Link href={`/cupon/${props.slug}`}>
            <CardMedia
              className={classes.media}
              image={props.media}
              title={`${props.titleName} - ${props.empresa}`}
            />
          </Link>
        </CardActionArea>
        <CustomTooltip title="Mis favoritos">
            <IconButton
              className={classes.iconButton}
              color={fav ? "primary" : "default"}
              aria-label="Agrega a tus favoritos"
              onClick={addToFavorite}
            >
              <FavoriteIcon />
            </IconButton>
          </CustomTooltip>
        <CardHeader
          avatar={
            <CustomTooltip title={props.empresa}>
              <Avatar
                component={NavLink}
                to={`/comercio/${props.slugEmpresa}`}
                aria-label="recipe"
                className={classes.avatar}
                src={props.logo}
              />
            </CustomTooltip>
          }
          title={
            <Typography variant="subtitle1" color="textPrimary">
              {props.titleName}
            </Typography>
          }
          subheader={
            <Typography variant="caption" color="textSecondary">
              Válido hasta el {formatDate(props.fechaFinal)}
            </Typography>
          }
        />
        {props.token && (
          <CardActions disableSpacing={true}>
            <CustomTooltip title="Ver el cupón">
              <Button
                color="primary"
                variant="contained"
                disableElevation
                component={NavLink}
                to={`/cupon/${props.slug}`}
                className={classes.button}
              >
                Ver
              </Button>
            </CustomTooltip>
            <CustomTooltip title="Solicitar más información">
              <Button
                color="primary"
                disableElevation
                className={classes.button}
                startIcon={<WhatsAppIcon />}
                href={`https://wa.me/9994492079/?text=Hola ${props.empresa}, en CUPONESH observé el cupon ${props.titleName} y estoy interesado en saber más, gracias.`}
                target="_blank"
              >
                Contactar
              </Button>
            </CustomTooltip>
            <Toast
              openSnackbar={openSnackbar}
              handleCloseSnackbar={handleCloseSnackbar}
              toastMessage={toastMessage(props.titleName, fav)}
            />
          </CardActions>
        )}
      </Paper>
    </Zoom>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTotalFav: (slugCoupon) => {
      dispatch(updateMyTotalFav(slugCoupon));
    },
  };
};

export default connect(null, mapDispatchToProps)(Coupon);
