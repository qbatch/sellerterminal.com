import styled from 'styled-components';
import { media } from "../../../theme/media-mixins";

const BannerWrapper = styled.div`
  background-image: url('/banner-bg-img.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  height: 681px;
  padding: 138px 0 0;
  margin-top: -90px;

  ${media.xxl`
    padding: 120px 0 0;
  `}

  ${media.xl`
    height: auto;
    padding: 120px 0 0;
  `}
  ${media.sm`
    background-image: url('/mobile-banner-bg.svg');
  `}

  .banner-heading {
    margin-top: 50px;
    margin-right: 60px;
    ${media.xxl`
      margin-right: 86px;
    `}
    ${media.lg`
      margin-top: 24px;
    `}
    ${media.md`
      margin-right: 0;
      margin-top: 12px;
    `}
    h1 {
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 32px;
      max-width: 860px;
      ${media.xs`
        margin-bottom: 24px;
      `}
    }
    p {
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      max-width: 710px;
      margin-bottom: 32px;
      span {
        color: #00FFFF;
        font-weight: ${({ theme }) => theme.fontWeight.bold};
      }
    }
  }
  .banner-img {
    margin-left: -130px;
    ${media.lg`
      margin-top: -84px;
      margin-left: -80px;
    `}
    ${media.md`
      margin-top: 24px;
      margin-left: 0;
      display: flex;
      justify-content: center;
      padding: 12px;
    `}
    ${media.md`
      margin-bottom: -120px;
    `}
    ${media.sm`
      margin-bottom: -70px;
    `}
    svg {
      ${media.md`
        width: auto;
        height: auto;
     `}
    }
  }
` 

export default BannerWrapper;
