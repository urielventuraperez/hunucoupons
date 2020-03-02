import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";

const SwitchDarkMode = props => {
  const [theme, setTheme] = useState(true);

  const handleChangeMode = () => {
    console.log(props);
    setTheme(!theme);
    theme
      ? window.localStorage.setItem("theme", "LightTheme")
      : window.localStorage.setItem("theme", "DarkTheme");
  };

  return (
    <Switch
      onChange={() => {
        handleChangeMode();
      }}
      value={setTheme}
      inputProps={{ "aria-label": "secondary checkbox" }}
    />
  );
};

export default SwitchDarkMode;
