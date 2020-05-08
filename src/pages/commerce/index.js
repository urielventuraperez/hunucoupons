import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PhoneIcon from "@material-ui/icons/Phone";
import RoomIcon from "@material-ui/icons/Room";
import HeaderImage from "../../components/header-image";
import { getBusiness } from "../../redux/actions/bussiness";
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
  title: {
    fontWeight: "600",
    textShadow: "0px 2px 3px rgba(0,0,0,0.4)",
    color: theme.palette.text.light,
  },
  subtitle: {
    fontWeight: "100",
    textAlign: "center",
  },
  paper: {
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.text.disabled}`,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Commerce = (props) => {
  const businessName = props.match.params.slugComercio;
  const { getBusiness, business } = props;

  useEffect(() => {
    getBusiness(businessName);
  }, [getBusiness, businessName]);

  const classes = useStyles();
  return (
    <div>
      <HeaderImage
        title={business.nombre}
        image={
          business.ruta_logo ? `${business.ruta_logo}` : `${CouponBackground}`
        }
        height={"55vh"}
        backgroundColor={"rgba(0, 0, 0, 0.20)"}
        isStore={true}
      />
      <Box m={8}>
        <Typography className={classes.subtitle} color="secondary" variant="h6">
          Description
        </Typography>
      </Box>
      <Box>
        <Grid container justify="space-around">
          <Grid item xs={12} md={3}>
            <Paper elevation={0} className={classes.paper}>
              <AccessTimeIcon />
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
              <PhoneIcon />
              <Typography color="textPrimary" variant="subtitle1">
                Contacto
              </Typography>
              <Typography color="textPrimary" variant="subtitle2">
                {business.n_celular}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper elevation={0} className={classes.paper}>
              <RoomIcon />
              <Typography color="textPrimary" variant="subtitle1">
                Ubicación
              </Typography>
              <Typography color="textPrimary" variant="subtitle2">
                {business.direccion}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Box m={8}>
          <Typography
            className={classes.subtitle}
            color="secondary"
            variant="h6"
          >
            Cupones
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    business: state.business.business,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getBusiness: (business) => {
      dispatch(getBusiness(business));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Commerce);
