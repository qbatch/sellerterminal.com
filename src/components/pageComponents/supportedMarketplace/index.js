import React from "react";
import { navigate } from "gatsby";
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
            <ScrollAnimation animateIn="fadeIn">
              <h2 className="h2-style">
                We Offer Multi-Marketplace Support For{" "}
                <span>Amazon Sellers Globally</span>
              </h2>
              <Button
                variant="outline-primary"
                onClick={() =>
                  navigate("https://app.sellerterminal.com/auth/sign-up")
                }
                arrow
                text="Sign Up Now"
              />
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
              <StaticImage
                src="../../../assets/images/marketplace/brazil.png"
                alt="Brazil"
                title="Brazil"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/mexico.png"
                alt="mexico"
                title="mexico"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/japan.png"
                alt="japan"
                title="japan"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/india.png"
                alt="india"
                title="india"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/egypt.png"
                alt="egypt"
                title="egypt"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/sa.png"
                alt="saudi arabia"
                title="saudi arabia"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/australia.png"
                alt="australia"
                title="australia"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/singapore.png"
                alt="singapore"
                title="singapore"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/uae.png"
                alt="uae"
                title="uae"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/canada.png"
                alt="canada"
                title="canada"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/usa.png"
                alt="usa"
                title="usa"
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
                alt="sweden"
                title="sweden"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/uk.png"
                alt="uk"
                title="uk"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/poland.png"
                alt="poland"
                title="poland"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/netherlands.png"
                alt="netherlands"
                title="netherlands"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/france.png"
                alt="france"
                title="france"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/spain.png"
                alt="spain"
                title="spain"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/turkey.png"
                alt="turkey"
                title="turkey"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/belgium.png"
                alt="belgium"
                title="belgium"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/germany.png"
                alt="germany"
                title="germany"
              />
            </div>
            <div className="marquee-item">
              <StaticImage
                src="../../../assets/images/marketplace/italy.png"
                alt="italy"
                title="italy"
              />
            </div>
          </Marquee>
        </div>
      </MarketplaceWrapper>
    </>
  );
};

export default Marketplace;
