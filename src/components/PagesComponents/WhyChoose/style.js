import styled from 'styled-components';
import { media } from '../../../theme/media-mixins';

const WhyChooseWrapper = styled.div`
 padding: 96px 0;

  ${media.sm`
    padding: 48px 0;
  `}
  .investment-heading {
    margin-bottom: 56px;
    ${media.sm`
      margin-bottom: 24px;
    `}
    ${media.xs`
      text-align: center;
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
`

export default WhyChooseWrapper;
