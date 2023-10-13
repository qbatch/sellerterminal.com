import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../../button";
import { StaticImage } from "gatsby-plugin-image";
// import bannerImg from "../../../assets/images/banner-img.png";

import ChallengesWrapper from "./style";

const Challenges = () => {
  return (
    <>
      <ChallengesWrapper className="st-section">
        <Container className="custom-container">
          <Row className="justify-content-betweeen">
            <Col md={6}>
              <StaticImage
                src="../../../assets/images/challenge-img.png"
                alt="challenge"
              />
            </Col>
            <Col md={{ span: 5, offset: 1 }}>
              <div className="section-head">
                <h4>Your Challenges</h4>
                <h2>
                  Amazon is Your Source of Income{" "}
                  <span>(but, it gets difficult sometimes)</span>
                </h2>
                <p>
                  Contacting Amazon seller support is difficult when claiming
                  refunds. Constant fact-checking across millions of records but
                  still receiving ambiguous responses is exhausting. In the
                  process, you may be losing 3 - 4 % of your revenue per month
                  due to:
                </p>
                <div className="challenge-list d-flex">
                  <ul>
                    <li>FBA overcharged fees</li>
                    <li>Amazon FBA Refunds</li>
                    <li>Changes Size & Dimension</li>
                    <li>Customer Returns</li>
                    <li>Order Quantity Issues</li>
                    <li>Overchanges FBA Fees</li>
                    <li>Lost Inventory</li>
                    <li>FBA Removals</li>
                    <li>Damaged Inventory</li>
                    <li>Missing Inbound Inventory</li>
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
