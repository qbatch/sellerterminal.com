import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "gatsby";
import Logo from "../../assets/images/st-logo.svg";
import { Row, Col } from "react-bootstrap";
import Button from "../button";
import AmazonIcon from "../../assets/images/amazon-seller.svg";
import IconFacebook from "../../assets/images/icons/icon-fb.svg";
import IconInstagram from "../../assets/images/icons/icon-instagram.svg";
import IconLinkedin from "../../assets/images/icons/icon-linkedin.svg";
import IconYoutube from "../../assets/images/icons/icon-ytb.svg";
import FooterWrapper from "./style";

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
                  <li>
                    <Link to="/">About</Link>
                  </li>
                  <li>
                    <Link to="/">How we work</Link>
                  </li>
                  <li>
                    <Link to="/">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/">Discover Phase</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={2} sm={3} xs={6}>
              <div className="footer-links d-flex justify-content-between">
                <ul>
                  <li>
                    <Link to="/">Support</Link>
                  </li>
                  <li>
                    <Link to="/">FAQ’s</Link>
                  </li>
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
