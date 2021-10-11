import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import DraftsIcon from "@material-ui/icons/Drafts";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconoCuponesh from "../../assets/images/icono-cuponesh.png";
import Hunucma1 from "../../assets/images/hunucma1.jpg";
import { GOOGLE_PROVIDER } from "../../environments";
import LoginForm from "../../components/login-form";
import RegisterForm from "../../components/register-form";
import RecoveryPasswordForm from "../../components/recovery-password";
import Fade from '@material-ui/core/Fade';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit">Cuponesh</Link> {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${Hunucma1})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "transparent",
    border: 0,
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  const modes = {
    login : 'LOGIN',
    register : 'REGISTER',
    recoveryPassword : 'RECOVERY'
  }

  const [loginPageModes, setLoginPageModes] = useState({
    mode: modes.login
  });
  
  const [ effect, setEffect ] = useState(false);

  React.useEffect(() => {
    setEffect(true);
  }, []);

  return (
    <Fade in={effect} timeout={1500}>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <img
              className={classes.avatar}
              alt="Cuponesh"
              src={IconoCuponesh}
            />
            <Typography variant="h6">{"Bienvenido a Cuponesh"}</Typography>
            { loginPageModes.mode === modes.login && <LoginForm /> }
            { loginPageModes.mode === modes.register && <RegisterForm /> }
            { loginPageModes.mode === modes.recoveryPassword && <RecoveryPasswordForm /> }
            <Box display="flex" justifyContent="space-around">
              { loginPageModes.mode === modes.login ? (
                <>
                  <Button 
                    color="primary" 
                    size="small"
                    onClick={() => {
                      setLoginPageModes({ mode: modes.recoveryPassword });
                    }}
                  >
                    ¿Olvidaste tú contraseña?
                  </Button>
                  <Button
                    onClick={() => {
                      setLoginPageModes({ mode: modes.register });
                    }}
                    color="primary"
                    size="small"
                  >
                    ¿No tienes cuenta?, Regístrate
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={() => {
                      setLoginPageModes({ mode: modes.login });
                    }}
                    color="primary"
                    size="small"
                  >
                    Iniciar sesión
                  </Button>
                </>
              )}
            </Box>
            <Box mt={4} mb={1}>
              <Typography variant="body1">
                {"Inicia sesión con tu cuenta de Google"}
              </Typography>
            </Box>
            <Box mt={1} mb={3}>
              <ButtonGroup
                variant="text"
                color="primary"
                aria-label="text primary button group"
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<DraftsIcon />}
                  href={GOOGLE_PROVIDER}
                >
                  Gmail
                </Button>
              </ButtonGroup>
            </Box>
            <Box mt={5}>
              <Copyright />
            </Box>
          </div>
        </Grid>
      </Grid>
    </Fade>
  );
}
