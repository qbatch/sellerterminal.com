import React, { useState, useEffect, useRef } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import Slider from "react-slick";
import ProgressBar from './ProgressBar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ourServicesData } from '../../../constants';
import OurServicesWrapper from './style';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef();
  const sliderRef = useRef(null);

  const duration = 90000;

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextSlide = (currentSlide + 1) % ourServicesData.length;
      handleSlideChange(nextSlide);
    }, duration);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const handleSlideChange = (newIndex) => {
    setCurrentSlide(newIndex);
    sliderRef.current.slickGoTo(newIndex);
  };

  const handleProgressComplete = () => {
    const nextSlide = (currentSlide + 1) % ourServicesData.length;
    handleSlideChange(nextSlide);
  };

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
    dots: false,
    infinite: false,
    autoplay: false,
    lazyLoad: true,
    speed: 600,
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
    handleSlideChange(index);
  };

  return (
    <OurServicesWrapper imageLoaded={imageLoaded}>
      <Container className='custom-container'>
        <ScrollAnimation animateIn="fadeIn">
          <h2>Our <span>Services</span></h2>
          <div className='refund-bg d-none d-md-block' ref={imgRef}>
            <Row>
              <Col lg={6}>
                {ourServicesData.map((item, ind) => (
                  <div
                    key={ind}
                    className={`refund-box ${currentSlide === ind ? 'active' : ''}`}
                    onClick={() => handleRefundBoxClick(ind)}
                  >
                    {currentSlide === ind && (
                      <ProgressBar duration={duration} onComplete={handleProgressComplete} />
                    )}
                    <label>{item.label}</label>
                    <span>{item.desc}</span>
                  </div>
                ))}
              </Col>
              <Col lg={6}>
                <div className='mt-4'>
                  <Slider ref={sliderRef} {...settings}>
                    {ourServicesData.map((item, ind) => (
                      <div key={ind} className='services-img'>
                        <img src={item.img} alt={item.label} title={item.label} loading='lazy' width='100%' height='100%' />
                      </div>
                    ))}
                  </Slider>
                </div>
              </Col>
            </Row>
          </div>
        </ScrollAnimation>
        <div className='d-block d-md-none'>
          <Slider {...mobileSettings}>
            {ourServicesData.map((item, ind) => (
              <Card key={ind} className='mobile-refund'>
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
    </OurServicesWrapper>
  );
}

export default Index;
