import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ScrollAnimation from "react-animate-on-scroll";

import TotalSellers from '../../../assets/svgs/icons/total-sellers.svg';
import FundsRecovered from '../../../assets/svgs/icons/funds-recovered.svg';

import WhoWeAreWrapper from './style';

const Index = () => {
  return (
    <WhoWeAreWrapper>
      <Container className='custom-container'>
        <ScrollAnimation animateIn="fadeIn">
          <div className='wrapper-box'>
            <Row>
              <Col lg={6}>
                <div className='wrapper-heading'>
                  <h2>Who <span>We Are</span></h2>
                  <p>We're a team of Amazon veterans who understand selling on Amazon takes work. With years of hands-on experience and deep knowledge of Amazon’s policies, we have empowered 1000+ sellers to navigate the challenging FBA system and recover $1M+ funds.</p>
                </div>
              </Col>
              <Col lg={6} className='amount-col'>
                <div className='d-flex align-items-center justify-content-between amount-box'>
                  <div>
                    <h2 className='h1-style'>1000+</h2>
                    <span>Total Seller’s</span>
                  </div>
                  <TotalSellers />
                </div>
                <div className='d-flex align-items-center justify-content-between cases-resolved'>
                  <div>
                    <h2 className='h1-style'>$1M+</h2>
                    <span>Funds Recovered</span>
                  </div>
                  <FundsRecovered />
                </div>
              </Col>
            </Row>
          </div>
        </ScrollAnimation>
      </Container>
    </WhoWeAreWrapper>
  )
}

export default Index;
