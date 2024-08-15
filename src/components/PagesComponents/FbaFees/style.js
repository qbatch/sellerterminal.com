import styled from 'styled-components';
import { media } from '../../../theme/media-mixins';

const FbaFeesWrapper = styled.div`
  padding: 96px 0;
    ${media.sm`
      padding: 48px 0;
    `}
  .fba-heading {
    text-align: center;
    display: flex;
    justify-content: center;
    h2 {
      margin-bottom: 56px;
      ${media.xs`
        margin-bottom: 24px;
      `}
    }
  }
  .fba-tabs {
    display: block;
    ${media.sm`
      display: none;
    `}
  }
  .mobile-collapse {
    display: none;
    ${media.sm`
      display: block;
    `}
    background-color: ${({ theme }) => theme.colors.bgColor};
    padding: 34px 24px 24px;
    h3 {
      color: ${({ theme }) => theme.colors.primaryColor};
      font-family: "Inter", sans-serif;
      margin-bottom: 16px;
    }
    .fee-details {
      margin-bottom: 24px;
      &:last-child {
        margin-bottom: 0;
      }
      label {
        font-size:${({ theme }) => theme.fonts.baseFontSizeSm};
        color: ${({ theme }) => theme.colors.secondaryColor};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        line-height: 26px;
        margin-bottom: 8px;
        ${media.xs`
          font-size:${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
          line-height: 18px;
          margin-bottom: 4px;
        `}
      }
      span {
        font-size:${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
        color: ${({ theme }) => theme.colors.textLight};
        line-height: 20px;
        display: block;
        max-width: 575px;
        ${media.xs`
          font-size:${({ theme }) => theme.fonts.baseFontSizeXs};
          line-height: 16px;
        `}
      }
    }
  }
`

export default FbaFeesWrapper;
