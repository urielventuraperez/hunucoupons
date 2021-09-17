import React, { useState, useEffect } from "react";
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

export default function RegisterForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    showPasswordConfirm: false,
    showPassword: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [loginStatus, setLoginStatus] = useState({
    status: "",
    message: "",
    openToast: false,
  });

  const { register, handleSubmit, errors } = useForm();

  const sendRegister = async (form) => {
    setIsLoading(true);
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    };
    const response = await fetch(`${URL_API}auth/signup`, settings);
    const loginObject = await response.json();
    setIsLoading(false);
    if (loginObject.status === "error") {
      setLoginStatus({
        status: false,
        message: loginObject.message,
        openToast: true,
      });
    } else if (loginObject?.data?.accessToken !== null) {
      setLoginStatus({
        status: false,
        message: loginObject.message,
        openToast: true,
      });
    } else {
      setLoginStatus({
        status: true,
        message: loginObject.message,
        openToast: true,
      });
    }
    console.log(loginStatus);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowPasswordConfirm = () => {
    setValues({ ...values, showPasswordConfirm: !values.showPasswordConfirm });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [effect, setEffect] = React.useState(false);

  useEffect(() => {
    setEffect(true);
  }, []);

  return (
    <Box className={classes.root}>
      <Fade in={effect} timeout={1500}>
        <FormGroup>
          <FormControl className={classes.margin}>
            <InputLabel>Nombre</InputLabel>
            <Input
              required
              type={"text"}
              value={values.name}
              name={"name"}
              error={errors.name ? true : false}
              inputRef={register({
                required: true,
              })}
              onChange={handleChange("name")}
            />
          </FormControl>
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
            <InputLabel htmlFor="standard-adornment-password">
              Confirmar Password
            </InputLabel>
            <Input
              type={values.showPasswordConfirm ? "text" : "password"}
              value={values.passwordConfirm}
              required
              name={"passwordConfirm"}
              inputRef={register({ required: true })}
              onChange={handleChange("passwordConfirm")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPasswordConfirm}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPasswordConfirm ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className={classes.margin}>
            <Button
              disabled={isLoading}
              onClick={handleSubmit(sendRegister)}
              color={"primary"}
              variant={"contained"}
            >
              Registrar
            </Button>
          </FormControl>
        </FormGroup>
      </Fade>
    </Box>
  );
}
