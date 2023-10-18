import React from "react";
import { Container } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import ScrollAnimation from "react-animate-on-scroll";

import Button from "../../button";

import BannerWrapper from "./style";

const Banner = () => {
  return (
    <>
      <BannerWrapper id="banner">
        <Container className="custom-container">
          <div className="banner-main">
            <ScrollAnimation animateIn="fadeIn" animateOnce delay={500}>
              <span className="light h4-style">Uh-huh! </span>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce delay={1000}>
              <h1 className="h1-style">
                No More <span>Losing Money</span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce delay={1500}>
              <h2 className="h4-style">
                Get your hard-earned money back totally and safely with our
                trusted reimbursement specialists
              </h2>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeIn"
              animateOnce
              delay={1500}
              className="btn-animation"
            >
              <p>
                Join 1000+ sellers, brands, aggregators, and warehouses who
                successfully recovered their money and took control of their FBA
                Business with our full-suite Amazon seller reimbursements
                services. Sign up and find out how much Amazon owes you.
              </p>
              <Button
                variant="outline-primary"
                arrow
                text="Get Your Free Audit"
              />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" animateOnce delay={2000}>
              <StaticImage
                src="../../../assets/images/banner-img.png"
                alt="No More Losing Money"
                title="No More Losing Money"
                className="image-banner"
              />
            </ScrollAnimation>
            <div className="image-fixed-left">
              <ScrollAnimation animateIn="fadeInLeft" animateOnce delay={2000}>
                <StaticImage
                  src="../../../assets/images/banner-coin-img.png"
                  alt="money back"
                  title="money back"
                />
              </ScrollAnimation>
            </div>
            <div className="image-fixed-right">
              <ScrollAnimation animateIn="fadeInRight" animateOnce delay={2000}>
                <StaticImage
                  src="../../../assets/images/banner-recovery-img.png"
                  alt="total recovery amount"
                  title="total recovery amount"
                />
              </ScrollAnimation>
            </div>
          </div>
        </Container>
      </BannerWrapper>
    </>
  );
};

export default Banner;
