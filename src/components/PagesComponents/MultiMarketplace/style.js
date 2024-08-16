import styled from 'styled-components';
import { media } from '../../../theme/media-mixins';

const MarketplaceWrapper = styled.div`
  padding: 96px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividingColor};
  ${media.sm`
    padding: 48px 0;
  `}
  .marketplace-img {
    svg {
      ${media.md`
        margin-top: 48px;
      `}
      ${media.sm`
        width: auto;
        height: auto;
      `}
    }
  }
  .marketplace-heading {
    margin-top: 16px;
    padding-left: 32px;
    ${media.md`
      margin-top: 0;
      padding-left: 0;
    `}
    h2 {
      margin-bottom: 32px;
      max-width: 506px;
      ${media.xs`
        margin-bottom: 24px;
      `}
    }
    p {
      margin-bottom: 32px;
    }
  }
`

export default MarketplaceWrapper;
