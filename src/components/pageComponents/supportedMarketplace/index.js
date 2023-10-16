import React from "react";
import { Container } from "react-bootstrap";
import Button from "../../button";
import { StaticImage } from "gatsby-plugin-image";

import Marquee from "react-fast-marquee";
import MarketplaceWrapper from "./style";

const Marketplace = () => {
  return (
    <>
      <MarketplaceWrapper className="st-section">
        <Container className="custom-container">
          <div className="section-head">
            <h4>Supported Marketplace</h4>
            <h2>
              We Offer Multi-Marketplace Support For{" "}
              <span>Amazon Sellers Globally</span>
            </h2>
            <Button variant="outline-primary" arrow text="Sign Up Now" />
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
              <StaticImage
                src="../../../assets/images/marketplace/brazil.png"
                alt="Brazil"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/mexico.png"
                alt="mexico"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/japan.png"
                alt="japan"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/india.png"
                alt="india"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/egypt.png"
                alt="egypt"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/sa.png"
                alt="sa"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/australia.png"
                alt="australia"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/singapore.png"
                alt="singapore"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/uae.png"
                alt="uae"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/canada.png"
                alt="canada"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/usa.png"
                alt="usa"
              />
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
              <StaticImage
                src="../../../assets/images/marketplace/sweden.png"
                alt="Brazil"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/uk.png"
                alt="Brazil"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/poland.png"
                alt="Brazil"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/netherlands.png"
                alt="Brazil"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/france.png"
                alt="Brazil"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/spain.png"
                alt="Brazil"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/turkey.png"
                alt="Brazil"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/belgium.png"
                alt="Brazil"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/germany.png"
                alt="Brazil"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/italy.png"
                alt="Brazil"
              />
            </div>
          </Marquee>
        </div>
      </MarketplaceWrapper>
    </>
  );
};

export default Marketplace;
