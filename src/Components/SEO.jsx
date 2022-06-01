import React,{ useState} from 'react';
import { Helmet } from 'react-helmet-async';


const SEO = ({ extratitle, description, children }) => {
  const title = 'Scarborough UBF Church';
  const metaTitle = extratitle ? `${title}|${extratitle}` : `${title}`;
  const metadescription = description
    ? description
    : 'University Bible Fellowship (UBF) is an international evangelical church (non-denominational) and network of churches dedicated to Christ';

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="title" content={metaTitle} />
        <meta name="description" content={metadescription} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metadescription} />
        <meta
          property="og:image"
          content="https://ubf.org/icons/ubf_logo_text.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content={metaTitle} />
        <meta property="twitter:description" content={metadescription} />
        <meta
          property="twitter:image"
          content="https://ubf.org/icons/ubf_logo_text.jpg"
        />
      </Helmet>
      {children}
    </>
  );
};

export default SEO;
