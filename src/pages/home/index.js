import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import HeaderImage from "../../components/header-image";
import BussinesCard from "../../components/card";
import Coupon from "../../components/coupon";
import { DATA_NEW_COUPON } from "../../utils/coupon";
import { PREMIUM_BUSSINES } from "../../utils/business";

const Home = () => {
  return (
    <React.Fragment>
      <HeaderImage />
      {/* Commerce Premium */}
      <Container>
        <Grid container mt={8} mb={8} spacing={3}>
          {PREMIUM_BUSSINES.map(bussines => (
            <Grid item xs={12} md={3}>
              <BussinesCard media={bussines.logo} name={bussines.name} />
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* End Commerce Premium */}
      {/* New coupons section */}
      <Container>
        <Grid container spacing={3}>
          {DATA_NEW_COUPON.map(coupon => (
            <Grid boxShadow={6} item xs={12} md={4}>
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
