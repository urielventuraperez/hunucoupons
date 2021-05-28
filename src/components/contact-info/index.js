import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import Link from "@material-ui/core/Link";
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
  },
  link: {
    color: "white"
  }
}));

const ContactInfo = () => {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="subtitle1">Información de contacto</Typography>
      <List disablePadding>
        <ListItem>
          <ListItemIcon>
            <RoomIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText 
          primary={<Typography component="p" variant="body2">Dirección</Typography>}
          secondary={<Typography component="p" variant="body2">Calle 30 SN, Centro, 97350 Hunucmá, Yuc. 97350 Hunucmá, México</Typography>} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PhoneAndroidIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText 
          primary={<Typography component="p" variant="body2">Whatsapp</Typography>}
          secondary={<Link className={classes.link} color="inherit" href="https://wa.me/9889570992"><Typography component="p" variant="body2">988 957 0992</Typography></Link>} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MailOutlineIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText 
          primary={<Typography component="p" variant="body2">Email</Typography>}
          secondary={<Link className={classes.link} color="inherit" href="mailto:info@cuponesh.com.mx"><Typography component="p" variant="body2">info@cuponesh.com.mx</Typography></Link>} />
        </ListItem>
      </List>
      <SocialIcons />
    </Box>
  );
};

export default ContactInfo;
