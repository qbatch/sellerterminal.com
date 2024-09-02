import React, { useState, useEffect, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

import Button from '../../UiComponents/Button';
import StartEarningImg from '../../../assets/svgs/start-earning-img.svg';

import StartEarningWrapper from './style';

const Index = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageLoaded(true);
            observer.unobserve(imgRef.current);
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <>
      <StartEarningWrapper ref={imgRef} imageLoaded={imageLoaded}>
        <Container className='custom-container'>
          <Row>
            <Col md={6} className='d-flex align-items-center'>
              <ScrollAnimation animateIn="fadeIn">
                <div className='transparancy-heading'>
                  <h2>Ready to Start Earning?</h2>
                  <p>For more information, feel free to contact our affiliate support team at <span>support@sellerterminal.com.</span></p>
                  <Button
                    text='Sign Up Now'
                    className='btn-secondary d-md-flex d-none'
                    arrow="true"
                    variant="primary"
                    onClick={() =>
                      (window.location.href = "https://app.sellerterminal.com/auth/sign-up")
                    }
                  />
                </div>
              </ScrollAnimation>
            </Col>
            <Col md={6} className='d-flex justify-content-md-end justify-content-center'>
              <ScrollAnimation animateIn="fadeIn" >
                <div className='trans-img'>
                  <StartEarningImg />
                </div>
              </ScrollAnimation>
            </Col>
            <div className='d-flex justify-content-center d-md-none mt-4'>
              <Button text='Sign Me Up Now' arrow="true" variant="primary" />
            </div>
          </Row>
        </Container>
      </StartEarningWrapper>
      <div className='hr' />
    </>
  )
}

export default Index;
