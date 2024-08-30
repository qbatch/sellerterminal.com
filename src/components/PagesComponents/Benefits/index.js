import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { benefitsData } from '../../../constants';

import BenefitsWrapper from './style';

const Index = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1300 },
      items: 3,
      partialVisibilityGutter: 60,
      partialVisible: true,
    },
    desktop: {
      breakpoint: { max: 1300, min: 768 },
      items: 2,
      partialVisibilityGutter: 60,
      partialVisible: true,
    },
    tablet: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      partialVisibilityGutter: 80,
      partialVisible: true,
    },
  };

  return (
    <BenefitsWrapper>
      <ScrollAnimation animateIn="fadeIn">
        <h2 className='investment-heading'>Benefits of the <br /> <span>Seller Terminal Affiliate Program</span></h2>
        <Carousel
          responsive={responsive}
          arrows={false}
          swipeable={true}
          draggable={true}
          autoPlay
          infinite
          autoPlaySpeed={2000}
          partialVisible={true}
        >
          {benefitsData.map((item, ind) => (
            // <ScrollAnimation animateIn="fadeIn" delay={200 * ind} className='flex-1'>
              <div className='investment-box' key={ind}>
                <img src={item.img} alt={item.title} title={item.title} loading='lazy' />
                <div>
                  <h3>{item.title}</h3>
                  <span>{item.desc}</span>
                </div>
              </div>
            // </ScrollAnimation>
          ))}
        </Carousel>
      </ScrollAnimation>
    </BenefitsWrapper>
  )
}

export default Index;
