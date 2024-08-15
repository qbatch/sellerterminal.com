import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { InlineWidget } from "react-calendly";

import CalendlyWrapper from './style';

const Index = (props) => {
  const { show, onHide } = props;

  return (
    <Modal show={show} onHide={onHide} size='xl'>
      <CalendlyWrapper>
        <Modal.Header closeButton />
      </CalendlyWrapper>
      <Modal.Body>
        <CalendlyWrapper>
          <InlineWidget
            // add this to link for ?hide_gdpr_banner=1
            url="https://calendly.com/sellerterminal/onboarding?hide_gdpr_banner=1"
            styles={{
              height: "700px",
              width: "100%",
              maxWidth: '100%'
            }}
            pageSettings={{
              backgroundColor: "ffffff",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: "008989",
            }}
          />
        </CalendlyWrapper>
      </Modal.Body>
    </Modal>
  )
}

export default Index;
