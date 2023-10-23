import React from "react";
import { Container } from "react-bootstrap";
import Button from "../../button";
import { StaticImage } from "gatsby-plugin-image";
import ScrollAnimation from "react-animate-on-scroll";

import Marquee from "react-fast-marquee";
import MarketplaceWrapper from "./style";

const Marketplace = () => {
  return (
    <>
      <MarketplaceWrapper className="st-section">
        <Container className="custom-container">
          <div className="section-head">
            <ScrollAnimation animateIn="fadeIn">
              <span className="h4-style">Supported Marketplace</span>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" delay="1s">
              <h2 className="h2-style">
                We Offer Multi-Marketplace Support For{" "}
                <span>Amazon Sellers Globally</span>
              </h2>
              <Button variant="outline-primary" arrow text="Sign Up Now" />
            </ScrollAnimation>
          </div>
        </Container>
        <div className="marketplace-content">
          <Marquee
            direction="left"
            pauseOnHover={false}
            gradientColor="white"
            gradient={true}
            speed={50}
            loop={0}
          >
            <div className="marquee-item">
              <img src="/marketplace/brazil.png" alt="Brazil" title="Brazil" />
            </div>
            <div className="marquee-item">
              <img src="/marketplace/mexico.png" alt="mexico" title="mexico" />
            </div>
            <div className="marquee-item">
              <img src="/marketplace/japan.png" alt="japan" title="japan" />
            </div>
            <div className="marquee-item">
              <img src="/marketplace/india.png" alt="india" title="india" />
            </div>
            <div className="marquee-item">
              <img src="/marketplace/egypt.png" alt="egypt" title="egypt" />
            </div>
            <div className="marquee-item">
              <img
                src="/marketplace/sa.png"
                alt="saudi arabia"
                title="saudi arabia"
              />
            </div>
            <div className="marquee-item">
              <img
                src="/marketplace/australia.png"
                alt="australia"
                title="australia"
              />
            </div>
            <div className="marquee-item">
              <img
                src="/marketplace/singapore.png"
                alt="singapore"
                title="singapore"
              />
            </div>
            <div className="marquee-item">
              <img src="/marketplace/uae.png" alt="uae" title="uae" />
            </div>
            <div className="marquee-item">
              <img src="/marketplace/canada.png" alt="canada" title="canada" />
            </div>
            <div className="marquee-item">
              <img src="/marketplace/usa.png" alt="usa" title="usa" />
            </div>
          </Marquee>
          <Marquee
            direction="right"
            pauseOnHover={false}
            gradientColor="white"
            gradient={true}
            speed={50}
            loop={0}
            className="marketplace-marq-sec"
          >
            <div className="marquee-item">
              <img src="/marketplace/sweden.png" alt="sweden" title="sweden" />
            </div>
            <div className="marquee-item">
              <img src="/marketplace/uk.png" alt="uk" title="uk" />
            </div>
            <div className="marquee-item">
              <img src="/marketplace/poland.png" alt="poland" title="poland" />
            </div>
            <div className="marquee-item">
              <img
                src="/marketplace/netherlands.png"
                alt="netherlands"
                title="netherlands"
              />
            </div>
            <div className="marquee-item">
              <img src="/marketplace/france.png" alt="france" title="france" />
            </div>
            <div className="marquee-item">
              <img src="/marketplace/spain.png" alt="spain" title="spain" />
            </div>
            <div className="marquee-item">
              <img src="/marketplace/turkey.png" alt="turkey" title="turkey" />
            </div>
            <div className="marquee-item">
              <img
                src="/marketplace/belgium.png"
                alt="belgium"
                title="belgium"
              />
            </div>
            <div className="marquee-item">
              <img
                src="/marketplace/germany.png"
                alt="germany"
                title="germany"
              />
            </div>
            <div className="marquee-item">
              <img src="/marketplace/italy.png" alt="italy" title="italy" />
            </div>
          </Marquee>
        </div>
      </MarketplaceWrapper>
    </>
  );
};

export default Marketplace;
