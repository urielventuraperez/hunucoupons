import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SocialIcons from "../../components/social-icons";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import RoomIcon from "@material-ui/icons/Room";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.primary.light
  }
}));

const ContactInfo = () => {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="subtitle2">Información de contacto</Typography>
      <List disablePadding>
        <ListItem>
          <ListItemIcon>
            <RoomIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Dirección" secondary="Calle 30" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PhoneAndroidIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Teléfono" secondary="9999-999-999" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MailOutlineIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Email" secondary="info@cuponesh.com.mx" />
        </ListItem>
      </List>
      <SocialIcons />
    </Box>
  );
};

export default ContactInfo;
