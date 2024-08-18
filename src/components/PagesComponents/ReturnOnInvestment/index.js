import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

import { returnOnInvestmenData } from '../../../constants';
import Button from '../../../components/UiComponents/Button';

import InvestmentWrapper from './style';

const Index = () => {
  return (
    <InvestmentWrapper>
      <Container className='custom-container'>
        {/* <ScrollAnimation animateIn="fadeIn"> */}
          <Row className='mb-5'>
            <Col md={6}>
              <h2 className='investment-heading'>All We’ve Ever Known is <br /> <span>Return on Investment</span></h2>
            </Col>
            <Col md={6}>
              <p className='investment-desc'>Seller Terminal tracks fees, orders, inventory, returns, and discrepancies under Amazon’s Terms of Service.
                Our software audits your account while our recovery team files cases, ensuring returns in your bank account.</p>
            </Col>
            <div className='d-flex d-sm-none justify-content-center audit-btn'>
              <Button text='Get your free Audit' arrow="true" variant="primary" />
            </div>
          </Row>
          <Row>
            {returnOnInvestmenData.map((item, ind) => (
              <Col xl={3} sm={6} key={ind} className='investment-col'>
                {/* <ScrollAnimation animateIn="fadeIn" delay={200 * ind} className='flex-1'> */}
                  <div className='investment-box'>
                    <img src={item.img} alt={item.title} title={item.title} loading='lazy' />
                    <div>
                      <h3>{item.title}</h3>
                      <span>{item.desc}</span>
                    </div>
                  </div>
                {/* </ScrollAnimation> */}
              </Col>
            ))}
          </Row>
          <div className='d-none d-sm-flex justify-content-center audit-btn'>
            <Button text='Get your free Audit' arrow="true" variant="primary" />
          </div>
        {/* </ScrollAnimation> */}
      </Container>
    </InvestmentWrapper>
  )
}

export default Index;
