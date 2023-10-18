import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

import Button from "../../button";
import ReclaimImg from "../../../assets/images/reclaim-img.svg";

import PromiseWrapper from "./style";

const OurPromise = () => {
  return (
    <>
      <PromiseWrapper className="st-section" id="pricing-section">
        <Container className="custom-container">
          <Row>
            <Col lg={6}>
              <div className="section-head">
                <ScrollAnimation animateIn="fadeIn">
                  <span className="h4-style">Our Promise</span>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" delay="1s">
                  <h2 className="h2-style">
                    Don’t Pay Unless You {""}
                    <span>Receive Your Refunds!</span>
                  </h2>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" delay="2s">
                  <Button
                    variant="outline-primary"
                    arrow
                    text="$3M+ in annual revenue?"
                  />
                  <p>Get Special Discounts</p>
                </ScrollAnimation>
              </div>
            </Col>
            <Col lg={6}>
              <ScrollAnimation animateIn="fadeIn" delay="1s">
                <div className="promise-reclaim">
                  <h3 className="h3-style">Let’s Reclaim Your Money</h3>
                  <div className="reclaim-main">
                    <div className="reclaim-left">
                      <ul>
                        <li>Only 20% – The perfect price</li>
                        <li>Get your first $500 free</li>
                        <li>Personal recovery agent</li>
                      </ul>
                      <Button
                        variant="outline-secondary"
                        arrow
                        text="Let’s Reclaim Your Money"
                      />
                    </div>
                    <div className="reclaim-right">
                      <ReclaimImg />
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
      </PromiseWrapper>
    </>
  );
};

export default OurPromise;
