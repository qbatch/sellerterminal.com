import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../../button";
import { StaticImage } from "gatsby-plugin-image";
import Obligation from "../../../assets/images/no-obligation.svg";
import Recovery from "../../../assets/images/recovery-estimate.svg";
import Traceable from "../../../assets/images/traceable.svg";
import Money from "../../../assets/images/money.svg";

import AboutWrapper from "./style";

const About = () => {
  return (
    <>
      <AboutWrapper className="st-section">
        <Container className="custom-container">
          <div className="section-head">
            <h4>About Us</h4>
            <h2>
              All we’ve ever known is <span>“Return on Investment”</span>
            </h2>
            <p>
              Seller Terminal offers Amazon Reimbursement service that tracks
              fees, orders, inventory, returns, and possible discrepancies under
              Amazon’s terms of Service. Our multi-faceted software reviews and
              audits your account while our recovery team files the case
              assuring returns in your bank account. 
            </p>
          </div>
          <Row>
            <Col md={3}>
              <div className="about-section">
                <Obligation />
                <p>
                  Free, No-obligation <br /> Audit
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="about-section">
                <Recovery />
                <p>
                  Recovery Estimate in
                  <br /> 8-10 hrs
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="about-section">
                <Traceable />
                <p>
                  100% Traceable Funds
                  <br /> Transfer
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="about-section">
                <Money />
                <p>
                  We Trace Money
                  <br /> Others Skip
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </AboutWrapper>
    </>
  );
};

export default About;
