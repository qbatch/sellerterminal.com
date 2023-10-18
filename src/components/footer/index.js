import React from "react";

import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import Button from "../button";
import Logo from "../../assets/images/st-logo.svg";
import AmazonIcon from "../../assets/images/amazon-seller.svg";
import IconFacebook from "../../assets/images/icons/icon-fb.svg";
import IconInstagram from "../../assets/images/icons/icon-instagram.svg";
import IconLinkedin from "../../assets/images/icons/icon-linkedin.svg";
import IconYoutube from "../../assets/images/icons/icon-ytb.svg";

import { footerlinksPrimary } from "../../constants";
import FooterWrapper from "./style";
import ScrollAnimation from "react-animate-on-scroll";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-top">
        <Container className="custom-container">
          <div className="d-flex align-items-center justify-content-between footer-top-content">
            <div className="logo">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <div className="auth-buttons">
              <Link to="/">Sign In</Link>
              <Button variant="primary" arrowSimple text="Sign Up" />
            </div>
          </div>
        </Container>
      </div>
      <div className="footer-mid">
        <Container className="custom-container">
          <Row>
            <Col md={4} sm={6}>
              <AmazonIcon className="footer-img" />
            </Col>
            <Col md={2} sm={3} xs={6}>
              <div className="footer-links d-flex justify-content-between">
                <ul>
                  {footerlinksPrimary.slice(0, 4).map((menu, ind) => (
                    <li key={ind}>
                      <Link to={menu.to} activeClassName="active">
                        <span>{menu.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col md={2} sm={3} xs={6}>
              <div className="footer-links d-flex justify-content-between">
                <ul>
                  {footerlinksPrimary.slice(4).map((menu, ind) => (
                    <li key={ind}>
                      <Link to={menu.to} activeClassName="active">
                        <span>{menu.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="footer-social">
                <p>Follow Us at</p>
                <ul>
                  <li>
                    <Link to="/">
                      <IconFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <IconInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <IconLinkedin />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <IconYoutube />
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <Container>
          <p>Copyright © 2023. SellerTerminal. All rights reserved.</p>
        </Container>
      </div>
    </FooterWrapper>
  );
};
export default Footer;
