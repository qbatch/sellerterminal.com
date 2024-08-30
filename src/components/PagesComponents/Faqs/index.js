import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

import Accordion from "../../UiComponents/Collapse";

import FaqWrapper from "./style";

const FAQ = ({ content }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      <FaqWrapper id="faq-section">
        <Container className="custom-container">
          <ScrollAnimation animateIn="fadeIn">
            <div className="faq-head">
              <h2>Frequently <span>Asked Questions</span></h2>
            </div>
          </ScrollAnimation>
          <div className="faq-section">
            {content.map((faq, index) => {
              return (
                <Accordion
                  title={faq.title}
                  open={openIndex === index}
                  onClick={() => handleToggle(index)}
                  key={index}
                >
                  {faq.content}
                </Accordion>
              );
            })}
          </div>
        </Container>
      </FaqWrapper>
    </>
  );
};

export default FAQ;
