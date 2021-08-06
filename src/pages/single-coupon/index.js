import React, { useEffect } from "react";
import FullCoupon from "../../components/full-coupon";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";
import { GetSingleCoupon } from "../../redux/actions/coupons";
import { makeStyles } from "@material-ui/core";
import Seo from "../../components/seo";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const SingleCoupon = (props) => {
  const classes = useStyles();
  const couponName = props.match.params.slug;
  const { singleCoupon, loadCoupon } = props;

  // const [celular , setCelular] = useState('');

  useEffect(() => {
    singleCoupon(couponName);
  }, [singleCoupon]);

  return (
    <div>
      <Seo
        title={props.coupon.nombre}
        discount={props.coupon.descuento}
        image={props.coupon.ruta_foto_cupon_principal}
        slug = {props.coupon.slug_nombre}
      />
      {loadCoupon ? (
        <Backdrop className={classes.backdrop} open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <FullCoupon
        image={props.coupon.ruta_foto_cupon_principal}
        title={props.coupon.nombre}
        slugComercio={props.bussines.slug_nombre}
        comercio={props.bussines.nombre}
        celular={props.bussines.n_celular}
        description={props.coupon.descripcion}
        fechaInicial={props.coupon.fecha_inicial}
        fechaFinal={props.coupon.fecha_final}
        descuento={props.coupon.descuento}
        height={"80vh"}
        backgroundColor={"rgba(0, 0, 0, 0.45)"}
        showChip={props.showChip}
        showFavorite={props.showFavorite}
      />
      )}
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
