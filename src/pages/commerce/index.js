import React from "react";
import { DATACOUPON } from "../../utils/coupon";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  image: {
    height: "65vh",
    marginTop: "20px",
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundImage:
      "url(https://images.pexels.com/photos/704982/pexels-photo-704982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

const Coupon = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.image}>Imagen</Paper>
        </Grid>
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {DATACOUPON.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {DATACOUPON.description}
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              { DATACOUPON.price_start }
              { DATACOUPON.price_end }
            </div>
          </div>
          <CardMedia
            className={classes.cover}
            image="https://cdn7.plusaminus.com/res/cdn-ixumw/pages/images/original/4414-sj-couponsheader.jpg"
            title="Live from space album cover"
          />
        </Card>
      </Grid>
    </Container>
  );
};

export default Coupon;
