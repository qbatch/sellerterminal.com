import styled from 'styled-components';
import { media } from '../../../theme/media-mixins';

const StartEarningWrapper = styled.div`
  padding: 96px 0;
  ${media.xs`
    padding: 48px 0;
  `}
  .referrals-box {
    background-color: ${({ theme }) => theme.colors.bgColor};
    border-radius: 40px;
    padding: 16px 66px;
    ${media.xs`
      padding: 24px;
  `}
  }
  .referrals-heading {
    ${media.sm`
      margin-top: 32px;
    `}
    ${media.xs`
      margin-top: 16px;
    `}
    h2 {
      margin-bottom: 36px;
      ${media.sm`
        margin-bottom: 24px;
      `}
    }
    p{
      color: ${({ theme }) => theme.colors.textMedium};
      margin-bottom: 32px;
      ${media.xs`
        margin-bottom: 24px;
      `}
    }
  }
`

export default StartEarningWrapper;
