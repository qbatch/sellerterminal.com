import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

import Obligation from "../../../assets/images/no-obligation.svg";
import Recovery from "../../../assets/images/recovery-estimate.svg";
import Traceable from "../../../assets/images/traceable.svg";
import Money from "../../../assets/images/money.svg";

import AboutWrapper from "./style";

const aboutList = [
  {
    icon: <Obligation />,
    content: (
      <>
        Free, No-obligation <br /> Audit
      </>
    ),
  },
  {
    icon: <Recovery />,
    content: (
      <>
        Recovery Estimate in
        <br /> 8-10 hrs
      </>
    ),
  },
  {
    icon: <Traceable />,
    content: (
      <>
        100% Traceable Funds
        <br /> Transfer
      </>
    ),
  },
  {
    icon: <Money />,
    content: (
      <>
        We Trace Money
        <br /> Others Skip
      </>
    ),
  },
];
const About = () => {
  return (
    <>
      <AboutWrapper className="st-section" id="about-section">
        <Container className="custom-container">
          <div className="section-head">
            {/* <ScrollAnimation animateIn="fadeIn"> */}
            <span className="h4-style">About Us</span>
            {/* </ScrollAnimation> */}
            {/* <ScrollAnimation animateIn="fadeIn" delay="1s"> */}
            <h2 className="h2-style">
              All we’ve ever known is <span>“Return on Investment”</span>
            </h2>
            {/* </ScrollAnimation> */}
            {/* <ScrollAnimation animateIn="fadeIn" delay="2s"> */}
            <p>
              Seller Terminal offers Amazon Reimbursement service that tracks
              fees, orders, inventory, returns, and possible discrepancies under
              Amazon’s terms of Service. Our multi-faceted software reviews and
              audits your account while our recovery team files the case
              assuring returns in your bank account. 
            </p>
            {/* </ScrollAnimation> */}
          </div>
          <Row>
            {aboutList.map((item, index) => (
              <Col
                key={index}
                md={3}
                sm={6}
                xs={6}
                className="about-section-col"
              >
                <div className="about-section">
                  {/* <ScrollAnimation animateIn="rotateIn"> */}
                  {item.icon}
                  {/* </ScrollAnimation> */}
                  {/* <ScrollAnimation animateIn="fadeInUp"> */}
                  <p>{item.content}</p>
                  {/* </ScrollAnimation> */}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </AboutWrapper>
    </>
  );
};

export default About;
