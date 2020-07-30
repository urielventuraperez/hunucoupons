import React from "react";
import Snackbar from "@material-ui/core/Snackbar";

const Toast = props => {

  return (
    <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
      open={props.openSnackbar}
      autoHideDuration={8000}
      onClose={props.handleCloseSnackbar}
      message={props.toastMessage}
    />
  );
};

export default Toast;
