import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

import { Container } from "react-bootstrap";
import Button from "../../UiComponents/Button";
import Drawer from "../HeaderDrawer";
import { headerMenu } from "../../../constants";
import SellerTerminalLogo from "../../../../static/seller-terminal-logo.svg";
import StWhiteLogo from "../../../../static/st-white-logo.svg";

import HeaderWrapper from "./style";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionRefs = useRef({});
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observers = [];

    headerMenu.forEach((menu) => {
      if (menu.isSection) {
        const section = document.querySelector(menu.to);
        if (section) {
          sectionRefs.current[menu.to] = section;
          const observer = new IntersectionObserver(observerCallback, options);
          observer.observe(section);
          observers.push(observer);
        }
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const isActive = (menu) => {
    if (menu.isSection && location.pathname === "/") {
      return menu.to === `#${activeSection}` ? "active" : "";
    } else if (!menu.isSection && location.pathname === menu.to) {
      return "active";
    }
    return "";
  };

  return (
    <>
      <HeaderWrapper isScrolled={isScrolled}>
        <Container className="custom-container">
          <div className="header-main">
            <div className="seller-terminal-logo">
              <Link to="/">
                <img
                  src={isScrolled ? SellerTerminalLogo : StWhiteLogo}
                  alt="seller-terminal-logo"
                  width={174}
                  height={39}
                />
              </Link>
            </div>
            <div className="d-flex align-items-center gap-xl-5 gap-4">
              <nav className="header-menu">
                <ul>
                  {headerMenu.map((menu, ind) => (
                    <li key={ind}>
                      <Link
                        to={menu.to}
                        className={isActive(menu)}
                      >
                        <span>{menu.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="menu-items">
                <a
                  className="responsive-none"
                  href="https://app.sellerterminal.com/auth/sign-in"
                >
                  Sign In
                </a>
                <Button
                  className={`responsive-none ${isScrolled ? "" : "btn-secondary"}`}
                  onClick={() =>
                    (window.location.href = "https://app.sellerterminal.com/auth/sign-up")
                  }
                  text="Get your free Audit"
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
          </div>
        </Container>
      </HeaderWrapper>
      <Drawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </>
  );
};

export default Header;
