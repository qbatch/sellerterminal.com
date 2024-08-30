import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import StepEarnIcon from '../../../assets/svgs/step-earn.svg';
import StepSignupIcon from '../../../assets/svgs/step-sign-up.svg';
import StepPromoteIcon from '../../../assets/svgs/step-promote.svg';
import ArcUp from '../../../assets/svgs/arc-up.svg';
import ArcDown from '../../../assets/svgs/arc-down.svg';

import HowItWorksWrapper from './style';

const Index = () => {
  return (
    <HowItWorksWrapper>
      <Container className='custom-container'>
        <h2 className='works-heading'>How <span>It Works</span></h2>
        <Row className='works-row'>
          <div className='arc-up'>
            <ArcUp />
          </div>
          <div className='arc-down'>
            <ArcDown />
          </div>
          <Col md={4}>
            <div className='works-step'>
              <StepSignupIcon />
              <h3>Sign Up</h3>
              <span>Join our program in minutes.</span>
            </div>
          </Col>
          <Col md={4}>
            <div className='works-step'>
              <StepPromoteIcon />
              <h3>Promote</h3>
              <span>Share your unique link and use our marketing materials.</span>
            </div>
          </Col>
          <Col md={4}>
            <div className='works-step'>
              <StepEarnIcon />
              <h3>Earn</h3>
              <span>Get paid commissions for every successful referral.</span>
            </div>
          </Col>
        </Row>
      </Container>
    </HowItWorksWrapper>
  )
}

export default Index;
