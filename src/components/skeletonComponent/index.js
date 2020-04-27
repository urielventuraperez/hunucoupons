import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import Grid from "@material-ui/core/Grid";

const SkeletonComponent = () => {
  return (
    <Grid container spacing={3}>
      {Array.from(new Array(3)).map((item, index) => (
        <Grid key={index} item md>
          <Skeleton animation="wave" variant="rect" height={120} />
          <br></br>
          <Skeleton animation="wave" variant="rect" />
          <br></br>
          <Skeleton animation="wave" variant="rect" />
        </Grid>
      ))}
    </Grid>
  );
};

export default SkeletonComponent;
