import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

import Accordion from "../../collapse";
import { frequentquestion } from "../../../constants";

import FaqWrapper from "./style";

const FAQ = () => {
  const [openItems, setOpenItems] = useState([]);
  const handleOpen = (id) => {
    if (openItems === id) {
      setOpenItems(null);
    } else {
      setOpenItems(id);
    }
  };

  return (
    <>
      <FaqWrapper className="st-section" id="faq-section">
        <Container className="custom-container">
          <ScrollAnimation animateIn="fadeIn">
            <div className="section-head">
              <h2>Frequently Asked Questions</h2>
            </div>
          </ScrollAnimation>
          <div className="faq-section">
            {frequentquestion.map((faq, index) => {
              return (
                <Accordion
                  title={faq.title}
                  onClick={() => handleOpen(faq.id)}
                  open={openItems === faq.id}
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
