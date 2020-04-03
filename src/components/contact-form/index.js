import React from "react";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles( theme => ({

  formControl: {
    flexGrow: '2',
    flexDirection: 'row',
    marginTop: theme.spacing(1),
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  icon: {
    marginTop: theme.spacing(4)
  },
  input: {
    paddingRight: theme.spacing(5)*1.8,
    [theme.breakpoints.down('sm')]: {
      paddingRight: theme.spacing(0)
    }
  }

}) );

const ContactForm = () => {
  const classes = useStyles();
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
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
        </Box>
      </Box>
      <Box display="flex" className={classes.formControl}>
        <Box flexGrow={2}>
          <FormControl className={classes.input} fullWidth>
            <InputLabel htmlFor="my-input">Telefono / Celular</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
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
      <Tooltip title="¡Enviar mensaje!">
        <Fab className={classes.icon} color="secondary" aria-label="add">
          <SendIcon />
        </Fab>
        </Tooltip>
      </Box>
    </form>
  );
};

export default ContactForm;
