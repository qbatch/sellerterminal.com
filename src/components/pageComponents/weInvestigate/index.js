import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Arrow from "../../../assets/images/icons/investigate-arrow.svg";
import IconSuccess from "../../../assets/images/icons/icon-success.svg";
import IconFund from "../../../assets/images/icons/icon-fund.svg";
import IconHappy from "../../../assets/images/icons/icon-happy.svg";
import IconPercent from "../../../assets/images/icons/icon-percent.svg";
import IconPlus from "../../../assets/images/icons/icon-plus.svg";
// import bannerImg from "../../../assets/images/banner-img.png";

import InvestigateWrapper from "./style";

const WeInvestigate = () => {
  return (
    <>
      <InvestigateWrapper className="st-section">
        <Container className="custom-container">
          <h2 className="light">
            We Investigate <Arrow /> We File Cases <Arrow /> We Get You Paid
          </h2>
          <Row className="investigate-row">
            <Col sm={6} lg={4} className="investigate-section">
              <div className="d-flex investigate-inner">
                <IconSuccess className="investigate-icon" />
                <div>
                  <h1>
                    <span>99</span>
                    <IconPercent />
                  </h1>
                  <h4>Successful Cases</h4>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={4} className="investigate-section">
              <div className="d-flex investigate-inner">
                <IconFund className="investigate-icon" />
                <div>
                  <h1>
                    <span>$1M</span>
                    <IconPlus />
                  </h1>
                  <h4>Funds Recovered</h4>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={4} className="investigate-section">
              <div className="d-flex investigate-inner">
                <IconHappy className="investigate-icon" />
                <div>
                  <h1>
                    <span>1000</span>
                    <IconPlus />
                  </h1>
                  <h4>Happy Sellers</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </InvestigateWrapper>
    </>
  );
};

export default WeInvestigate;
