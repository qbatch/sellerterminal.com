import React, { useState, useEffect, useRef } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { easyRefundData } from '../../../constants';

import EasyRefundWrapper from './style';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    lazyLoad: true,
    speed: 600,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    }
  };

  useEffect(() => {
    console.log(easyRefundData);
  }, []);

  const handleRefundBoxClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <EasyRefundWrapper id='work-section'>
      <Container className='custom-container'>
        <ScrollAnimation animateIn="fadeIn">
          <h2>Easy Refund <span>Process</span></h2>
          <div className='refund-bg d-none d-md-block'>
            <Row>
              <Col lg={6}>
                <Row>
                  {easyRefundData.map((item, ind) => (
                    <Col md={6} key={ind} className='d-flex flex-column'>
                      <div
                        className={`refund-box ${currentSlide === ind ? 'active' : ''}`}
                        onClick={() => handleRefundBoxClick(ind)}
                      >
                        <label>{item.label}</label>
                        <span>{item.desc}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col lg={6}>
                <div className='mt-4'>
                  <Slider ref={sliderRef} {...settings}>
                    {easyRefundData.map((item, ind) => (
                      <img key={ind} src={item.img} alt={item.label} title={item.label} loading='lazy' />
                    ))}
                  </Slider>
                </div>
              </Col>
            </Row>
          </div>
        </ScrollAnimation>
        <div className='d-block d-md-none'>
          <Slider ref={sliderRef} {...settings}>
            {easyRefundData.map((item, ind) => (
              <Card className='mobile-refund'>
                <Card.Img variant="top" src={item.img} loading='lazy' />
                <Card.Body>
                  <Card.Title>{item.label}</Card.Title>
                  <Card.Text>
                    {item.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Slider>
        </div>
      </Container>
    </EasyRefundWrapper>
  );
}

export default Index;
