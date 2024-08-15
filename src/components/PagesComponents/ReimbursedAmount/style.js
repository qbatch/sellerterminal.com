import styled from 'styled-components';
import { media } from '../../../theme/media-mixins';

const ReimbursedWrapper = styled.div`
  padding: 237px 0 96px;
  ${media.xl`
    padding: 120px 0 96px;
  `}
  ${media.md`
    padding: 200px 0 96px;
  `}
  ${media.sm`
    padding: 120px 0 48px;
  `}
  .reimbursed-box {
    background-color: ${({ theme }) => theme.colors.whiteColor};
    box-shadow: 0px 10px 10px -3.75px #0C15270D;
    padding: 76px 48px;
    border-radius: 25px;
    ${media.sm`
      padding: 42px 24px;
    `}
    ${media.xs`
      padding: 24px 12px;
    `}
    .heading {
      margin-bottom: 78px;
      gap: 24px;
      h2 {
        margin-bottom: 0;
      }
      ${media.sm`
        gap: 12px;
        margin-bottom: 32px;
        svg {
          width: 24px;
          height: 24px;
        }
      `}
      ${media.xs`
        margin-bottom: 24px;
        h2 {
          font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
          line-height: 14px;
        }
      `}
    }
    .testimonial-box {
      background: linear-gradient(246.71deg, #FFFFFF 2.33%, #D1F2E9 65.04%);
      padding: 36px;
      border-radius: 20px;
      .feedback {
        color: ${({ theme }) => theme.colors.secondaryColor};
        font-style: italic;
        letter-spacing: -0.9px;
      }
      .client-name {
        p {
          color: ${({ theme }) => theme.colors.textColor};
          font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
          line-height: 24px;
          margin-bottom: 4px;
        }
        span {
          color: ${({ theme }) => theme.colors.textColor};
          line-height: 20px;
        }
      }
    }
    .amount-col {
      padding-left: 7%;
      ${media.md`
        margin-top: 60px;
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
    .animate {
      animation: fadeIn 0.7s ease-in-out;
    }
  }
 
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`

export default ReimbursedWrapper;
