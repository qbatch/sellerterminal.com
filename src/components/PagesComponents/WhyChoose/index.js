import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

import { whyChooseData } from '../../../constants';

import WhyChooseWrapper from './style';

const Index = () => {
  return (
    <WhyChooseWrapper>
      <Container className='custom-container'>
        <ScrollAnimation animateIn="fadeIn">
          <h2 className='investment-heading'>Why Choose <span>Seller Terminal?</span></h2>
          <Row>
            {whyChooseData.map((item, ind) => (
              <Col lg={4} md={6} key={ind} className='investment-col'>
                <ScrollAnimation animateIn="fadeIn" delay={200 * ind} className='flex-1'>
                  <div className='investment-box'>
                    <img src={item.img} alt={item.title} title={item.title} loading='lazy' />
                    <div>
                      <h3>{item.title}</h3>
                      <span>{item.desc}</span>
                    </div>
                  </div>
                </ScrollAnimation>
              </Col>
            ))}
          </Row>
        </ScrollAnimation>
      </Container>
    </WhyChooseWrapper>
  )
}

export default Index;
