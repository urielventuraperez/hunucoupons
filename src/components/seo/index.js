import React from 'react';
import { Helmet } from "react-helmet";

const Seo = (props) => {

  const { title, description } = props;

  return(
    <Helmet>
      <title>{`Cuponesh ${title}`}</title>
      <meta property="og:title" content="your_link_title"></meta>
    </Helmet>
  )

}

export default Seo;