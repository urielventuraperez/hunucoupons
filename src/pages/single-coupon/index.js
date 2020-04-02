import React from "react";
import FullCoupon from "../../components/full-coupon";
import Hunucma from "../../assets/images/hunucma.jpg";

const SingleCoupon = props => {
  return (
    <div>
      <FullCoupon
        image={Hunucma}
        title={"Nombre Cupon"}
        height={"70vh"}
        backgroundColor={"rgba(0, 0, 0, 0.65)"}
        showChip={props.showChip}
        showFavorite={props.showFavorite}
      />
    </div>
  );
};

export default SingleCoupon;
