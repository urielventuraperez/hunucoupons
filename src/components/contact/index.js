import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import ContactMailRoundedIcon from "@material-ui/icons/ContactMailRounded";
import ContactInfo from "../../components/contact-info";
import ContactForm from "../../components/contact-form";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.default,
    margin: theme.spacing(5) * 2.6,
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0),
    },
  },
  box: {
    padding: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  location: {
    backgroundColor: theme.palette.error.dark,
    color: theme.palette.text.light,
  },
}));

const Form = () => {
  const classes = useStyles();
  return (
    <Paper elevation={1} className={classes.container}>
      <Grid container direction="row" justify="center" alignItems="stretch">
        <Box className={classes.box} flexGrow={2}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Typography variant="subtitle1">Déjanos un mensaje</Typography>
            <ContactMailRoundedIcon fontSize="large" />
          </Box>
          <Box>
            <Typography variant="subtitle2">
            Juntos podemos hacer cosas increíbles
            </Typography>
            <Typography variant="subtitle2">
            Anunciate con nosotros.
            </Typography>
            <ContactForm />
          </Box>
        </Box>
        <Box className={`${classes.box} ${classes.location}`} flexGrow={2}>
          <ContactInfo />
        </Box>
      </Grid>
    </Paper>
  );
};

export default Form;
