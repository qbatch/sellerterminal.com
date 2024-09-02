import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ScrollAnimation from "react-animate-on-scroll";

import ReferralsImg from '../../../assets/svgs/referrals-rewards.svg';
import Button from '../../UiComponents/Button';

import StartEarningWrapper from './style';

const Index = () => {
  return (
    <StartEarningWrapper>
      <Container className='custom-container'>
        <div className='referrals-box'>
          <Row>
            <Col md={5} className='d-flex justify-content-md-start justify-content-center'>
              <ReferralsImg />
            </Col>
            <Col md={7} className='d-flex align-items-center'>
              <ScrollAnimation animateIn="fadeIn">
                <div className='referrals-heading'>
                  <h2>Let’s turn your referrals <span>into rewards!</span></h2>
                  <p>Partner with Seller Terminal today and start maximizing your earnings while helping Amazon sellers recover their lost revenue!</p>
                  <Button
                    text='Become a Partner'
                    arrow="true"
                    variant="primary"
                    onClick={() =>
                      (window.location.href = "https://app.sellerterminal.com/auth/sign-up")
                    }
                  />
                </div>
              </ScrollAnimation>
            </Col>
          </Row>
        </div>
      </Container>
    </StartEarningWrapper>
  )
}

export default Index;
