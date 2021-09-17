import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Coupon from "../small-coupon";
import SkeletonComponent from "../skeletonComponent";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Empty from "../empty";
import Box from "@material-ui/core/Box";
import IconoCuponesh from "../../assets/images/icono-cuponesh.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: "1",
    backgroundColor: theme.palette.secondary.light
  },
  containerCoupons: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(3),
  },
  content: {
    padding: theme.spacing(2),
  },
  cardContent: {
    padding: theme.spacing(4),
  },
  newCoupons: {
    marginBottom: 40,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
}));

const GridCoupons = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.content}>
        {props.loadCoupons ? (
          <SkeletonComponent />
        ) : (
          <Grid
            className={classes.containerCoupons}
            container
            mt={1}
            spacing={0}
          >
            <Box display="flex" justifyContent="space-between">
              <Typography
                color="textPrimary"
                className={classes.newCoupons}
                variant="h5"
              >
                {props.title}
              </Typography>
            </Box>
            {props.coupons.length > 0 ? (
              <Grid container spacing={4}>
                {props.coupons.map((coupon, i) => (
                  <Grid key={i} item sm={6} md={4} xs={12}>
                    <Coupon
                      fechaFinal={coupon.fecha_final}
                      key={i}
                      titleName={coupon.nombre}
                      slug={coupon.slug_nombre}
                      descripcion={coupon.descripcion}
                      media={coupon.ruta_foto_cupon_principal}
                      slugEmpresa={
                        coupon?.empresa?.slug_nombre
                          ? coupon.empresa.slug_nombre
                          : ""
                      }
                      empresa={
                        coupon?.empresa?.nombre ? coupon.empresa.nombre : ""
                      }
                      celular={coupon?.empresa?.n_celular}
                      logo={
                        coupon?.empresa?.ruta_logo
                          ? coupon.empresa.ruta_logo
                          : IconoCuponesh
                      }
                      token={props.auth ? true : false}
                      myFav={coupon?.campoAdicional?.favoritoActivo}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Empty
                  title={"Lo sentimos"}
                  subtitle={"No hemos encontrado ningún cupón"}
                />
              </Grid>
            )}
          </Grid>
        )}
      </Box>
    </div>
  );
};

export default GridCoupons;
