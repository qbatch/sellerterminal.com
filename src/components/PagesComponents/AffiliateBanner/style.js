import styled from 'styled-components';
import { media } from "../../../theme/media-mixins";

const AffiliateBannerWrapper = styled.div`
  background-image: url('/about-banner-bg.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  padding: 138px 0 80px;
  margin-top: -90px;

  ${media.sm`
    padding: 120px 0 80px;
  `}

  .banner-heading {
    margin-top: 50px;
    ${media.lg`
      margin-top: 24px;
    `}
    ${media.md`
      margin-right: 0;
      margin-top: 12px;
    `}
    .heading {
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 32px;
      max-width: 860px;
      ${media.xs`
        margin-bottom: 24px;
        font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
        line-height: 32px;
      `}
    }
    .banner-paragraph {
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      max-width: 610px;
      margin-bottom: 32px;
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      span {
        color: #00FFFF;
        font-weight: ${({ theme }) => theme.fontWeight.bold};
      }
      ${media.xs`
        font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
        line-height: 16px;
        margin-bottom: 24px;
        span {
          font-weight: ${({ theme }) => theme.fontWeight.medium};
        }
    `}
    }
  }
  .banner-img {
    display: flex;
    justify-content: flex-end;
    ${media.md`
      margin-top: 24px;
      margin-left: 0;
      padding: 12px;
      justify-content: center;
    `}
    svg {
      ${media.md`
        width: auto;
        height: auto;
     `}
    }
  }
`

export default AffiliateBannerWrapper;
