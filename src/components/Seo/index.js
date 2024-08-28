import React from "react";
import { useSiteMetadata } from "../../hooks/use-site-metadata.jsx";

const SEO = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    keywords,
    robots,
  } = useSiteMetadata();
  const seo = {
    robots: robots,
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    keywords,
  };
  return (
    <>
      <title>{seo.title}</title>
      <meta name="robots" content={seo.robots} />
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.url} />
      <meta name="keywords" content={seo.keywords} />
      <meta
        name="google-site-verification"
        content="opICxee3noY9Tt6UqmCqi-bSE4HaTxwIVwyuielRJSI"
      />
      <meta httpEquiv="content-language" content="en-us" />
      {children}
    </>
  );
};
export default SEO;
