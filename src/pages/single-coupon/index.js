import React, { useEffect } from "react";
import FullCoupon from "../../components/full-coupon";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";
import { GetSingleCoupon } from "../../redux/actions/coupons";
import { makeStyles } from "@material-ui/core";
import Seo from "../../components/seo";
import BackButton from "../../components/back-button";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const SingleCoupon = (props) => {
  const classes = useStyles();
  const couponName = props.match.params.slug;
  const { singleCoupon } = props;

  useEffect(() => {
    singleCoupon(couponName);
  }, [singleCoupon, couponName]);

  return (
    <div>
      <Seo
        title={props.coupon.nombre}
        discount={props.coupon.descuento}
        image={props.coupon.ruta_foto_cupon_principal}
        slug = {props.coupon.slug_nombre}
      />
      {props.loadCoupon && (
        <Backdrop className={classes.backdrop} open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <FullCoupon
        image={props.coupon.ruta_foto_cupon_principal}
        title={props.coupon.nombre}
        slugComercio={props.bussines.slug_nombre}
        description={props.coupon.descripcion}
        fechaInicial={props.coupon.fecha_inicial}
        fechaFinal={props.coupon.fecha_final}
        descuento={props.coupon.descuento}
        height={"80vh"}
        backgroundColor={"rgba(0, 0, 0, 0.35)"}
        showChip={props.showChip}
        showFavorite={props.showFavorite}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    coupon: state.coupons.coupon,
    bussines: state.coupons.bussines,
    loadCoupon: state.coupons.loadCoupons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    singleCoupon: (slug) => {
      dispatch(GetSingleCoupon(slug));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCoupon);
