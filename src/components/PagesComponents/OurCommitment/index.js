import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ScrollAnimation from "react-animate-on-scroll";

import { ourCommitmentData } from '../../../constants';

import CommitmentWrapper from './style';

const Index = () => {
  return (
    <CommitmentWrapper>
      <Container className='custom-container'>
        <div className='text-center commitment-heading'>
          <h2>Our Commitment: <span>Recover What’s Yours</span></h2>
        </div>
        <Row>
          {ourCommitmentData.map((item, ind) => (
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
    </CommitmentWrapper>
  )
}

export default Index;
