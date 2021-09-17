import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from '@material-ui/icons/Facebook';
import DialogTitle from "@material-ui/core/DialogTitle";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DraftsIcon from "@material-ui/icons/Drafts";
import { blue } from "@material-ui/core/colors";
import { red } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import IconoCuponesh from "../../assets/images/icono-cuponesh.png";
import { GOOGLE_PROVIDER, FACEBOOK_PROVIDER } from "../../environments";

const useStyles = makeStyles((theme) => ({
  facebook: {
    color: blue[600],
  },
  gmail: {
    color: red[600],
    borderColor: red[600],
  },
  paper: {
    margin: theme.spacing(4, 2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  group: {
    marginTop: '1rem'
  },
}));

const LoginDialog = (props) => {
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
      <Box className={classes.paper}>
        <img className={classes.avatar} alt="Cuponesh" src={IconoCuponesh} />
        <DialogTitle id="registrate-con-nosotros">
          Bienvenido a Cuponesh
        </DialogTitle>
        <DialogContent>
          <Typography align="center" variant="body2" color="textPrimary">
            Elige uno de nuestros métodos de registro y
            disfruta de todos los cupones.
          </Typography>
        </DialogContent>
        <Box mt={1} mb={3}>
          <Button
            color="primary"
            component={Link}
            to="/login"
          >
            Iniciar sesión
          </Button>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
          <Typography align="center" variant="body2" color="textPrimary">
            Usa tu red social favorita
          </Typography>
          <ButtonGroup className={classes.group} variant="text">
            <Button
              variant="outlined"
              className={classes.gmail}
              startIcon={<DraftsIcon />}
              href={GOOGLE_PROVIDER}
            >
              Gmail
            </Button>
            <Button
              variant="outlined"
              className={classes.facebook}
              color="secondary"
              disabled
              startIcon={<FacebookIcon />}
              href={FACEBOOK_PROVIDER}
            >
              Facebook
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Dialog>
  );
};

export default LoginDialog;

LoginDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
