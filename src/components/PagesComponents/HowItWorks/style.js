import styled, { keyframes } from 'styled-components';
import { media } from '../../../theme/media-mixins';

const HowItWorksWrapper = styled.div`
  padding: 96px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.xs`
    padding: 48px 0 16px;
  `}
  .works-heading {
    text-align: center;
    margin-bottom: 56px;
  }
  .works-row {
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
    .arc-up {
      position: absolute;
      top: 0;
      left: 222px;
      max-width: 290px;
    }
    .arc-down {
      position: absolute;
      right: 222px;
      bottom: 105px;
      max-width: 290px;
    }
    @media (max-width: 1150px) {
      .arc-up, .arc-down {
        display: none
      }
    }
  }
  .works-step {
    text-align: center;
    ${media.sm`
      margin-bottom: 32px;
    `}

    h3 {
      color: ${({ theme }) => theme.colors.primaryColor};
      margin: 20px 0 8px;
    }
    span {
      display: block;
      color: ${({ theme }) => theme.colors.textMedium};
      line-height: 20px;
      max-width: 215px;
      margin: 0 auto;
      ${media.xs`
        font-size:${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
        line-height: 18px;
      `}
    }
  }
`

export default HowItWorksWrapper;
