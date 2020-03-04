import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import { blue } from "@material-ui/core/colors";
import { red } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import { FACEBOOK_PROVIDER, GOOGLE_PROVIDER } from "../../environments";

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
      <Button href={FACEBOOK_PROVIDER}>
        <FacebookIcon className={classes.facebook} />
        Facebook
      </Button>
      <Button href={GOOGLE_PROVIDER}>
        <MailIcon className={classes.gmail} />
        Google
      </Button>
    </Dialog>
  );
};

export default LoginDialog;

LoginDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};
