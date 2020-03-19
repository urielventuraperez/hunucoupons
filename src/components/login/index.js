import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Box from "@material-ui/core/Box";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DraftsIcon from "@material-ui/icons/Drafts";
import FacebookIcon from "@material-ui/icons/Facebook";
import { blue } from "@material-ui/core/colors";
import { red } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import IconoCuponesh from "../../assets/images/icono-cuponesh.png";
import { FACEBOOK_PROVIDER, GOOGLE_PROVIDER } from "../../environments";

const useStyles = makeStyles(theme => ({
  facebook: {
    color: blue[600]
  },
  gmail: {
    color: red[600]
  },
  paper: {
    margin: theme.spacing(4, 2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
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
      <div className={classes.paper}>
      <Avatar
            className={classes.avatar}
            alt="Cuponesh"
            src={IconoCuponesh}
          />
      <DialogTitle id="registrate-con-nosotros">
        Registrate con nosotros
      </DialogTitle>
      <DialogContent>
        <Typography align="center" variant="body2" color="textPrimary">
          Elige uno de nuestros métodos de registro con tu red social y disfruta
          de todos los cupones.
        </Typography>
      </DialogContent>
      <Box mt={3} mb={3}>
            <ButtonGroup
              variant="text"
              color="primary"
              aria-label="text primary button group"
            >
              <Button
                variant="contained"
                disabled
                color="primary"
                startIcon={<FacebookIcon />}
              >
                Facebook
              </Button>
              <Button
                variant="contained"
                color="primary"
                startIcon={<DraftsIcon />}
                href={GOOGLE_PROVIDER}
              >
                Gmail
              </Button>
            </ButtonGroup>
          </Box>
          </div>
    </Dialog>
  );
};

export default LoginDialog;

LoginDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};
