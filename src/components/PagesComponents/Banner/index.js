import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ScrollAnimation from "react-animate-on-scroll";

import Button from '../../UiComponents/Button';
import BannerImg from '../../../assets/svgs/st-banner-img.svg';

import BannerWrapper from './style';

const Index = () => {
  return (
    <BannerWrapper id='home'>
      <Container className='custom-container'>
        <Row>
          <Col lg={7}>
            <div className='banner-heading'>
              <ScrollAnimation animateIn="fadeIn" animateOnce>
                <h1>Amazon Refunds Simplified. Get Back What You Deserve</h1>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn" delay={200} animateOnce>
                <p>Join <span>1,000+ sellers</span> who have recovered their money with our Amazon reimbursement services. Our trusted specialists help you regain control of your FBA business. Sign up and see how much Amazon owes you.</p>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn" delay={400} animateOnce>
                <Button text='Get your free Audit' className='btn-secondary' arrow="true" variant="primary" />
              </ScrollAnimation>
            </div>
          </Col>
          <Col lg={5}>
            <ScrollAnimation animateIn="fadeInRight" animateOnce>
              <div className='banner-img'>
                <BannerImg />
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </BannerWrapper>
  )
}

export default Index;
