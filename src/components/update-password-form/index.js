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

const UpdatePasswordForm = ({token}) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const [loginStatus, setLoginStatus] = useState({
    status: "",
    message: "",
    openToast: false,
  });

  const { register, handleSubmit, errors } = useForm();

  const updatePassword = async (loginForm) => {
    setIsLoadingLogin(true);
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...loginForm, token}),
    };
    const response = await fetch(`${URL_API}user/resetPassword`, settings);
    const loginObject = await response.json();
    setIsLoadingLogin(false);
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
            <InputLabel htmlFor="standard-adornment-password">
              Nuevo Password
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
              onClick={handleSubmit(updatePassword)}
              color={"primary"}
              variant={"contained"}
            >
              Enviar
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

export default UpdatePasswordForm;
