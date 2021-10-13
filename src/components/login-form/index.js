import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormGroup from "@material-ui/core/FormGroup";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import { URL_API } from "../../environments";
import Toast from "../toast";
import { ACCESS_TOKEN, DARK_MODE } from "../../environments";
import { getUserProfile } from "../../redux/actions/user";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    width: "100%",
  },
  margin: {
    margin: theme.spacing(1.5),
  },
}));

const LoginForm = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const [ isLogged, setIsLogged ] = useState(false);

  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const [loginStatus, setLoginStatus] = useState({
    status: "",
    message: "",
    openToast: false,
  });

  const { register, handleSubmit, errors } = useForm();

  const login = async (loginForm) => {
    setIsLoadingLogin(true);
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginForm),
    };
    const response = await fetch(`${URL_API}auth/login`, settings);
    const loginObject = await response.json();
    setIsLoadingLogin(false);
    if (loginObject.status === "error") {
      setLoginStatus({
        status: false,
        message: loginObject.message,
        openToast: true,
      });
    } else if (loginObject.data === null) {
      setLoginStatus({
        status: false,
        message: loginObject.message,
        openToast: true,
      });
    }  
    else {
      setLoginStatus({
        status: true,
        message: loginObject.message,
        openToast: true,
      });

      localStorage.setItem(ACCESS_TOKEN, `${loginObject.data.accessToken}`);
      localStorage.setItem(DARK_MODE, false);
      
      setIsLogged(true);

    }
  };

  React.useEffect( () => {
    if ( isLogged ) {
      props.getUserProfile();
      props.loginUser();
      localStorage.setItem(DARK_MODE, false);
      history.push('/');    
    }
  }, [isLogged])

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [effect, setEffect] = React.useState(false);

  React.useEffect(() => {
    setEffect(true);
  }, []);

  return (
    <Box className={classes.root}>
      <Fade in={effect} timeout={1500}>
        <FormGroup>
          <FormControl className={classes.margin}>
            <InputLabel>Email</InputLabel>
            <Input
              required
              type={"text"}
              value={values.email}
              name={"email"}
              error={errors.email ? true : false}
              inputRef={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                },
              })}
              onChange={handleChange("email")}
            />
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              required
              name={"password"}
              inputRef={register({ required: true })}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className={classes.margin}>
            <Button
              disabled={isLoadingLogin}
              onClick={handleSubmit(login)}
              color={"primary"}
              variant={"contained"}
            >
              Iniciar sesión
            </Button>
          </FormControl>
        </FormGroup>
      </Fade>
      <Toast
        color={loginStatus.status}
        toastMessage={loginStatus.message}
        openSnackbar={loginStatus.openToast}
      />
    </Box>
  );
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    loginUser: () => { dispatch({ type: 'SET_TOKEN' }) },
    getUserProfile: () => {
      dispatch(getUserProfile())
    }
  }
}

export default connect(null, mapDispatchToProps)(LoginForm);