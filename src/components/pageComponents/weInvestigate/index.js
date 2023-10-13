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
          <h2>
            We Investigate <Arrow /> We File Cases <Arrow /> We Get You Paid
          </h2>
          <Row>
            <Col md={4} className="investigate-section">
              <div className="d-flex investigate-inner">
                <IconSuccess className="investigate-icon" />
                <div>
                  <h3>
                    <span>99</span>
                    <IconPercent />
                  </h3>
                  <p>Successful Cases</p>
                </div>
              </div>
            </Col>
            <Col md={4} className="investigate-section">
              <div className="d-flex investigate-inner">
                <IconFund className="investigate-icon" />
                <div>
                  <h3>
                    <span>$1M</span>
                    <IconPlus />
                  </h3>
                  <p>Funds Recovered</p>
                </div>
              </div>
            </Col>
            <Col md={4} className="investigate-section">
              <div className="d-flex investigate-inner">
                <IconHappy className="investigate-icon" />
                <div>
                  <h3>
                    <span>1000</span>
                    <IconPlus />
                  </h3>
                  <p>Happy Sellers</p>
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
