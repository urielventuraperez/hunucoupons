import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  pos: {
    marginBottom: 12
  }
}));

export default function OutlinedCard() {
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      display="flex"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
    >
      <Paper elevation={0}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            404
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Página no encontrada
          </Typography>
          <Typography variant="body2" component="p">
            La página que estas buscando no existe o ha ocurrido algún un error.
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" size="small">
            Volver al inicio
          </Button>
        </CardActions>
      </Paper>
    </Box>
  );
}
