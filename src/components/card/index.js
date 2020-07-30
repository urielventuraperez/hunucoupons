import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { Link } from "react-router-dom"

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const BussinesCard = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      {props.isOnlyImage && <CardHeader title={props.name} />}
      <CardActionArea>
        <CardMedia
          component={ Link }
          to={`/comercio/${props.slug}`}
          className={classes.media}
          image={props.media}
          title={props.name}
        />
        {props.isOnlyImage && (
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        )}
      </CardActionArea>
    </Card>
  );
};

BussinesCard.propTypes = {
  isOnlyImage: PropTypes.bool
};

export default BussinesCard;
