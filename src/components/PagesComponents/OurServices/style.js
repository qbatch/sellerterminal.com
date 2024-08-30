import styled from 'styled-components';
import { media } from '../../../theme/media-mixins';

const OurServicesWrapper = styled.div`
  padding: 96px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividingColor};
  ${media.sm`
    padding: 48px 0 72px;
  `}
  h2 {
    margin-bottom: 56px;
    ${media.xs`
      margin-bottom: 36px;
    `}
  }

  .refund-bg {
    background-color: ${({ theme }) => theme.colors.bgColor};
    background-image: ${(props) => `url(${props.imageLoaded ? '/easy-refund-bg.svg' : ''})`};
    background-position: right 0 top 0;
    background-repeat: no-repeat;
    border-radius: 25px;
    padding: 40px;

    .refund-box {
      background-color: ${({ theme }) => theme.colors.whiteColor};
      border-radius: 20px;
      padding: 16px 24px 16px 16px;
      margin-bottom: 24px;
      position: relative;
      cursor: pointer;
      flex: 1;
      &:last-child {
        margin-bottom: 0;
      }
      label {
        font-family: "Space Grotesk", sans-serif;
        font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        color: ${({ theme }) => theme.colors.secondaryColor};
        line-height: 26px;
        margin-bottom: 12px;
      }
      span {
        font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
        color: ${({ theme }) => theme.colors.textMedium};
        line-height: 20px;
        display: block;
      }

      &.active {
        background-color: ${({ theme }) => theme.colors.primaryColor};
        label {
          color: ${({ theme }) => theme.colors.whiteColor};
        }
        span {
          color: ${({ theme }) => theme.colors.bodyTextVariant};
        }
      }
    }
  }
  .slick-track:has(.mobile-refund) {
    display: flex;
    gap: 10px;
  }
  .mobile-refund {
    background-color: ${({ theme }) => theme.colors.primaryColor};
    border: none;
    border-radius: 10px;
    padding: 4px;
    min-height: 502px;
    ${media.xs`
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      min-height: 320px;
    `}
    .card-title {
      color: ${({ theme }) => theme.colors.whiteColor};
      font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
      line-height: 32px;
      margin-bottom: 8px;
      ${media.xs`
        font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
        line-height: 26px;
      `}
    }
    .card-text {
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      line-height: 24px;
      ${media.xs`
        font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
        line-height: 20px;
      `}
    }
  }
  .services-img {
    display: flex !important;
    justify-content: flex-end;
    margin-top: 32px;
    ${media.md`
      justify-content: center;
    `}
    img {
      width: 584px;
    }
  }
  .progress-position {
    position: absolute;
    top: 10px;
  }
`

export default OurServicesWrapper;
