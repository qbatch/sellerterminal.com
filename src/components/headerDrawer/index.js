import React from "react";
import Drawer from "react-modern-drawer";
import { navigate } from "gatsby";
import { Link } from "gatsby";
import "react-modern-drawer/dist/index.css";

import Button from "../button/index";
import CrossIcon from "../../assets/svgs/icons/drawer-cross.svg";
import LogoWhite from "../../assets/svgs/st-logo-white.svg";
import { headerMenu } from "../../constants";

import DrawerWrapper from "./style";

const Index = (props) => {
  const { openDrawer, setOpenDrawer } = props;

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
            <div className="drawer-logo">
              <LogoWhite />
            </div>
            <ul>
              {headerMenu.map((menu, ind) => (
                <li key={ind}>
                  <Link to={menu.to} activeClassName="active">
                    <span>{menu.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="bottom-content">
              <Button
                onClick={() => navigate("/")}
                text="Sign In"
                variant="text"
                className="text-white"
              />
              <Button
                onClick={() => navigate("/")}
                text="Get Your First $500 Free"
                arrow="true"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </DrawerWrapper>
    </Drawer>
  );
};

export default Index;
