import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import HeaderImage from "../../components/header-image";
import categoria from "../../assets/images/categoria.jpg";

const useStyles = makeStyles(theme => ({}));

const Category = () => {
  const classes = useStyles();
  return (
    <div>
      <HeaderImage
        image={categoria}
        title={"Categoria"}
        height={"75vh"}
        backgroundColor={"rgba(0, 0, 0, 0.20)"}
      />
      <Box mt={5} mb={5}>
        {"Hola mundo"}
      </Box>
    </div>
  );
};

export default Category;
