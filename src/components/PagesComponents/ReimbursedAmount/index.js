import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Avatar from 'react-avatar';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollAnimation from 'react-animate-on-scroll';

import RightArrow from '../../../assets/svgs/icons/st-right-arrow.svg';
import AmountIcon from '../../../assets/svgs/icons/reimbursed-amount.svg';
import CasesResolvedIcon from '../../../assets/svgs/icons/cases-resolved.svg';
import { testimonialData } from '../../../constants';

import ReimbursedWrapper from './style';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const currentAmount = testimonialData[currentSlide].amount;
  const currentCases = testimonialData[currentSlide].cases;

  return (
    <ReimbursedWrapper>
      <Container className='custom-container'>
        <ScrollAnimation animateIn="fadeIn">
          <div className='reimbursed-box'>
            <div className='d-flex align-items-center justify-content-center heading'>
              <h2>We Investigate</h2>
              <RightArrow />
              <h2>We File Cases</h2>
              <RightArrow />
              <h2>You Get Paid</h2>
            </div>
            <Row>
              <Col lg={6}>
                <Slider {...settings}>
                  {testimonialData.map((item,ind)=> (
                    <div className='testimonial-box' key={ind}>
                      <p className='feedback'>{item.feedback}</p>
                      <div className='d-flex align-items-center gap-3'>
                        <Avatar src={item.clientImg} alt={item.clientName} round={true} className='client-avatar' />
                        <div className='client-name'>
                          <p>{item.clientName}</p>
                          <span>{item.designation}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </Col>
              <Col lg={6} className='amount-col'>
                <div className='d-flex align-items-center justify-content-between amount-box'>
                  <div>
                    <h2 className={`h1-style ${isAnimating ? 'animate' : ''}`}>{currentAmount}</h2>
                    <span>Total Reimbursed Amount</span>
                  </div>
                  <AmountIcon />
                </div>
                <div className='d-flex align-items-center justify-content-between cases-resolved'>
                  <div>
                    <h2 className={`h1-style ${isAnimating ? 'animate' : ''}`}>{currentCases}</h2>
                    <span>Cases Resolved</span>
                  </div>
                  <CasesResolvedIcon />
                </div>
              </Col>
            </Row>
          </div>
        </ScrollAnimation>
      </Container>
    </ReimbursedWrapper>
  )
}

export default Index;
