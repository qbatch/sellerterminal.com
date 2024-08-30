import styled from 'styled-components';
import { media } from '../../../theme/media-mixins';

const WhoWeAreWrapper = styled.div`
  padding: 90px 0;
  ${media.sm`
    padding: 16px 0 0;
  `}

  .wrapper-box {
    padding: 56px 60px 56px 80px;
    background-image: url('/gradient-bg.svg');
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;
    ${media.sm`
      padding: 32px;
    `}
  }

  .amount-col {
    ${media.md`
      margin-top: 60px;
    `}
    ${media.md`
      margin-top: 32px;
    `}
    svg {
      ${media.sm`
        width: 60px;
        height: 60px;
      `}
      ${media.xs`
        width: 48px;
        height: 48px;
      `}
    }
      
    h2 {
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 4px;
      ${media.xs`
        font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
        line-height: 42px;
        margin-bottom: 0;
      `}
    }
    span {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      color: ${({ theme }) => theme.colors.textColor};
      line-height: 24px;
      ${media.xs`
        font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
        line-height: 16px;
      `}
    }
  }
  .amount-box {
    padding-bottom: 34px;
    margin-bottom: 37px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderLightColor};
    ${media.xs`
      padding-bottom: 16px;
      margin-bottom: 16px;
    `}
  }
  .wrapper-heading {
    h2 {
      margin-bottom: 32px;
      ${media.xs`
        margin-bottom: 24px;
      `}
    }
    p {
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
      color: ${({ theme }) => theme.colors.secondaryColor};
      max-width: 620px;
      margin-bottom: 0;
      ${media.md`
        max-width: 100%;
      `}
    }
  }
`

export default WhoWeAreWrapper;
