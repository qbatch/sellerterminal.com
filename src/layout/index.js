import * as React from "react";
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
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
