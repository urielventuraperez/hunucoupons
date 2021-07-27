import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  iconsContainer: {
    marginTop: 60,
    marginBottom: 20,
  },
  icon: {
    width: 80,
    padding: theme.spacing(1),
    marginRight: theme.spacing(2)
  },
  paper: {
    marginBottom: theme.spacing(3),
    display: "flex",
  },
  text: {},
  subText: {
    color: theme.palette.primary.dark,
  },
  subText2: {
    color: theme.palette.secondary.dark,
  },
}));

const icons = [
  {
    id: 1,
    name: "Descubre",
    description: "Muchos servicios para ti que tenemos en nuestra comunidad.",
    image: "/descubre.png",
  },
  {
    id: 2,
    name: "Ahorra",
    description: "Con las mejores ofertas únicas para nuestros usuarios.",
    image: "/ahorra.png",
  },
  {
    id: 3,
    name: "Comparte",
    description: "Los mejores cupones en tus redes sociales y con tus amigos.",
    image: "/comparte.png",
  },
];

const ListIcons = () => {
  const classes = useStyles();
  return (
    <Box className={classes.iconsContainer}>
      <Grid container justify="space-around">
        {icons.map((icon) => (
          <Grid key={icon.id} item xs={12} sm={3} md={3}>
            <Paper elevation={0} className={classes.paper}>
              <div className={classes.icon}>
                <img
                  src={icon.image}
                  alt={icon.name}
                  className={classes.icon}
                />
              </div>
              <div className={classes.text}>
                <Typography className={classes.subText} variant="h5">
                  {icon.name}
                </Typography>
                <Typography className={classes.subText2} variant="subtitle1">
                  {icon.description}
                </Typography>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ListIcons;
