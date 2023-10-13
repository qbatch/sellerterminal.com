import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../../button";
import ReclaimImg from "../../../assets/images/reclaim-img.svg";

import TimeWrapper from "./style";

const Index = (props) => {
  const { title, subtitle, btnText } = props;
  return (
    <>
      <TimeWrapper className="st-section">
        <Container className="custom-container">
          <div className="section-head">
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
            <Button variant="outline-secondary" arrow text={btnText} />
          </div>
        </Container>
      </TimeWrapper>
    </>
  );
};

export default Index;
