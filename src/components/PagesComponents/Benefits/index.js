import React from 'react';
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
    },
    desktop: {
      breakpoint: { max: 1300, min: 768 },
      items: 2,
      partialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      partialVisibilityGutter: 80,
    },
  };

  return (
    <BenefitsWrapper>
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
          <div className='investment-box' key={ind}>
            <img src={item.img} alt={item.title} title={item.title} loading='lazy' />
            <div>
              <h3>{item.title}</h3>
              <span>{item.desc}</span>
            </div>
          </div>
        ))}
      </Carousel>
    </BenefitsWrapper>
  )
}

export default Index;
