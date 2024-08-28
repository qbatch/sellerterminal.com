import styled from 'styled-components';
import { media } from '../../../theme/media-mixins';

const RefundWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  background-image: ${(props) => `url(${props.imageLoaded ? '/refund-bg-img.svg' : ''})`};
  padding: 96px 0 54px;
  ${media.sm`
    padding: 48px 0;
  `}
  .refund-heading {
    margin-top: 24px;
    ${media.sm`
      margin-top: 0;
    `}
    h2 {
      margin-bottom: 24px;
      color: ${({ theme }) => theme.colors.whiteColor};
      max-width: 600px;
      ${media.xs`
        margin-bottom: 16px;
      `}
    }
    h3{
      color: ${({ theme }) => theme.colors.whiteColor};
      font-weight: ${({ theme }) => theme.fontWeight.medium};
      margin-bottom: 32px;
      span {
        color: ${({ theme }) => theme.colors.textHighlight};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
      }
      ${media.xs`
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
        line-height: 18px;
        margin-bottom: 44px;
      `}
    }
  }
  .refund-svg {
    svg {
      ${media.sm`
        width: auto;
        height: auto;
      `}
    }
  }
`

export default RefundWrapper;
