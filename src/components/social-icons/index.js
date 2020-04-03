import React from "react";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { SOCIALMEDIA } from "../../utils/dataFooter";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  box: {
    paddingLeft: "1rem"
  },
  icon: {
    
    color: theme.palette.error.dark
  }
}));

const SocialIcons = () => {
  const facebookUrl = SOCIALMEDIA.facebook;
  const twitterUrl = SOCIALMEDIA.twitter;
  const instagramUrl = SOCIALMEDIA.instagram;
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="subtitle2">
        Síguenos en nuestras redes sociales
      </Typography>
      <Tooltip title={"Visitanos en Facebook"}>
        <IconButton href={facebookUrl}>
          <Avatar>
            <FacebookIcon className={classes.icon} />
          </Avatar>
        </IconButton>
      </Tooltip>
      <Tooltip title={"Visitanos en Twitter"}>
        <IconButton href={twitterUrl}>
          <Avatar>
            <TwitterIcon className={classes.icon} />
          </Avatar>
        </IconButton>
      </Tooltip>
      <Tooltip title={"Visitanos en Instagram"}>
        <IconButton href={instagramUrl}>
          <Avatar>
            <InstagramIcon className={classes.icon} />
          </Avatar>
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default SocialIcons;
