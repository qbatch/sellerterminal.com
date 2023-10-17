import React from "react";
import { Container } from "react-bootstrap";

import Button from "../../button";

import TimeWrapper from "./style";

const Index = (props) => {
  const { title, subtitle, btnText, className } = props;

  return (
    <>
      <TimeWrapper className={`st-section ${className}`}>
        <Container className="custom-container">
          <div className="section-head">
            <h1 className="light">{title}</h1>
            {subtitle && <h4>{subtitle}</h4>}
            <Button variant="outline-secondary" arrow text={btnText} />
          </div>
        </Container>
      </TimeWrapper>
    </>
  );
};

export default Index;
