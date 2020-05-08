import React from "react";
import { Helmet } from "react-helmet";
import { APP_ROUTE } from "../../environments";

const Seo = (props) => {
  const { title, discount, image, slug } = props;

  return (
    <Helmet>
      <title>{`Cuponesh - ${title}`}</title>
      <meta name="description" content="Cuponesh" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title}></meta>
      <meta property="og:description" content={discount}></meta>
      <meta property="og:image" content={image}></meta>
      <meta property="og:url" content={`${APP_ROUTE}cupon/${slug}`}></meta>
    </Helmet>
  );
};

export default Seo;
