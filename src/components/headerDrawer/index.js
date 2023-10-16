import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import Button from "../button/index";
import "react-modern-drawer/dist/index.css";
import { navigate } from "gatsby";
import { Link } from "gatsby";
import CrossIcon from "../../assets/images/icons/drawer-cross.svg";

import { NavDropdown, Row, Col, Dropdown } from "react-bootstrap";

import { Container } from "react-bootstrap";

import DrawerWrapper from "./style";

const headerMenu = [
  {
    name: "About",
    to: "/",
  },
  {
    name: "How we work",
    to: "/",
  },
  {
    name: "Pricing",
    to: "/",
  },
  {
    name: "FAQs",
    to: "/",
  },
  {
    name: "Support",
    to: "/",
  },
];

const Index = (props) => {
  const { openDrawer, setOpenDrawer } = props;

  const [activeState, setActiveState] = useState("services");

  return (
    <Drawer
      open={openDrawer}
      size="400px"
      direction="right"
      className="header-drawer"
    >
      <DrawerWrapper>
        <div className="d-flex flex-column justify-content-between header-drawer-content">
          <div className="cross-icon" onClick={() => setOpenDrawer(false)}>
            <CrossIcon />
          </div>
          <div className="menu-main">
            <ul>
              {headerMenu.map((menu, ind) => (
                <li key={ind}>
                  <Link to={menu.to} activeClassName="active">
                    <span>{menu.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="bottom-content">
            <Link to="/sign-up">Sign Up</Link>
            <Button
              onClick={() => navigate("/contact")}
              text="Get Your First $500 Free"
              arrow="true"
              variant="primary"
            />
          </div>
        </div>
      </DrawerWrapper>
    </Drawer>
  );
};

export default Index;
