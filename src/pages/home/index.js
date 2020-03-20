import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import HeaderImage from "../../components/header-image";
import BussinesCard from "../../components/card";
import { PREMIUM_BUSSINES } from "../../utils/business";
import LoginDialog from "../../components/login";
import { ACCESS_TOKEN } from "../../environments";
import HomeCoupons from "../../components/home-coupons";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(5) * 2,
    marginBottom: theme.spacing(5) * 2
  },
}));

const Home = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if( !localStorage.getItem(ACCESS_TOKEN) ) {
      setTimeout(() => handleClickOpen(), 10000);
    } 
  }, []);


  return (
    <React.Fragment>
      <HeaderImage />
      {/* Commerce Premium */}
      <Container className={classes.container}>
        <Grid container mt={8} mb={8} spacing={3}>
          {PREMIUM_BUSSINES.map((bussines, i) => (
            <Grid key={i} item xs={12} md={3}>
              <BussinesCard
                key={i}
                media={bussines.logo}
                name={bussines.name}
                isOnlyImage={false}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* End Commerce Premium */}
      {/* New coupons section */}
        <HomeCoupons />
      {/* End new coupons section */}
      <LoginDialog open={open} onClose={handleClose} />
    </React.Fragment>
  );
};

export default Home;
