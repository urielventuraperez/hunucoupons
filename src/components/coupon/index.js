import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import DialogCoupon from "../../components/dialog-coupon";
import Toast from "../../components/toast";
import Button from "@material-ui/core/Button";
import Zoom from "@material-ui/core/Zoom";
import { connect } from "react-redux";

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
    }, 1000);
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
    <Zoom in={makeZoom} style={{ transitionDelay: makeZoom ? "500ms" : "0ms" }}>
      <Paper elevation={2}>
        <Card className={classes.card}>
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
              September 14, 2016
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
              <Typography variant="subtitle2" color="primary">
                {props.titleName}
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" component="p">
              {props.descripcion}
            </Typography>
          </CardContent>
          {props.auth.hasToken && (
            <CardActions disableSpacing={true}>
              <Button size="large" onClick={handleClickOpenModal}>
                VER CUPON
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
        </Card>
      </Paper>
    </Zoom>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Coupon);
