import React from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5),
  },
  paper: {
    maxWidth:360,
  },
  buttonGroup: {
    width: '100%'
  },
}));

const Profile = () => {
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      display="flex"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
    >
      <Paper className={classes.paper} elevation={5}>
        <Card>
          <CardActionArea>
            <CardContent>
              <Box
                className={classes.root}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
                flex="2"
              >
                <Avatar>H</Avatar>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  Antarctica.
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Box
              className={classes.buttonGroup}
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              alignContent="center"
            >
              <Button size="small" color="primary">
                Salir
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Paper>
    </Box>
  );
};

export default Profile;
