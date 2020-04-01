import React from "react";
import Box from "@material-ui/core/Box";
import HeaderImage from "../../components/header-image";
import categoria from "../../assets/images/categoria.jpg";
import GridCoupons from "../../components/grid-coupons";

const Category = (props) => {
  const categorySlug = props.match.params.slug
  return (
    <div>
      <HeaderImage
        image={categoria}
        title={categorySlug}
        height={"75vh"}
        backgroundColor={"rgba(0, 0, 0, 0.20)"}
      />
      <Box mt={5} mb={5}>
        <GridCoupons slug={categorySlug} isCategory={props.isCategory} />
      </Box>
    </div>
  );
};

export default Category;
