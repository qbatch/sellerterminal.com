import React from "react";
import { Container } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

import Button from "../../button";

import TimeWrapper from "./style";

const Index = (props) => {
  const { title, subtitle, btnText, className } = props;

  return (
    <>
      <TimeWrapper className={`st-section ${className}`}>
        <Container className="custom-container">
          <div className="section-head">
            {/* <ScrollAnimation animateIn="fadeIn"> */}
            <h2 className="light h1-style">{title}</h2>
            {subtitle && <h3 className="h4-style">{subtitle}</h3>}
            <Button variant="outline-secondary" arrow text={btnText} />
            {/* </ScrollAnimation> */}
          </div>
        </Container>
      </TimeWrapper>
    </>
  );
};

export default Index;
