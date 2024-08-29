import styled from 'styled-components';
import { media } from '../../../theme/media-mixins';

const SoftwarePartnerWrapper = styled.div`
  padding: 96px 0;
  ${media.sm`
    padding: 48px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividingColor};
  `}
  .partner-box {
    background-color: ${({ theme }) => theme.colors.bgColor};
    border-radius: 40px;
    padding: 56px;
    display: flex;
    align-items: center;
    gap: 96px;
    ${media.xl`
      gap: 56px;
    `}
    ${media.md`
      flex-direction: column-reverse;
    `}
    ${media.xs`
      padding: 24px 16px;
      border-radius: 12px;
      gap: 32px;
    `}
    h2 {
      margin-bottom: 32px;
      ${media.xs`
        margin-bottom: 16px;
      `}
    }
    p {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      font-weight: ${({ theme }) => theme.fontWeight.bold}; 
      max-width: 670px;
      margin-bottom: 0;
      ${media.xs`
        font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
        line-height: 18px;
      `}
    }
  }
`

export default SoftwarePartnerWrapper;
