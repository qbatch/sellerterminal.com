import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";

import { ThemeProvider } from "styled-components";
import Theme from "../theme/theme-variable";
import GlobalStyle from "../theme/global-style";

import Header from "../components/header";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <Helmet>
        <link rel="icon" type="image/png" href="/favicon.png" sizes="16x16" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
          rel="stylesheet"
        />
        {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-BNQQQD2B');`}
        </script>
        {/* End Google Tag Manager */}
      </Helmet>
      <GlobalStyle />
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-BNQQQD2B"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/*  End Google Tag Manager (noscript) */}
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
