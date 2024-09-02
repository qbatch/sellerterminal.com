import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";

import { ThemeProvider } from "styled-components";
import Theme from "../theme/theme-variable";
import GlobalStyle from "../theme/global-style";

const Header = lazy(()=> import('../components/PagesComponents/Header'));
const Footer = lazy(()=> import('../components/PagesComponents/Footer'));

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Helmet>
        <html lang='en-US' />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="16x16" />
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
