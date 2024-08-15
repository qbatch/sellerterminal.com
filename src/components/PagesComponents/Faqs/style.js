import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const FaqWrapper = styled.section`
  background: ${({ theme }) => theme.colors.whiteColor};
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividingColor};
  padding: 96px 0;
  ${media.sm`
    padding: 48px 0;
  `}
  .faq-head {
    text-align: center;
    margin-bottom: 56px;
    ${media.sm`
      margin-bottom: 36px;
    `}
  }
  .faq-section {
    max-width: 930px;
    margin: 0 auto;
    margin-bottom: -24px;
    ul {
      padding-left: 20px;
      padding-top: 8px;
      li {
        color: #658486;
        margin-bottom: 8px;
        list-style: disc;
        padding-left: 2px;
      }
    }
  }
`;

export default FaqWrapper;
