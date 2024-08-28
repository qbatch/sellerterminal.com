import React, { Suspense } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

import Button from '../../../components/UiComponents/Button';
import MarketplaceImg from '../../../assets/svgs/multi-marketplace.svg';

import MarketplaceWrapper from './style';

const Index = () => {
  return (
    <MarketplaceWrapper>
      <Container className='custom-container'>
        <ScrollAnimation animateIn="fadeIn">
        <Row>
          <Col lg={7} className='order-2 order-lg-1'>
            <Suspense fallback={<div>Loading...</div>}>
              <div className='marketplace-img'>
                <MarketplaceImg />
              </div>
            </Suspense>
          </Col>
          <Col lg={5} className='order-1 order-lg-2'>
            <div className='marketplace-heading'>
              <h2>We Offer Global <span>Multi-Marketplace</span> Support For Sellers</h2>
              <ScrollAnimation animateIn="fadeIn" delay={200}>
              <p>Seller Terminal tracks fees, orders, inventory, returns, and discrepancies under Amazon’s Terms of Service.</p>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn" delay={400}>
              <Button text='Get your free Audit' arrow="true" variant="primary" />
              </ScrollAnimation>
            </div>
          </Col>
        </Row>
        </ScrollAnimation>
      </Container>
    </MarketplaceWrapper>
  )
}

export default Index;
