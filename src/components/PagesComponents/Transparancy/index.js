import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

import Button from '../../UiComponents/Button';
import TransparancyImg from '../../../assets/svgs/transparancy-side-img.svg';

import TransparancyWrapper from './style';

const Index = () => {
  return (
    <TransparancyWrapper>
      <Container className='custom-container'>
        <Row>
          <Col md={6} className='d-flex align-items-center'>
            <ScrollAnimation animateIn="fadeIn">
              <div className='transparancy-heading'>
                <h2>Transparency and Clarity</h2>
                <p>Our Amazon Reimbursement Tool provides detailed performance analytics for Amazon sellers.</p>
                <Button text='Sign Me Up Now' className='btn-secondary d-md-flex d-none' arrow="true" variant="primary" />
              </div>
            </ScrollAnimation>
          </Col>
          <Col md={6} className='d-flex justify-content-center'>
            <ScrollAnimation animateIn="fadeIn" >
              <div className='trans-img'>
                <TransparancyImg />
              </div>
            </ScrollAnimation>
          </Col>
          <div className='d-flex justify-content-center d-md-none mt-4'>
            <Button text='Sign Me Up Now' arrow="true" variant="primary" />
          </div>
        </Row>
      </Container>
    </TransparancyWrapper>
  )
}

export default Index;
