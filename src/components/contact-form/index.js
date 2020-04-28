import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";
import CheckIcon from "@material-ui/icons/Check";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  formControl: {
    flexGrow: "2",
    flexDirection: "row",
    marginTop: theme.spacing(1),
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  wrapper: {
    marginTop: theme.spacing(4),
    margin: theme.spacing(1),
    position: "relative",
  },
  fabProgress: {
    position: "absolute",
    top: -6,
    left: -6,
    zIndex: 1,
  },
  input: {
    paddingRight: theme.spacing(5) * 1.8,
    [theme.breakpoints.down("sm")]: {
      paddingRight: theme.spacing(0),
    },
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();
  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });
  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };
  const tooltipText = "¡Envianos tu mensaje!";
  return (
    <form>
      <Box display="flex" className={classes.formControl}>
        <Box flexGrow={2}>
          <FormControl className={classes.input} fullWidth>
            <InputLabel htmlFor="my-input">Nombre</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
        </Box>
        <Box flexGrow={2}>
          <FormControl className={classes.input} fullWidth>
            <InputLabel htmlFor="my-input">Email</InputLabel>
            <Input type="email" id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
        </Box>
      </Box>
      <Box display="flex" className={classes.formControl}>
        <Box flexGrow={2}>
          <FormControl className={classes.input} fullWidth>
            <InputLabel  htmlFor="my-input">Telefono / Celular</InputLabel>
            <Input type="tel" id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
        </Box>
        <Box flexGrow={2}>
          <FormControl className={classes.input} fullWidth>
            <InputLabel htmlFor="my-input">Comercio</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
        </Box>
      </Box>
      <Box>
        <FormControl className={classes.input} fullWidth>
          <InputLabel htmlFor="my-input">Tu mensaje</InputLabel>
          <Input
            multiline
            rows="4"
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </FormControl>
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <div className={classes.wrapper}>
          <Tooltip title={tooltipText}>
            <Fab
              disabled={success && true}
              onClick={handleButtonClick}
              className={buttonClassname}
              color="secondary"
              aria-label="add"
            >
              {!success ? <SendIcon /> : <CheckIcon />}
            </Fab>
          </Tooltip>
          {loading && (
            <CircularProgress
              color="primary"
              size={68}
              className={classes.fabProgress}
            />
          )}
        </div>
      </Box>
    </form>
  );
};

export default ContactForm;
