import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import { blue } from "@material-ui/core/colors";
import { red } from "@material-ui/core/colors";

const socialMedia = ["Facebook", "Gmail"];
const useStyles = makeStyles(theme => ({
  facebook: {
    color: blue[600]
  },
  gmail: {
    color: red[600]
  }
}));

const LoginDialog = props => {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = value => {
    onClose(value);
  };

  return (
    <Dialog
      maxWidth="xs"
      onClose={handleClose}
      aria-labelledby="registrate-con-nosotros"
      open={open}
    >
      <DialogTitle id="registrate-con-nosotros">
        Registrate con nosotros
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6" color="primary">
          ¡Es bien fácil!
        </Typography>
        <Typography variant="body2" color="textPrimary">
          Elige uno de nuestros métodos de registro con tu red social y disfruta
          de todos los cupones.
        </Typography>
      </DialogContent>
      <List>
        {socialMedia.map(social => (
          <ListItem
            button
            onClick={() => handleListItemClick(social)}
            key={social}
          >
            <ListItemIcon>
              {social === "Facebook" ? (
                <FacebookIcon className={classes.facebook} />
              ) : (
                <MailIcon className={classes.gmail} />
              )}
            </ListItemIcon>
            <ListItemText primary={social} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

export default LoginDialog;

LoginDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};
