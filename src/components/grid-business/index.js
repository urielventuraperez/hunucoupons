import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BussinesCard from "../../components/business";
import SkeletonComponent from "../skeletonComponent";
import Grid from "@material-ui/core/Grid";
import Empty from "../empty";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: "1",
  },
  container: {
    width: '100%'
  },
  containerCoupons: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  content: {
    padding: theme.spacing(2),
  },
  newCoupons: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
}));

const GridBusiness = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid className={classes.container}>
        {props.loadCoupons ? (
          <SkeletonComponent />
        ) : (
          <Box mt={1} spacing={0}>
            {props.coupons.length > 0 ? (
                <BussinesCard
                  business={props.coupons}
                  isLoadBusiness={props.loadCoupons}
                  title={"Comercios con nosotros"}
                />
            ) : (
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Empty
                  title={"Lo sentimos"}
                  subtitle={"No hemos encontrado ningún comercio en la categoría"}
                />
              </Grid>
            )}
          </Box>
        )}
      </Grid>
    </div>
  );
};

export default GridBusiness;
