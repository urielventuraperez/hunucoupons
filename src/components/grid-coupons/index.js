import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Coupon from "../small-coupon";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Empty from "../empty";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import IconoCuponesh from "../../assets/images/icono-cuponesh.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: "1"
  },
  containerCoupons: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  content: {
    padding: theme.spacing(2)
  },
  newCoupons: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem"
    }
  }
}));

const GridCoupons = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {!props.isCategory && (
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
            Nuevos cupones
          </Typography>
          <Button variant="contained" color="secondary">
            Ver más
          </Button>
        </Box>
      )}
      <Box className={classes.content}>
        {props.loadCoupons ? (
          <LinearProgress variant="query" color="secondary" />
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
                  <Grid key={i} item xs={12} md={4}>
                    <Coupon
                      fechaFinal={coupon.fecha_final}
                      key={i}
                      titleName={coupon.nombre}
                      slug={coupon.slug_nombre}
                      descripcion={coupon.descripcion}
                      media={`data:image/png;base64,${coupon.foto_principalb64}`}
                      logo={IconoCuponesh}
                      token={props.auth ? true : false}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Grid
                container
                direction="row"
                justify="center"
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