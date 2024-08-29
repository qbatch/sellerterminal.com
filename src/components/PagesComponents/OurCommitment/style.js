import styled from 'styled-components';
import { media } from '../../../theme/media-mixins';

const CommitmentWrapper = styled.div`
  padding: 0 0 72px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividingColor};
  ${media.sm`
    padding: 48px 0;
  `}
  .commitment-heading {
    h2 {
      margin-bottom: 56px;
      ${media.xs`
        margin-bottom: 42px;
      `}
    }
  }
  .commitment-col {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    ${media.xs`
      &:last-child {
        margin-bottom: 0;
      }
    `}
  }
  .flex-1 {
    flex: 1;
  }
  .commitment-box {
    padding: 24px 28px 32px 24px;
    box-shadow: 0px 0px 36px 0px #47474717;
    border-radius: 20px;
    height: 100%;
    div {
      margin-top: 24px;
      h3 {
        margin-bottom: 16px;
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

export default CommitmentWrapper;
