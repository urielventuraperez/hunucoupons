import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import GridCoupons from "../../components/grid-coupons";
import { connect } from "react-redux";
import { viewMyFavorites } from "../../redux/actions/favorites";
import HeaderImage from "../../components/header-image";
import Image from "../../assets/images/cuponesh-favoritos.jpg";

const Favorites = (props) => {
  const { getMyFavorites, myFavorites, loadFavorites, auth } = props;
  useEffect(() => {
    if (myFavorites && myFavorites.length) {
    } else {
      getMyFavorites();
    }
  }, [getMyFavorites]);

  return (
    <Box>
      <Box my={2}>
        <HeaderImage
          isHome={"true"}
          image={Image}
          title={"Mis Cupones Favoritos"}
          subtitle={"¡Mira los cupones que más te han gustado!"}
          backgroundColor={"rgba(0, 0, 0, 0.50)"}
          height={"40vh"}
          showChip={false}
          redirect="#contact"
        />
        {/* New coupons section */}
        <GridCoupons
          loadCoupons={loadFavorites}
          coupons={myFavorites}
          auth={auth}
        />
        {/* End new coupons section */}
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    loadFavorites: state.favorites.loadFavorites,
    myFavorites: state.favorites.myFavorites,
    auth: state.auth.hasToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMyFavorites: () => {
      dispatch(viewMyFavorites());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
