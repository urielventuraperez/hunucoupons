import React from "react";
import { Helmet } from "react-helmet";
import { APP_ROUTE } from "../../environments";

const Seo = (props) => {
  const { title, discount, image, slug } = props;

  return (
    <Helmet>
      <title>{`Cuponesh - ${title}`}</title>
      <meta name="description" content="Cuponesh" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={discount} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={`${APP_ROUTE}cupon/${slug}`} />
    </Helmet>
  );
};

export default Seo;
