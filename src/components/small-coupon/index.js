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
import DialogCoupon from "../dialog-coupon";
import Toast from "../toast";
import Button from "@material-ui/core/Button";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  date: {
    position: "absolute",
    float: "left",
    bottom: "0px",
    color: theme.palette.text.light,
    background: theme.palette.primary.dark,
    padding: `${theme.spacing(1)}px ${theme.spacing(3)}px`
  },
  iconButton: {
    marginLeft: "auto"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const Coupon = props => {
  const [openModal, setOpenModal] = React.useState(false);

  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const [makeZoom, setMakeZoom] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMakeZoom(true);
    }, 500);
  }, []);

  const handleClickOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleClickOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

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
                variant="outlined"
                disableElevation
                color="secondary"
                onClick={handleClickOpenModal}
              >
                VER
              </Button>
              <IconButton
                className={classes.iconButton}
                color="primary"
                aria-label="Add to favorites"
                onClick={handleClickOpenSnackbar}
              >
                <FavoriteIcon />
              </IconButton>
              <IconButton color="secondary" aria-label="Share">
                <ShareIcon />
              </IconButton>
              <DialogCoupon
                open={openModal}
                handleClose={handleCloseModal}
                title={props.titleName}
                descripcion={props.descripcion}
              />
              <Toast
                openSnackbar={openSnackbar}
                handleCloseSnackbar={handleCloseSnackbar}
                toastMessage={`${props.titleName} se añadio a tus favoritos`}
              />
            </CardActions>
          )}
      </Paper>
    </Zoom>
  );
};

export default Coupon;
