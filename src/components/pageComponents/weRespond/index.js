import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { InlineWidget } from "react-calendly";
import ScrollAnimation from "react-animate-on-scroll";

import RespondWrapper from "./style";
const WeRespond = () => {
  return (
    <RespondWrapper className="st-section" id="support-section">
      <Container className="custom-container">
        <Row>
          <Col lg={3}>
            <ScrollAnimation animateIn="fadeIn">
              <div className="section-head">
                <span className="h4-style">Calendly Scheduler</span>
                <h2 className="h2-style">
                  We Respond Fast.{" "}
                  <span>Share Your Problem And We’ll Help!</span>
                </h2>
              </div>
            </ScrollAnimation>
          </Col>
          <Col lg={9}>
            <ScrollAnimation animateIn="fadeIn">
              <div className="calendly-container">
                <InlineWidget
                  // add this to link for ?hide_gdpr_banner=1
                  url="https://calendly.com/sellertermial/onboarding"
                  styles={{
                    height: "700px",
                    width: "100%",
                    marginTop: "-66px",
                    marginLeft: "5%",
                    paddingRight: "0",
                    justifyContent: "end",
                  }}
                  pageSettings={{
                    backgroundColor: "ffffff",
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: "008989",
                  }}
                />
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </RespondWrapper>
  );
};

export default WeRespond;
