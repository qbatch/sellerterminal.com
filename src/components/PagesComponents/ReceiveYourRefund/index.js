import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

import Button from '../../UiComponents/Button';
import RefundImg from '../../../assets/svgs/refund-side-img.svg';

import RefundWrapper from './style';

const Index = () => {
  return (
    <RefundWrapper id='pricing-section'>
      <Container className='custom-container'>
        <Row>
          <Col md={6}>
            {/* <ScrollAnimation animateIn="fadeIn"> */}
              <div className='refund-heading'>
                <h2>Don’t Pay Unless You Receive Your Refunds!</h2>
                <h3>Only <span>20% Fee</span> – The Perfect Price</h3>
                <Button text='Let’s Reclaim Your Money' className='btn-secondary d-md-flex d-none' arrow="true" variant="primary" />
              </div>
            {/* </ScrollAnimation> */}
          </Col>
          <Col md={6} className='d-flex justify-content-center refund-svg'>
            {/* <ScrollAnimation animateIn="fadeInRight" > */}
              <RefundImg />
            {/* </ScrollAnimation> */}
          </Col>
          <div className='d-flex justify-content-center d-md-none mt-4'>
            <Button text='Let’s Reclaim Your Money' arrow="true" variant="primary" />
          </div>
        </Row>
      </Container>
    </RefundWrapper>
  )
}

export default Index;
