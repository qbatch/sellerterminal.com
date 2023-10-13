import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../../button";
import SignupImage from "../../../assets/images/signup-img.svg";
import ConnectAccount from "../../../assets/images/connect-account.svg";
import RecoveryAgent from "../../../assets/images/recovery-agent.svg";
import ReviewInventory from "../../../assets/images/review-inventory.svg";
import FileCase from "../../../assets/images/file-case.svg";
import GetMoney from "../../../assets/images/getmoney.svg";

import RefundWrapper from "./style";

const GettingRefund = () => {
  const stepsData = [
    {
      id: 1,
      title: "SignUp",
      description:
        "Get started with a zero-cost, no-obligation audit, and get a report on available refunds.",
      image: <SignupImage />,
      reverse: false,
    },
    {
      id: 2,
      title: "Connect Your Account",
      description:
        "We get access to your account to import and audit your FBA Transactions.",
      image: <ConnectAccount />,
      reverse: true,
    },
    {
      id: 3,
      title: "We Assign Recovery Agent",
      description:
        "You add our dedicated recovery agent to your accounts to file the case on your behalf.",
      image: <RecoveryAgent />,
      reverse: false,
    },
    {
      id: 4,
      title: "We Review Your Inventory",
      description:
        "Seller Terminal reviews products, inventory, orders, and returns that are eligible for reimbursement claims.",
      image: <ReviewInventory />,
      reverse: true,
    },
    {
      id: 5,
      title: "We File Your Case",
      description:
        "You receive a report that provides a detailed review of the money returns against each case.",
      image: <FileCase />,
      reverse: false,
    },
    {
      id: 6,
      title: "You Get Your Money",
      description:
        "You get your Amazon reimbursement in your seller accounts directly. Easy peasy!",
      image: <GetMoney />,
      reverse: true,
    },
  ];
  return (
    <>
      <RefundWrapper className="st-section">
        <Container className="custom-container">
          <div className="section-head">
            <h4>How we work</h4>
            <h2>
              Getting Refunds With <span>Seller Terminal is Easy</span>
            </h2>
            <p>
              Process to recover your lost revenue from Amazon is a cakewalk
              now:
            </p>
          </div>
          <div className="refund-content">
            {stepsData.map((step, index) => (
              <Row
                key={step.id}
                data-value={step.id}
                className={`align-items-center ${
                  step.reverse ? "flex-md-row-reverse" : ""
                } refund-row`}
              >
                <Col md={6}>
                  <div
                    className={`refund-section-content ${
                      !step.reverse ? "refund-content-ba" : ""
                    }`}
                  >
                    <div className="refund-image">{step.image}</div>
                  </div>
                </Col>
                <Col md={6}>
                  <div
                    className={`refund-section-content ${
                      step.reverse ? "refund-content-ba" : ""
                    }`}
                  >
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </Col>
              </Row>
            ))}
          </div>
        </Container>
      </RefundWrapper>
    </>
  );
};

export default GettingRefund;
