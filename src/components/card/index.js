import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SkeletonComponent from "../skeletonComponent";
import Empty from "../empty";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

const BussinesCard = ({title, isLoadBusiness, business}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {!isLoadBusiness && (
        <Box
          className={classes.content}
          display="flex"
          justifyContent="space-between"
        >
          <Typography
            color="textPrimary"
            className={classes.newCoupons}
            variant="h5"
          >
            {title}
          </Typography>
        </Box>
      )}
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
            {business.length > 0 ? (
              <Grid container spacing={2}>
                {business.map((b, i) => (
                  <Grid key={i} item sm={6} md={4} xs={12}>
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          component={Link}
                          to={`/comercio/${b.slug}`}
                          className={classes.media}
                          image={b.media}
                          title={b.name}
                        />
                      </CardActionArea>
                    </Card>
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
