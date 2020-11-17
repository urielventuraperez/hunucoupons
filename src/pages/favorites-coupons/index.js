import React, {useEffect} from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import GridCoupons from "../../components/grid-coupons";
import { connect } from 'react-redux';
import { viewMyFavorites } from "../../redux/actions/favorites";

const Favorites = (props) => {

  const {getMyFavorites, myFavorites, loadFavorites, auth} = props;
  useEffect(()=>{
    if(myFavorites && myFavorites.length){
    } else {
      getMyFavorites();
    }
  }, [getMyFavorites])

    return(
        <Container>
        <Box my={2}>
      {/* New coupons section */}
    <GridCoupons
        loadCoupons={loadFavorites}
        coupons={myFavorites}
        auth={auth}
        title='Mis cupones favoritos'
      />
      {/* End new coupons section */}
        </Box>
      </Container>
    )
}

const mapStateToProps = (state) => {
  return {
    loadFavorites: state.favorites.loadFavorites,
    myFavorites: state.favorites.myFavorites,
    auth: state.auth.hasToken
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMyFavorites: () => {
      dispatch(viewMyFavorites());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);