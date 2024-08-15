import styled from 'styled-components';
import { media } from '../../../theme/media-mixins';

const InvestmentWrapper = styled.div`
  padding: 96px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividingColor};

  ${media.sm`
    padding: 48px 0;
  `}
  .investment-heading {
    ${media.sm`
      margin-bottom: 24px;
    `}
    ${media.xs`
      text-align: center;
    `}
  }
  .investment-desc {
    font-size:${({ theme }) => theme.fonts.baseFontSizeSm};
    padding-left: 50px;
    margin-bottom: 0;
    ${media.lg`
      padding-left: 0;
    `}
    ${media.xs`
      font-size:${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
      text-align: center;
      line-height: 18px;
      padding: 0 22px;
    `}
  }
  .investment-col {
    display: flex;
    flex-direction: column;
    ${media.lg`
      margin-bottom: 24px;
    `}
    ${media.xs`
      &:last-child {
        margin-bottom: 0;
      }
    `}
  }
  .flex-1 {
    flex: 1;
  }
  .investment-box {
    background: ${({ theme }) => theme.colors.bgColor};
    padding: 24px 28px 32px 24px;
    box-shadow: 0px 0px 36px 0px #00000005;
    border-radius: 20px;
    height: 100%;
    div {
      margin-top: 68px;
      ${media.xs`
        margin-top: 36px;
      `}
      h3 {
        margin-bottom: 16px;
        white-space: pre-line;
        ${media.lg`
          white-space: normal;
        `}
        ${media.xs`
          font-size:${({ theme }) => theme.fonts.baseFontSizeLg};
        `}
      }
      span {
        color: ${({ theme }) => theme.colors.textMedium};
        line-height: 24px;
      }
    }
  }
  .audit-btn {
    margin-top: 32px;
    ${media.md`
      margin-top: 24px;
    `}
  }
`

export default InvestmentWrapper;
