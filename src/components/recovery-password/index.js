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

export default function RecoveryPasswordForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: "",
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
    const response = await fetch(`${URL_API}/user/recoverPassword`, settings);
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

  const [effect, setEffect] = React.useState(false);

  useEffect(() => {
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
            <Button
              disabled={isLoading}
              onClick={handleSubmit(sendRegister)}
              color={"primary"}
              variant={"contained"}
            >
              Envíar
            </Button>
          </FormControl>
        </FormGroup>
      </Fade>
    </Box>
  );
}
