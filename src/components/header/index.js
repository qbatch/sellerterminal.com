import React, { useState, useEffect, useRef } from "react";
import { navigate } from "gatsby";
import { Link } from "gatsby";

import { Container } from "react-bootstrap";
import Button from "../button/index";
import Drawer from "../headerDrawer";
import Logo from "../../assets/svgs/st-logo.svg";

import { headerMenu } from "../../constants";
import HeaderWrapper from "./style";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef({});

  const observerCallback = (entries, observer) => {
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

    headerMenu.forEach((menu) => {
      const section = document.querySelector(menu.to);
      if (section) {
        sectionRefs.current[menu.to] = section;
        const observer = new IntersectionObserver(
          (entries) => observerCallback(entries, observer),
          options
        );
        observer.observe(section);
      }
    });

    return () => {
      // Clean up observers
      headerMenu.forEach((menu) => {
        const observer = new IntersectionObserver(observerCallback, options);
        if (observer) {
          observer.disconnect();
        }
      });
    };
  }, []);
  return (
    <>
      <HeaderWrapper>
        <Container className="custom-container">
          <div className="header-main">
            <div className="seller-terminal-logo">
              {/* <Link to="/"> */}
              <img src="./seller-terminal-logo.svg" alt="seller-terminal-logo" />
              {/* </Link> */}
            </div>
            <nav className="header-menu">
              <ul>
                {headerMenu.map((menu, ind) => (
                  <li key={ind}>
                    <Link to={menu.to} className={menu.to === `#${activeSection}` ? 'active' : ''}>
                      <span>{menu.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="menu-items">
              <Link className="responsive-none" to="https://app.sellerterminal.com/auth/sign-in">
                Sign In
              </Link>
              <Button
                className="responsive-none"
                onClick={() => navigate('https://app.sellerterminal.com/auth/sign-up')}
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
  )
};

export default Header;
