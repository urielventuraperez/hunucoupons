import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import HeaderImage from "../../components/header-image";
import BussinesCard from "../../components/card";
import { PREMIUM_BUSSINES } from "../../utils/business";
import LoginDialog from "../../components/login";
import { ACCESS_TOKEN } from "../../environments";
import GridCoupons from "../../components/grid-coupons";
import Image from "../../assets/images/first-section.png";
import { connect } from "react-redux";
import Contact from "../../components/contact";
import { GetHomeCoupons } from "../../redux/actions/coupons";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5) * 2,
    marginBottom: theme.spacing(5) * 2,
  },
}));

const Home = (props) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
      setTimeout(() => handleClickOpen(), 10000);
    }
  }, []);

  const { getCoupons, coupons } = props;

  useEffect(() => {
    if(coupons && coupons.length){
    } else {
      getCoupons();
    }
  }, [getCoupons, coupons]);

  return (
    <React.Fragment>
      <HeaderImage
        isHome={"true"}
        image={Image}
        title={"Algo nuevo ha llegado para ti!"}
        backgroundColor={"rgba(0, 0, 0, 0.20)"}
        height={"70vh"}
        showChip={props.showChip}
      />
      {/* Commerce Premium */}
      <Container className={classes.container}>
        <Grid container mt={8} mb={8} spacing={3}>
          {PREMIUM_BUSSINES.map((bussines, i) => (
            <Grid key={i} item xs={12} md={3}>
              <BussinesCard
                key={i}
                media={bussines.logo}
                name={bussines.name}
                isOnlyImage={false}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* End Commerce Premium */}
      {/* New coupons section */}
      <GridCoupons
        loadCoupons={props.loadCoupons}
        coupons={props.coupons}
        auth={props.auth}
      />
      {/* End new coupons section */}
      <LoginDialog open={open} onClose={handleClose} />
      <Contact />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    loadCoupons: state.coupons.loadCoupons,
    coupons: state.coupons.homeCoupons,
    auth: state.auth.hasToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCoupons: () => {
      dispatch(GetHomeCoupons());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
