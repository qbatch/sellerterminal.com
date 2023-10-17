import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

import Button from "../../button";

import { challengeList } from "../../../constants";
import ChallengesWrapper from "./style";

const Challenges = () => {
  return (
    <>
      <ChallengesWrapper className="st-section">
        <Container className="custom-container">
          <Row className="justify-content-betweeen">
            <Col xl={6} lg={6} md={6}>
              <StaticImage
                className="static-image"
                src="../../../assets/images/challenge-img.png"
                alt="challenge"
              />
            </Col>
            <Col xl={{ span: 5, offset: 1 }} lg={6} md={6}>
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
                    {challengeList.map((item, index) => (
                      <li>{item}</li>
                    ))}
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
