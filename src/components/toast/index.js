import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from '@material-ui/lab/Alert';

const Toast = props => {
  return (
    <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
      open={props.openSnackbar}
      autoHideDuration={3500}
      onClose={props.handleCloseSnackbar}
    >
      <Alert severity={ props.color ? 'success' : 'warning' }>{props.toastMessage}</Alert>
    </Snackbar>
  );
};

export default Toast;
