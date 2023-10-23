import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import ScrollAnimation from "react-animate-on-scroll";

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
              <ScrollAnimation animateIn="fadeIn">
                <StaticImage
                  className="static-image"
                  src="../../../assets/images/challenge-img.png"
                  alt="source of income challenge"
                  title="source of income challenge"
                />
              </ScrollAnimation>
            </Col>
            <Col xl={{ span: 5, offset: 1 }} lg={6} md={6}>
              <div className="section-head">
                <ScrollAnimation animateIn="fadeIn">
                  <span className="h4-style">Your Challenges</span>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn">
                  <h2 className="h2-style">
                    Amazon is Your Source of Income{" "}
                    <span>(but, it gets difficult sometimes)</span>
                  </h2>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn">
                  <p>
                    Contacting Amazon seller support is difficult when claiming
                    refunds. Constant fact-checking across millions of records
                    but still receiving ambiguous responses is exhausting. In
                    the process, you may be losing 3 - 4 % of your revenue per
                    month due to:
                  </p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn">
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
                </ScrollAnimation>
              </div>
            </Col>
          </Row>
        </Container>
      </ChallengesWrapper>
    </>
  );
};

export default Challenges;
