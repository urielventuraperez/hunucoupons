import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import GridCoupons from "../../components/grid-coupons";
import { Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PhoneIcon from "@material-ui/icons/Phone";
import RoomIcon from "@material-ui/icons/Room";
import HeaderImage from "../../components/header-image";
import { getBusiness, getCoupons } from "../../redux/actions/bussiness";
import Carrousel from "../../components/carrousel";
import { connect } from "react-redux";
import CouponBackground from "../../assets/images/coupon_background.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  image: {
    height: "60vh",
    marginTop: "25px",
    textAlign: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    backgroundBlendMode: "multiply",
  },
  icon: {
    fontSize: "3rem",
  },
  title: {
    fontWeight: "600",
    textShadow: "0px 2px 3px rgba(0,0,0,0.4)",
    color: theme.palette.text.light,
  },
  subtitle: {
    textAlign: "center",
  },
  paper: {
    padding: theme.spacing(4),
    border: `1px solid ${theme.palette.text.disabled}`,
    textAlign: "center",
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.secondary.light,
    height: "100%",
  },
  products: {
    marginTop: theme.spacing(10),
    display: "flex",
    justifyContent: "center",
  },
  coupons: {
    marginTop: "48px",
  },
}));

const Commerce = (props) => {
  const businessName = props.match.params.slugComercio;
  const { getBusiness, business, getCoupons } = props;

  useEffect(() => {
    getBusiness(businessName);
    getCoupons(businessName);
  }, [getBusiness, getCoupons, businessName]);

  const classes = useStyles();

  return (
    <div>
      {props.isLoadBusiness ? (
        <Backdrop className={classes.backdrop} open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <div>
          <HeaderImage
            title={business.nombre}
            image={
              business.ruta_logo
                ? `${business.ruta_logo}`
                : `${CouponBackground}`
            }
            height={"55vh"}
            backgroundColor={"rgba(0, 0, 0, 0.50)"}
            isStore={true}
          />
          <Box m={8}>
            <Typography color="secondary" variant="h6">
              Description
            </Typography>
          </Box>
          <Box>
            <Grid container justifyContent="space-around">
              <Grid item xs={12} md={3}>
                <Paper elevation={0} className={classes.paper}>
                  <AccessTimeIcon className={classes.icon} />
                  <Typography color="textPrimary" variant="subtitle1">
                    Horario
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    {business.horario}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper elevation={0} className={classes.paper}>
                  <PhoneIcon className={classes.icon} />
                  <Typography color="textPrimary" variant="subtitle1">
                    Contacto
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    <Link
                      color="inherit"
                      href={`https://wa.me/${business.n_celular}`}
                      target="_blank"
                    >
                      Whatsapp: {business.n_celular}
                    </Link>
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    <Link
                      color="inherit"
                      href={`tel:${business.n_telefono}`}
                      target="_blank"
                    >
                      Télefono: {business.n_telefono}
                    </Link>
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper elevation={0} className={classes.paper}>
                  <RoomIcon className={classes.icon} />
                  <Typography color="textPrimary" variant="subtitle1">
                    Ubicación
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    {business.direccion}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Grid>
              <Grid className={classes.products}>
                {
                  business.listaProducto && <Carrousel products={business.listaProducto} />
                }
              </Grid>
              <Grid className={classes.coupons}>
                <Typography
                  className={classes.subtitle}
                  color="secondary"
                  variant="h5"
                >
                  Cupones
                </Typography>
                <GridCoupons
                  loadCoupons={props.loadCoupons}
                  coupons={props.coupons}
                  auth={props.auth}
                  title=""
                />
              </Grid>
            </Grid>
          </Box>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    business: state.business.business,
    coupons: state.business.coupons,
    auth: state.auth.hasToken,
    isLoadBusiness: state.business.isLoadBusiness,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getBusiness: (business) => {
      dispatch(getBusiness(business));
    },
    getCoupons: (business) => {
      dispatch(getCoupons(business));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Commerce);
