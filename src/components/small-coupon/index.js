import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Link from '@material-ui/core/Link';
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Toast from "../toast";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import Zoom from "@material-ui/core/Zoom";
import { connect } from 'react-redux';
import { updateMyTotalFav } from "../../redux/actions/favorites";

const useStyles = makeStyles((theme) => ({
  card: {
    "&:hover, &:focus": {
      boxShadow: "0 4px 18px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.22)", 
    },
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
  iconButton: {
    marginLeft: "auto",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Coupon = (props) => {
  let isMyFav;
  props.myFav === 'true' ? isMyFav = true : isMyFav = false;
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [ fav, setFavorite ] = React.useState(isMyFav);
 
  const [makeZoom, setMakeZoom] = React.useState(false);

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
    isMyFav ? message = `${commerce} se añadio a tus favoritos` : message = `${commerce} se elimino de tus favoritos`;
    return message; 
  }

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
          <Typography
            variant="caption"
            color="textSecondary"
            className={classes.date}
          >
            Termina el {props.fechaFinal}
          </Typography>
        </CardActionArea>
        <CardHeader
          avatar={
            <Avatar
              component={NavLink}
              to={`/comercio/${props.slugEmpresa}`}
              aria-label="recipe"
              className={classes.avatar}
              src={props.logo}
            />
          }
          title={
            <Typography variant="subtitle1" color="textPrimary">
              {props.titleName}
            </Typography>
          }
        />
        {props.token && (
          <CardActions disableSpacing={true}>
            <Tooltip title="Ver el cupón">
            <Button
              color="secondary"
              component={NavLink}
              to={`/cupon/${props.slug}`}
            >
              VER
            </Button>
            </Tooltip>
            <Tooltip title="Mis favoritos">
            <IconButton
              className={classes.iconButton}
              color={ fav ? "primary" : "default"}
              aria-label="Agrega a tus favoritos"
              onClick={addToFavorite}
            >
              <FavoriteIcon />
            </IconButton>
            </Tooltip>
            <Tooltip title="Comparte en tus redes sociales">
            <IconButton color="secondary" aria-label="Share">
              <ShareIcon />
            </IconButton>
            </Tooltip>
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
    }
  }
}

export default connect(null, mapDispatchToProps)(Coupon);

