import React, { useState } from "react";
import { navigate } from "gatsby";
import { Link } from "gatsby";

import { Container } from "react-bootstrap";
import Button from "../button/index";
import Drawer from "../headerDrawer";
import Logo from "../../assets/images/st-logo.svg";

import { headerMenu } from "../../constants";
import HeaderWrapper from "./style";

const Index = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <HeaderWrapper>
        <Container className="custom-container">
          <div className="header-main">
            <div className="logo">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <nav className="header-menu">
              <ul>
                {headerMenu.map((menu, ind) => (
                  <li key={ind}>
                    <Link to={menu.to} activeClassName="active">
                      <span>{menu.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="menu-items">
              <Link className="responsive-none" to="/sign-up">
                Sign Up
              </Link>
              <Button
                className="responsive-none"
                onClick={() => navigate("/contact")}
                text="Get Your First $500 Free"
                arrow="true"
                variant="primary"
              />
              <div className="burger-icon" onClick={() => setOpenDrawer(true)}>
                {[1, 2, 3].map((key) => (
                  <span key={key}></span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </HeaderWrapper>
      <Drawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </>
  );
};

export default Index;
