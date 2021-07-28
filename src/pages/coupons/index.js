import React, {useEffect} from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import GridCoupons from "../../components/grid-coupons";
import CouponsPagination from "../../components/pagination";
import { connect } from 'react-redux';
import { GetCoupons } from "../../redux/actions/coupons";

const Coupons = (props) => {

  const {GetCoupons, coupons, loadCoupons, auth} = props;
  useEffect(()=>{
    if(coupons && coupons.length){
    } else {
        GetCoupons();
    }
  }, [GetCoupons])

    return(
        <Container>
        <Box my={2}>
      {/* New coupons section */}
    <GridCoupons
        loadCoupons={loadCoupons}
        coupons={coupons}
        auth={auth}
        title='Encuentra tu cupón'
      />
      {/* End new coupons section */}
        </Box>
        <CouponsPagination />
      </Container>
    )
}

const mapStateToProps = (state) => {
  return {
    loadCoupons: state.coupons.loadCoupons,
    coupons: state.coupons.coupons,
    auth: state.auth.hasToken
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    GetCoupons: () => {
      dispatch(GetCoupons());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Coupons);