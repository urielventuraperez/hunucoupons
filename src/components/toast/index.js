import React from "react";
import Snackbar from "@material-ui/core/Snackbar";

const Toast = props => {
  return (
    <Snackbar
      open={props.openSnackbar}
      autoHideDuration={6000}
      onClose={props.handleCloseSnackbar}
      message={props.toastMessage}
    />
  );
};

export default Toast;
