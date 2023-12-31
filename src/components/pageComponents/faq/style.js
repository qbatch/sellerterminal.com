import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const FaqWrapper = styled.section`
  background: ${({ theme }) => theme.colors.whiteColor};
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividingColor};
  .section-head {
    text-align: center;
    margin-bottom: 58px;
    h2 {
      font-weight: 700;
      @media screen and (min-width: 1440px) {
        line-height: 56px;
      }
    }
    ${media.md`
      margin-bottom:35px;
      `};
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
