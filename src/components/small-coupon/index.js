import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
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
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [ favorite, setFavorite ] = React.useState(false);
 
  const [makeZoom, setMakeZoom] = React.useState(false);

  useEffect(() => {
    setFavorite(props.favorite);
    setTimeout(() => {
      setMakeZoom(true);
    }, 500);
  }, [props.favorite]);

  const addToFavorite = () => {
    setFavorite(!favorite);
    setOpenSnackbar(true);
    props.updateTotalFav(favorite);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const toastMessage = (commerce) => {
    let message;
    !favorite ? message = `${commerce} se añadio a tus favoritos` : message = `${commerce} se elimino de tus favoritos`;
    return message; 
  }

  const classes = useStyles();
  return (
    <Zoom in={makeZoom} style={{ transitionDelay: makeZoom ? "50ms" : "0ms" }}>
      <Paper elevation={6} className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.media}
            title={props.titleName}
          />
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
            <Button
              color="secondary"
              component={NavLink}
              to={`/cupon/${props.slug}`}
            >
              VER
            </Button>
            <IconButton
              className={classes.iconButton}
              color={ favorite ? "default" : "primary"}
              aria-label="Agrega a tus favoritos"
              onClick={addToFavorite}
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="Share">
              <ShareIcon />
            </IconButton>
            <Toast
              openSnackbar={openSnackbar}
              handleCloseSnackbar={handleCloseSnackbar}
              toastMessage={toastMessage(props.titleName)}
            />
          </CardActions>
        )}
      </Paper>
    </Zoom>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTotalFav: (isMyFav) => {
      dispatch(updateMyTotalFav(isMyFav));
    }
  }
}

export default connect(null, mapDispatchToProps)(Coupon);
