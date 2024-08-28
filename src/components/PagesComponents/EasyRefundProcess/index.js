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
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef();
  const sliderRef = useRef(null);

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

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    lazyLoad: true,
    speed: 600,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    }
  };

  const mobileSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    lazyLoad: true,
    speed: 600,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleRefundBoxClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <EasyRefundWrapper id='work-section' imageLoaded={imageLoaded}>
      <Container className='custom-container'>
        <ScrollAnimation animateIn="fadeIn">
          <h2>Easy Refund <span>Process</span></h2>
          <div className='refund-bg d-none d-md-block' ref={imgRef}>
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
                      <img key={ind} src={item.img} alt={item.label} title={item.label} loading='lazy' width='100%' height='100%' />
                    ))}
                  </Slider>
                </div>
              </Col>
            </Row>
          </div>
        </ScrollAnimation>
        <div className='d-block d-md-none'>
          <Slider {...mobileSettings}>
            {easyRefundData.map((item, ind) => (
              <Card className='mobile-refund'>
                <Card.Img variant="top" src={item.img} alt={item.label} loading='lazy' width='100%' height='100%' />
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
