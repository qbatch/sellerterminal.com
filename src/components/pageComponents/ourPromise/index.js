import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../../button";
import ReclaimImg from "../../../assets/images/reclaim-img.svg";

import PromiseWrapper from "./style";

const OurPromise = () => {
  return (
    <>
      <PromiseWrapper className="st-section">
        <Container className="custom-container">
          <Row>
            <Col md={6}>
              <div className="section-head">
                <h4>Our Promise</h4>
                <h2>
                  Don’t Pay Unless You {""}
                  <span>Receive Your Refunds!</span>
                </h2>
                <Button
                  variant="outline-primary"
                  arrow
                  text="$3M+ in annual revenue?"
                />
                <p>Get Special Discounts</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="promise-reclaim">
                <h3>Let’s Reclaim Your Money</h3>
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
            </Col>
          </Row>
        </Container>
      </PromiseWrapper>
    </>
  );
};

export default OurPromise;
