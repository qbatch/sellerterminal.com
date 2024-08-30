import styled from 'styled-components';
import { media } from '../../../theme/media-mixins';

const StartEarningWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  background-image: ${(props) => `url(${props.imageLoaded ? '/refund-bg-img.svg' : ''})`};
  padding: 96px 0 54px;
  margin: 96px 0;
  ${media.sm`
    padding: 48px 0;
    margin: 48px 0;
  `}
  .transparancy-heading {
    h2 {
      margin-bottom: 24px;
      color: ${({ theme }) => theme.colors.whiteColor};
      max-width: 600px;
      ${media.xs`
        margin-bottom: 16px;
      `}
    }
    p{
      font-family: "Space Grotesk", sans-serif;
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 32px;
      span {
        color: ${({ theme }) => theme.colors.textHighlight};
      }
    }
  }
  .trans-img {
    ${media.sm`
      svg {
        width: auto;
        height: auto;
      }
    `}
  }
`

export default StartEarningWrapper;
