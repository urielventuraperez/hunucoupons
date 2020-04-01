import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  text: {
    textAlign: "center"
  },
  icon: {
    margin: theme.spacing(1)
  }
}));

const Empty = props => {
  const classes = useStyles();

  return (
    <Box mt={3}>
      <Paper elevation={4}>
        <Box className={classes.text} p={7}>
          <SentimentDissatisfiedIcon
            className={classes.icon}
            fontSize="large"
          />
          <Typography variant="subtitle1"> {props.title} </Typography>
          <Typography variant="subtitle2"> {props.subtitle} </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Empty;
