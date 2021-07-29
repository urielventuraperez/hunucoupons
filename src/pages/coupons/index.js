import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import GridCoupons from "../../components/grid-coupons";
import CouponsPagination from "../../components/pagination";
import { connect } from "react-redux";
import { GetCoupons } from "../../redux/actions/coupons";

const Coupons = (props) => {
  const [currentPage, setCurrentPage] = useState(0);

  const { GetCoupons, coupons, loadCoupons, auth } = props;
  useEffect(() => {
    GetCoupons(currentPage);
  }, [GetCoupons, currentPage]);

  const handleChange = (event, value) => {
    setCurrentPage(value - 1);
  };

  return (
    <Box>
      <Box my={2}>
        {/* New coupons section */}
        <GridCoupons
          loadCoupons={loadCoupons}
          coupons={coupons}
          auth={auth}
          title="Encuentra tu cupón"
        />
        {/* End new coupons section */}
      </Box>
      <CouponsPagination
        handleChange={handleChange}
        currentPage={currentPage}
        pages={props.pages}
      />
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    loadCoupons: state.coupons.loadCoupons,
    coupons: state.coupons.coupons,
    pages: state.coupons.pages,
    auth: state.auth.hasToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetCoupons: (page) => {
      dispatch(GetCoupons(page));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Coupons);
