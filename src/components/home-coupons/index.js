import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Coupon from "../../components/coupon";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { GetHomeCoupons } from "../../redux/actions/coupons";
import IconoCuponesh from "../../assets/images/icono-cuponesh.png";

const useStyles = makeStyles(theme => ({
  containerCoupons: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  }
}));

const HomeCoupons = (props) => {
  const classes = useStyles();

  const { getCoupons } = props;

  useEffect(()=>{
    getCoupons()
  },[getCoupons])

 return (
  <Container>
  <Box display="flex" justifyContent="space-between">
    <Typography color="textPrimary" variant="h5">
      Nuevos cupones
    </Typography>
    <Button variant="contained" color="secondary">
      Ver más
    </Button>
  </Box>
  <Grid className={classes.containerCoupons} container mt={1} spacing={4}>
    {props.homeCoupons.map((coupon, i) => (
      <Grid key={i} item xs={12} md={4}>
        <Coupon
          fechaFinal={coupon.fecha_final}
          key={i}
          titleName={coupon.nombre}
          descripcion={coupon.descripcion}
          media={`data:image/png;base64,${coupon.foto_principalb64}`}
          logo={IconoCuponesh}
        />
      </Grid>
    ))}
  </Grid>
</Container>
 )
}

const mapStateToProps = (state) => {
  return {
    loadCoupons: state.coupons.loadCoupons,
    homeCoupons: state.coupons.homeCoupons,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    getCoupons: () => {
      dispatch(GetHomeCoupons());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeCoupons);