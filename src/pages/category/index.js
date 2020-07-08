import React, { useEffect } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import HeaderImage from "../../components/header-image";
import categoria from "../../assets/images/categoria.jpg";
// import GridCoupons from "../../components/grid-coupons";
import GridBusiness from "../../components/grid-business";
import { GetCategory } from "../../redux/actions/categories";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const getCategoryID = (slug) => {
  switch (slug) {
    case "tiendita":
      return "1";
    case "hogar":
      return "2";
    case "restaurante":
      return "3";
    case "carnes":
      return "4";
    case "tecnologia":
      return "5";
    case "belleza":
      return "6";
    case "salud":
      return "7";
    case "licores":
      return "8";
    case "eventos_especiales":
      return "9";
    case "moda":
      return "10";
    case "otros":
      return "11";
    default:
      return "1";
  }
};

const Category = (props) => {
  const classes = useStyles();
  const categorySlug = props.match.params.slug;
  const { getCoupons } = props;

  useEffect(() => {
    getCoupons(getCategoryID(categorySlug), "1");
  }, [getCoupons, categorySlug]);

  return (
    <div>
      {props.loadCategory && (
        <Backdrop className={classes.backdrop} open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <HeaderImage
        image={categoria}
        title={categorySlug}
        height={"75vh"}
        backgroundColor={"rgba(0, 0, 0, 0.20)"}
        totalCoupons={props.totalCoupons}
        showChip={props.showChip}
      />
      <Box mt={5} mb={5}>
        <GridBusiness
          loadCoupons={props.loadCoupons}
          coupons={props.coupons}
          auth={props.auth}
          slug={categorySlug}
          isCategory={props.isCategory}
        />
      </Box>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loadCategory: state.categories.loadCategory,
    loadCoupons: state.coupons.loadCoupons,
    coupons: state.coupons.coupons,
    totalCoupons: state.coupons.coupons.length,
    auth: state.auth.hasToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCoupons: (slug, page) => {
      dispatch(GetCategory(slug, page));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
