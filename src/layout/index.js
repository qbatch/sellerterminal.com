import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";

import { ThemeProvider } from "styled-components";
import Theme from "../theme/theme-variable";
import GlobalStyle from "../theme/global-style";

import Header from "../components/PagesComponents/Header";
import Footer from "../components/PagesComponents/Footer";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Helmet>
        <html lang='en-US' />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="16x16" />
        <link
          key="space-grotesk-bold-woff2"
          rel="preload"
          href='/fonts/SpaceGrotesk-Bold.woff2'
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />,
      </Helmet>
      <GlobalStyle />
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        {children}
        <Footer />
      </Suspense>
    </ThemeProvider>
  );
};

export default Layout;
