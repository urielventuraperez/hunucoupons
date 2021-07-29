import React from "react";
import Box from "@material-ui/core/Box";
import HeaderImage from "../../components/header-image";
import Image from "../../assets/images/cuponesh_contacto.jpg";
import Contact from "../../components/contact";

const ContactPage = () => {
  return (
    <Box>
      <HeaderImage
        isHome={"true"}
        image={Image}
        title={"Contáctanos"}
        subtitle={"Tienes alguna duda o simplemente quieres saber mas de nosotros."}
        backgroundColor={"rgba(0, 0, 0, 0.30)"}
        height={"40vh"}
        showChip={false}
        redirect="#contact"
      />
      <Contact />
    </Box>
  );
};

export default ContactPage;
