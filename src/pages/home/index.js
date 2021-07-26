import React, { useEffect, useState } from "react";
import HeaderImage from "../../components/header-image";
import BussinesCard from "../../components/business";
import LoginDialog from "../../components/login";
import { ACCESS_TOKEN } from "../../environments";
import GridCoupons from "../../components/grid-coupons";
import Image from "../../assets/images/first-section.jpg";
import ListIcons from "../../components/list-icons";
import { connect } from "react-redux";
import Contact from "../../components/contact";
import { GetHomeCoupons } from "../../redux/actions/coupons";
import { getPremiumBusiness } from "../../redux/actions/bussiness";
import Weather from "../../components/weather";

const Home = (props) => {

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

  const { getCoupons, coupons, getPremiumBusiness, business } = props;

  useEffect(() => {
    if (coupons && coupons.length) {
    } else {
      getCoupons();
      getPremiumBusiness();
    }
  }, [getCoupons, coupons, getPremiumBusiness, business]);

  return (
    <React.Fragment>
      <HeaderImage
        isHome={"true"}
        image={Image}
        title={"Algo nuevo ha llegado para ti"}
        subtitle={"¿Quiéres saber mas?"}
        action={"Contáctanos"}
        backgroundColor={"rgba(0, 0, 0, 0.20)"}
        height={"75vh"}
        showChip={props.showChip}
        redirect="#contact"
      />
      <ListIcons />
      {/* Commerce Premium */}
      <BussinesCard
        business={props.business}
        isLoadBusiness={props.isLoadBusiness}
        title={'Comercios con nosotros'}
      />
      {/* End Commerce Premium */}
      <Weather />
      {/* New coupons section */}
      <GridCoupons
        loadCoupons={props.loadCoupons}
        coupons={props.coupons}
        auth={props.auth}
        title="Nuevos cupones"
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
    business: state.business.premiumBusiness,
    isLoadBusiness: state.business.isLoadBusiness
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCoupons: () => {
      dispatch(GetHomeCoupons());
    },
    getPremiumBusiness: () => {
      dispatch(getPremiumBusiness());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
