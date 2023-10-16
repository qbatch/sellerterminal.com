import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "../../collapse";

import FaqWrapper from "./style";
const FAQ = () => {
  const [openItems, setOpenItems] = useState([]);
  const frequentquestion = [
    {
      id: 1,
      title: "How far can you go back to collect reimbursements for me?",
      content:
        "Our Amazon reimbursement specialists can submit up to 18 months old Amazon FBA reimbursement cases offering in-depth refund audits and reports.  Besides, the time may depend on your FBA reimbursement case.",
    },
    {
      id: 2,
      title: "What types of cases do you cover for FBA sellers?",
      content: "Lorem ipsum dolor sit emit",
    },
    {
      id: 3,
      title: "Will Amazon automatically refund the lost package?",
      content: "Lorem ipsum dolor sit emit",
    },
    {
      id: 4,
      title: "How long does Amazon reimbursement take?",
      content: "Lorem ipsum dolor sit emit",
    },
    {
      id: 5,
      title: "Why do you take a percentage of the reimbursed revenue?",
      content: "Lorem ipsum dolor sit emit",
    },
  ];
  const handleOpen = (id) => {
    if (openItems === id) {
      // Clicking on the already open item, so close it
      setOpenItems(null);
    } else {
      // Clicking on a new item, close the previously open item and open the new one
      setOpenItems(id);
    }
  };
  return (
    <>
      <FaqWrapper className="st-section">
        <Container className="custom-container">
          <div className="section-head">
            <h2>Frequently Asked Questions</h2>
          </div>
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
