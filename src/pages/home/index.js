import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import HeaderImage from "../../components/header-image";
import Paper from "@material-ui/core/Paper";
import BussinesCard from "../../components/card";
import LoginDialog from "../../components/login";
import Avatar from "@material-ui/core/Avatar";
import { ACCESS_TOKEN } from "../../environments";
import GridCoupons from "../../components/grid-coupons";
import Image from "../../assets/images/first-section.jpg";
import { connect } from "react-redux";
import Contact from "../../components/contact";
import { GetHomeCoupons } from "../../redux/actions/coupons";
import { getPremiumBusiness } from "../../redux/actions/bussiness";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5) * 2,
    marginBottom: theme.spacing(5) * 2,
  },
  iconsContainer: {
    margin: theme.spacing(5),
  },
  icon: {
    objectFit: "contain",
  },
  paper: {
    marginBottom: theme.spacing(3)
  },  
  subText: {
    color: theme.palette.primary.dark,
  },
  subText2: {
    color: theme.palette.secondary.dark,
  },
}));

const Home = (props) => {
  const classes = useStyles();

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
        height={"70vh"}
        showChip={props.showChip}
        redirect="#contact"
      />
      <Box className={classes.iconsContainer}>
        <Grid container justify="space-around">
          <Grid item xs={12} md={3}>
            <Paper elevation={0} className={classes.paper}>
              <Avatar
                src="/descubre.png"
                variant="square"
                className={classes.icon}
              />
              <Typography className={classes.subText} variant="h5">
                Descubre
              </Typography>
              <Typography className={classes.subText2} variant="subtitle1">
                Muchos servicios para ti que tenemos en nuestra comunidad.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper elevation={0} className={classes.paper}>
              <Avatar
                src="/ahorra.png"
                variant="square"
                className={classes.icon}
              />
              <Typography className={classes.subText} variant="h5">
                Ahorra
              </Typography>
              <Typography className={classes.subText2} variant="subtitle1">
                Con las mejores ofertas únicas para nuestros usuarios.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper elevation={0} className={classes.paper}>
              <Avatar
                src="/comparte.png"
                variant="square"
                className={classes.icon}
              />
              <Typography className={classes.subText} variant="h5">
                Comparte
              </Typography>
              <Typography className={classes.subText2} variant="subtitle1">
                Los mejores cupones en tus redes sociales y con tus amigos.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      {/* Commerce Premium */}
      <Container className={classes.container}>
        <Grid container mt={8} mb={8} spacing={1}>
          {business.map((x, i) => (
            <Grid key={i} item xs={3} md={3}>
              <BussinesCard
                key={i}
                slug={x.slug_nombre}
                media={x.ruta_slogan}
                name={x.nombre}
                isOnlyImage={false}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* End Commerce Premium */}
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
