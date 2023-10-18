import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const BannerWrapper = styled.div`
  padding-top: 56px;
  text-align: center;
  overflow: hidden;
  h1 {
    margin-bottom: 24px;
  }
  h4 {
    max-width: 725px;
    letter-spacing: -0.1px;
    margin: 0 auto;
    margin-bottom: 16px;
    &.light {
      margin-bottom: 8px;
    }
  }
  p {
    max-width: 907px;
    margin: 0 auto;
    margin-bottom: 32px;
    letter-spacing: 0.03px;
  }
  .btn {
    margin: 0 auto;
    z-index: 1;
  }
  .banner-main {
    position: relative;
    .image-fixed-left {
      position: absolute;
      left: 0;
      top: 55px;
      @media screen and (max-width: 1400px) {
        top: 55px;
        width: 150px;
      }
      ${media.lg`
      width: 122px;
    top: 36%;
    display: none;
      `}
    }
    .image-fixed-right {
      position: absolute;
      right: -81px;
      top: 53px;
      ${media.lg`
        /* display:none; */
    right: -21px;
    top: 43%;
    width: 269px
      `}
      ${media.sm`
      top: 52%;
      `}
      ${media.xs`
      top: 57%;
      width: 200px;
      `}
      @media screen and (max-width:400px) {
        top: 66%;
        right: -40px;
      }
    }
    .image-banner {
      max-width: 1450px;
      margin: 0 auto;
      margin-top: -60px;
      margin-left: -132px;
      margin-bottom: -105px;
      @media screen and (max-width: 1400px) {
        margin-left: -90px;
      }
      ${media.lg`
          margin-left:-64px;
      `}
      ${media.md`
          margin-left:-20px;
          margin-top:-30px;
      `}
      ${media.sm`
          margin-top:0px;
          margin-bottom: -55px;
      `}
      ${media.sm`
          margin-bottom: -40px;
      `}
      @media screen and (max-width:500px) {
        margin-bottom: -30px;
      }
      @media screen and (max-width: 400px) {
        margin-bottom: -23px;
      }
    }
  }
  .btn-animation {
    position: relative;
    z-index: 1;
  }
`;

export default BannerWrapper;
