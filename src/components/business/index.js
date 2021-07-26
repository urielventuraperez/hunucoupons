import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SkeletonComponent from "../skeletonComponent";
import Empty from "../empty";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grow from "@material-ui/core/Grow";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(2),
  },
  containerCoupons: {
    marginTop: 120,
    marginBottom: theme.spacing(3),
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  newCoupons: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
    marginBottom: 40,
  },
}));

const BussinesCard = ({ title, isLoadBusiness, business }) => {
  const classes = useStyles();

  const [makeGrow, setMakeGrow] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setMakeGrow(true);
    }, 500);
  }, []);

  return (
    <div className={classes.root}>
      <Box className={classes.content}>
        {isLoadBusiness ? (
          <SkeletonComponent />
        ) : (
          <Grid
            className={classes.containerCoupons}
            container
            mt={1}
            spacing={0}
          >
            <Box display="flex" justifyContent="space-between">
              <Typography
                color="textPrimary"
                className={classes.newCoupons}
                variant="h5"
              >
                {title}
              </Typography>
            </Box>
            {business.length > 0 ? (
              <Grid container spacing={2}>
                {business.map((b, i) => (
                  <Grid key={i} item sm={3} xs={12} md={3}>
                    <Grow in={makeGrow} style={{ transitionDelay: makeGrow ? "50ms" : "0ms" }}>
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          component={Link}
                          to={`/comercio/${b.slug_nombre}`}
                          className={classes.media}
                          image={b.ruta_logo}
                          title={b.name}
                        />
                      </CardActionArea>
                    </Card>
                    </Grow>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Empty
                  title={"Lo sentimos"}
                  subtitle={"No hemos encontrado ningún comercio"}
                />
              </Grid>
            )}
          </Grid>
        )}
      </Box>
    </div>
  );
};

export default BussinesCard;
