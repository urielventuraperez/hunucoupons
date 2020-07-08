import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";
import CheckIcon from "@material-ui/icons/Check";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import { useForm } from "react-hook-form";
import { URL_API } from "../../environments";

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
  const { register, handleSubmit, errors } = useForm({ mode: "onChange" });

  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  const handleSendForm = (bodyPost) => {
    if (!loading) {
      console.log(errors);
      setSuccess(false);
      setLoading(true);
      fetch(`${URL_API}app/notificaciones/comentarios`, {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyPost),
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.status === "success") {
            setSuccess(true);
            setLoading(false);
          } else {
            setSuccess(false);
            setLoading(false);
            console.log("Error al enviar");
          }
        });
    }
  };

  const tooltipText = "¡Envianos tu mensaje!";
  return (
    <FormGroup>
      <Box display="flex" className={classes.formControl}>
        <Box flexGrow={2}>
          <TextField
            fullWidth
            required
            label="Nombre"
            name="nombre"
            id="name"
            inputRef={register({ required: true })}
            error={errors.name ? true : false}
            helperText={errors.email && "Inserte un nombre válido"}
          />
        </Box>
        <Box flexGrow={2}>
          <TextField
            fullWidth
            required
            label="Email"
            name="email"
            id="email"
            inputRef={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              },
            })}
            error={errors.email ? true : false}
            helperText={errors.email && "Inserte un email válido"}
          />
        </Box>
      </Box>
      <Box display="flex" className={classes.formControl}>
        <Box flexGrow={2}>
          <TextField
            fullWidth
            label="Teléfono/Celular"
            name="nTelefono"
            id="phone"
            inputRef={register({
              maxLength: 25,
              minLength: 10,
              pattern: {
                value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/,
              },
            })}
            error={errors.nTelefono ? true : false}
            helperText={errors.nTelefono && "Inserte un número válido"}
          />
        </Box>
        <Box flexGrow={2}>
          <TextField
            fullWidth
            label="Comercio"
            name="comercio"
            id="business"
            inputRef={register}
          />
        </Box>
      </Box>
      <Box display="flex" className={classes.formControl}>
        <Box flexGrow={4}>
          <TextField
            fullWidth
            required
            label="Mensaje"
            name="mensaje"
            id="message"
            multiline
            rows={4}
            inputRef={register({ required: true })}
            error={errors.mensaje ? true : false}
            helperText={errors.mensaje && "Por favor, añada su mensaje"}
          />
        </Box>
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <div className={classes.wrapper}>
          <Tooltip title={tooltipText}>
            <Fab
              disabled={success && true}
              onClick={handleSubmit(handleSendForm)}
              className={buttonClassname}
              color="secondary"
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
    </FormGroup>
  );
};

export default ContactForm;
