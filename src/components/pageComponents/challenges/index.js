import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../../button";
import { StaticImage } from "gatsby-plugin-image";
// import bannerImg from "../../../assets/images/banner-img.png";

import ChallengesWrapper from "./style";

const Challenges = () => {
  return (
    <>
      <ChallengesWrapper>
        <Container className="custom-container">
          <Row>
            <Col md={6}>
              <StaticImage
                src="../../../assets/images/challenge-img.png"
                alt="challenge"
              />
            </Col>
            <Col md={6}>
              <div className="section-head">
                <h4>Your Challenges</h4>
                <h2>
                  Amazon is Your Source of Income
                  <span>(but, it gets difficult sometimes)</span>
                </h2>
                <p>
                  Contacting Amazon seller support is difficult when claiming
                  refunds. Constant fact-checking across millions of records but
                  still receiving ambiguous responses is exhausting. In the
                  process, you may be losing 3 - 4 % of your revenue per month
                  due to:
                </p>
                <div className="challenge-list d-flex gap-4">
                  <ul>
                    <li>FBA overcharged fees</li>
                    <li>Changes Size & Dimension</li>
                    <li>Order Quantity Issues</li>
                    <li>Lost Inventory</li>
                    <li>Damaged Inventory</li>
                    <li>Missing Inbound Inventory</li>
                  </ul>
                  <ul>
                    <li>Amazon FBA Refunds</li>
                    <li>Customer Returns</li>
                    <li>Order Quantity Issues</li>
                    <li>Overchanges FBA Fees</li>
                    <li>FBA Removals</li>
                    <li>Missing Inbound Inventory</li>
                  </ul>
                </div>
                <Button
                  variant="outline-primary"
                  arrow
                  text="Claim Your Refunds For Free"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </ChallengesWrapper>
    </>
  );
};

export default Challenges;
