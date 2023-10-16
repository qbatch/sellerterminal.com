import React from "react";
import { Container } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../../button";
// import bannerImg from "../../../assets/images/banner-img.png";

import BannerWrapper from "./style";

const Banner = () => {
  return (
    <>
      <BannerWrapper>
        <Container className="custom-container">
          <div className="banner-main">
            <h4 className="light">Uh-huh! </h4>
            <h1>
              No More <span>Losing Money</span>
            </h1>
            <h4>
              Get your hard-earned money back totally and safely with our
              trusted reimbursement specialists
            </h4>
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
            <StaticImage
              src="../../../assets/images/banner-img.png"
              alt="banner image"
              className="image-banner"
            />
            <StaticImage
              src="../../../assets/images/banner-coin-img.png"
              alt="banner image"
              className="image-fixed-left"
            />
            <StaticImage
              src="../../../assets/images/banner-recovery-img.png"
              alt="banner image"
              className="image-fixed-right"
            />
            {/* <img src="/banner-coin-img.png" alt="coin image" />
            <img src={bannerImg} alt="banner image" /> */}
          </div>
        </Container>
      </BannerWrapper>
    </>
  );
};

export default Banner;
