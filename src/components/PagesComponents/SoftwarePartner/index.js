import React from 'react';
import { Container } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

import SoftwarePartnerWrapper from './style';

const Index = () => {
  return (
    <SoftwarePartnerWrapper>
      <Container className='custom-container'>
        {/* <ScrollAnimation animateIn="fadeIn"> */}
          <div className='partner-box'>
            <img src='/software-partner.svg' alt='software-partner' title='software-partner' loading='lazy' />
            <div>
              <h2>Ensure Stress-Free Reimbursement with Our 100% Amazon TOS Compliance.</h2>
              <p>Stay fully compliant with Amazon’s Terms of Service, achieving peace of mind in all reimbursement processes.</p>
            </div>
          </div>
        {/* </ScrollAnimation> */}
      </Container>
    </SoftwarePartnerWrapper>
  )
}

export default Index;
