import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
// import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import Zoom from "@material-ui/core/Zoom";

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

const Business = (props) => {
  // const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const [makeZoom, setMakeZoom] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMakeZoom(true);
    }, 500);
  }, []);

  /* const handleClickOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  }; */

  const classes = useStyles();
  return (
    <Zoom in={makeZoom} style={{ transitionDelay: makeZoom ? "50ms" : "0ms" }}>
      <Paper elevation={6} className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.logo}
            title={props.titleName}
            component={NavLink}
            to={`/comercio/${props.slugEmpresa}`}
          />
        </CardActionArea>
        <CardHeader
          title={
            <Typography variant="subtitle1" color="textPrimary">
              {props.titleName}
            </Typography>
          }
        />
        {/**{props.token && (
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
              color="primary"
              aria-label="Add to favorites"
              onClick={handleClickOpenSnackbar}
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="Share">
              <ShareIcon />
            </IconButton>
            <Toast
              openSnackbar={openSnackbar}
              handleCloseSnackbar={handleCloseSnackbar}
              toastMessage={`${props.titleName} se añadio a tus favoritos`}
            /> 
          </CardActions>
        )}**/}
      </Paper>
    </Zoom>
  );
};

export default Business;
