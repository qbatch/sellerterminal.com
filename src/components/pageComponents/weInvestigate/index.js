import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import CountUp from "react-countup";
// import VisibilitySensor from "react-visibility-sensor";

import Arrow from "../../../assets/images/icons/investigate-arrow.svg";
import IconSuccess from "../../../assets/images/icons/icon-success.svg";
import IconFund from "../../../assets/images/icons/icon-fund.svg";
import IconHappy from "../../../assets/images/icons/icon-happy.svg";
import IconPercent from "../../../assets/images/icons/icon-percent.svg";
import IconPlus from "../../../assets/images/icons/icon-plus.svg";

import InvestigateWrapper from "./style";

const WeInvestigate = () => {
  // const [startCountUp, setStartCountUp] = useState(false);

  // // Function to handle when the section becomes visible
  // const handleVisibilityChange = (isVisible) => {
  //   if (isVisible) {
  //     setStartCountUp(true);
  //   }
  // };

  return (
    <>
      <InvestigateWrapper className="st-section">
        <Container className="custom-container">
          <h2 className="light h2-style">
            We Investigate <Arrow /> We File Cases <Arrow /> We Get You Paid
          </h2>
          <Row className="investigate-row justify-content-center">
            <Col sm={6} lg={4} className="investigate-section">
              {/* <ScrollAnimation animateIn="fadeInUp"> */}
              {/* <VisibilitySensor
                onChange={handleVisibilityChange}
                partialVisibility={true}
              >
                {({ isVisible }) => ( */}
              {/* <div
                    className={`d-flex investigate-inner animated ${
                      isVisible ? "fadeInUp" : ""
                    }`}
                  > */}
              <div className={`d-flex investigate-inner`}>
                <IconSuccess className="investigate-icon" />
                <div>
                  <div className="h1-style">
                    {/* {startCountUp && isVisible && ( */}
                    <CountUp start={0} end={99} duration={2}>
                      99
                    </CountUp>
                    {/* )} */}
                    <IconPercent />
                  </div>
                  <h3 className="h4-style">Successful Cases</h3>
                </div>
              </div>
              {/* )} */}
              {/* </VisibilitySensor> */}
              {/* </ScrollAnimation> */}
            </Col>
            <Col sm={6} lg={4} className="investigate-section">
              {/* <ScrollAnimation animateIn="fadeInUp">
                <VisibilitySensor
                  onChange={handleVisibilityChange}
                  partialVisibility={true}
                >
                  {({ isVisible }) => ( */}
              <div className="d-flex investigate-inner">
                <IconFund className="investigate-icon" />
                <div>
                  <div className="h1-style">
                    {/* {startCountUp && isVisible && ( */}
                    <CountUp
                      start={1}
                      prefix="$"
                      suffix="M"
                      end={1}
                      duration={2}
                    >
                      1
                    </CountUp>
                    {/* )} */}
                    <IconPlus />
                  </div>
                  <h3 className="h4-style">Funds Recovered</h3>
                </div>
              </div>
              {/* )} */}
              {/* </VisibilitySensor> */}
              {/* </ScrollAnimation> */}
            </Col>
            <Col sm={6} lg={4} className="investigate-section">
              {/* <ScrollAnimation animateIn="fadeInUp"> */}
              {/* <VisibilitySensor
                  onChange={handleVisibilityChange}
                  partialVisibility={true}
                >
                  {({ isVisible }) => ( */}
              <div className="d-flex investigate-inner">
                <IconHappy className="investigate-icon" />
                <div>
                  <div className="h1-style">
                    {/* {startCountUp && isVisible && ( */}
                    <CountUp start={1} end={1000} duration={2} separator="">
                      1000
                    </CountUp>
                    {/* )} */}
                    <IconPlus />
                  </div>
                  <h3 className="h4-style">Happy Sellers</h3>
                </div>
              </div>
              {/* )}
                </VisibilitySensor>
              </ScrollAnimation> */}
            </Col>
          </Row>
        </Container>
      </InvestigateWrapper>
    </>
  );
};

export default WeInvestigate;
