import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const MarketplaceWrapper = styled.section`
  &.st-section {
    padding-bottom: 0;
  }
  .section-head {
    gap: 32px;
    justify-content: center;
    position: relative;
    h4,
    .h4-style {
      text-align: center;
    }
    h2,
    .h2-style {
      text-align: center;
      max-width: 871px;
      margin: 0 auto;
      margin-bottom: 32px;
      @media screen and (min-width: 1440px) {
        line-height: 56px;
      }
    }
    .btn {
      margin: 0 auto;
    }
  }
  .marketplace-content {
    margin-top: 72px;
    background: linear-gradient(90deg, #fff 0%, #f0f2f8 50.42%, #fff 100%);
    padding-top: 58px;
    padding-bottom: 58px;
    ${media.sm`
      margin-top:48px;
      padding-top:35px;
      padding-bottom:35px;
    `}
    .marquee-item {
      margin-right: 18px;
      ${media.sm`
        margin-right:12px;
        `}
      ${media.xs`
        margin-right:8px;
        `}
      img {
        max-height: 80px;
        ${media.sm`
        max-height:60px;
        `}
        ${media.xs`
        max-height:40px;
        `}
      }
    }
    .marketplace-marq-sec {
      margin-top: 32px;
      ${media.sm`
        margin-top:16px;
        `}
    }
  }
`;

export default MarketplaceWrapper;
