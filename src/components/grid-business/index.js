import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Business from "../business";
import SkeletonComponent from "../skeletonComponent";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Empty from "../empty";
import Box from "@material-ui/core/Box";
import IconoCuponesh from "../../assets/images/icono-cuponesh.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: "1",
  },
  containerCoupons: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  content: {
    padding: theme.spacing(2),
  },
  newCoupons: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
}));

const GridBusiness = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {props.isCategory && (
        <Box
          className={classes.content}
          display="flex"
          justifyContent="space-between"
        >
          <Typography
            color="textPrimary"
            className={classes.newCoupons}
            variant="h5"
          >
            Nuevos comercios
          </Typography>
        </Box>
      )}
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
            {props.coupons.length > 0 ? (
              <Grid container spacing={2}>
                {props.coupons.map((coupon, i) => (
                  <Grid key={i} item sm={6} md={4} xs={12}>
                    <Business
                      fechaFinal={coupon.fecha_final}
                      key={i}
                      titleName={coupon.nombre}
                      slug={coupon.slug_nombre}
                      descripcion={coupon.descripcion}
                      media={coupon.ruta_foto_cupon_principal}
                      slugEmpresa={coupon.slug_nombre}
                      logo={coupon.ruta_logo ? coupon.ruta_logo : IconoCuponesh}
                      token={props.auth ? true : false}
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

export default GridBusiness;
