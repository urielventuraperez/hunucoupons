import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import HeaderImage from "../../components/header-image";
import BussinesCard from "../../components/card";
import Coupon from "../../components/coupon";
import { DATA_NEW_COUPON } from "../../utils/coupon";
import { PREMIUM_BUSSINES } from "../../utils/business";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles( theme => ({
  container: {
    marginTop: theme.spacing(5)*2,
    marginBottom: theme.spacing(5)*2,
  },
  containerCoupons: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}) ); 

const Home = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <HeaderImage />
      {/* Commerce Premium */}
      <Container className={classes.container}>
        <Grid container mt={8} mb={8} spacing={3}>
          {PREMIUM_BUSSINES.map(bussines => (
            <Grid item xs={12} md={3}>
              <BussinesCard key={bussines.id} media={bussines.logo} name={bussines.name} isOnlyImage={false} />
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* End Commerce Premium */}
      {/* New coupons section */}
      <Container>
        <Box display="flex" justifyContent="space-between">
          <Typography color="textPrimary" variant="h5">Nuevos cupones</Typography>
          <Button variant="contained" color="secondary">Ver más</Button>
        </Box>
        <Grid className={classes.containerCoupons} container mt={1} spacing={8}>
          {DATA_NEW_COUPON.map(coupon => (
            <Grid item xs={12} md={4}>
              <Coupon
                key={coupon.id}
                titleName={coupon.title}
                descripcion={coupon.short_description}
                media={coupon.featured_image}
                logo={coupon.logo}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* End new coupons section */}
    </React.Fragment>
  );
};

export default Home;
