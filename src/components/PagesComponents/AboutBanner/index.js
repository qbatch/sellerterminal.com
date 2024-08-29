import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ScrollAnimation from "react-animate-on-scroll";

import BannerImg from '../../../assets/images/about-banner-img.png';

import AboutBannerWrapper from './style';

const Index = React.memo(() => {
  const heading = 'Seller Terminal \n Get More From Amazon.'
  return (
    <AboutBannerWrapper id='home'>
      <Container className='custom-container'>
        <Row>
          <Col lg={7}>
            <div className='banner-heading'>
              <ScrollAnimation animateIn="fadeIn" animateOnce>
                <h1 className='heading'>{heading}</h1>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn" delay={200} animateOnce>
                <div>
                  <p className='banner-paragraph'>Our mission is simple: to help you recover every dollar you’re owed from Amazon’s FBA program and ensure you’re always in control of your business.</p>
                </div>
              </ScrollAnimation>
            </div>
          </Col>
          <Col lg={5}>
            <ScrollAnimation animateIn="fadeInRight" animateOnce>
              <div className='banner-img'>
                <img src={BannerImg} alt='banner' title='banner' />
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </AboutBannerWrapper>
  )
});

export default Index;
