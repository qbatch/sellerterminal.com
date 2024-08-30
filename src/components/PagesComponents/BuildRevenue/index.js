import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ScrollAnimation from "react-animate-on-scroll";

import { buildRevenueData } from '../../../constants';

import BuildRevenueWrapper from './style';

const Index = () => {
  return (
    <BuildRevenueWrapper>
      <Container className='custom-container'>
        <div className='text-center commitment-heading'>
          <h2>Build Revenue — <span>with Seller Terminal</span></h2>
        </div>
        <Row>
          {buildRevenueData.map((item, ind) => (
            <Col md={6} key={ind} className='commitment-col'>
              <ScrollAnimation animateIn="fadeIn" delay={200 * ind} className='flex-1'>
                <div className='commitment-box'>
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
      </Container>
    </BuildRevenueWrapper>
  )
}

export default Index;
