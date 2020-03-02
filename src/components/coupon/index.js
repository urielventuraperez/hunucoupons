import React from "react";
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
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  date: {
    position: "absolute",
    float: "left",
    bottom: "0px",
    background: theme.palette.primary.dark,
    padding: `${theme.spacing(1)}px ${theme.spacing(3)}px`,
  },
  iconButton: {
    marginLeft: "auto",
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const Coupon = props => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <Paper elevation={2}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.media}
            title={props.titleName}
          />
          <Typography variant="caption" color="textSecondary" className={classes.date}>
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
        <CardActions disableSpacing={true}>
          <Button size="large" onClick={handleClickOpen}>VER CUPON</Button>
          <IconButton className={classes.iconButton} color="primary" aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton color="secondary" aria-label="Share">
            <ShareIcon />
          </IconButton>
          <DialogCoupon
            open={open}
            handleClose={handleClose}
            descripcion={props.descripcion}
          />
        </CardActions>
      </Card>
    </Paper>
  );
};

export default Coupon;
