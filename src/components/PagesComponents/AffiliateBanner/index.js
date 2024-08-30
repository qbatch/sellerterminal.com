import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ScrollAnimation from "react-animate-on-scroll";

import Button from '../../UiComponents/Button';
import BannerImg from '../../../assets/svgs/affiliate-banner-img.svg';

import AffiliateBannerWrapper from './style';

const Index = React.memo(() => {
  return (
    <AffiliateBannerWrapper>
      <Container className='custom-container'>
        <Row>
          <Col lg={6}>
            <div className='banner-heading'>
              <ScrollAnimation animateIn="fadeIn" animateOnce>
                <div>
                  <h1 className='heading'>Help Amazon Sellers Recover Lost $ Earn Generous Commissions</h1>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn" delay={200} animateOnce>
                <div>
                  <p className='banner-paragraph'>Ready to turn your connections into cash? Partner with Seller Terminal and help sellers recover their lost revenue while you earn top commissions. Our affiliate program rewards your efforts and provides tools for your success.</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn" delay={400} animateOnce>
                <Button text='Become Our Partner' className='btn-secondary' arrow="true" variant="primary" />
              </ScrollAnimation>
            </div>
          </Col>
          <Col lg={6}>
            <ScrollAnimation animateIn="fadeInRight" animateOnce>
              <div className='banner-img'>
                <BannerImg />
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </AffiliateBannerWrapper>
  )
});

export default Index;
