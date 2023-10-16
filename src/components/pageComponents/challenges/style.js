import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ChallengesWrapper = styled.section`
  border-bottom: 1px solid #d2dbdb;
  .section-head {
    padding-top: 11px;
    h2 {
      margin-bottom: 16px;
      @media screen and (min-width: 1440px) {
        line-height: 56px;
      }
      span {
        font-style: italic;
        letter-spacing: -1px;
      }
    }
    p {
      margin-bottom: 24px;
    }
  }
  .challenge-list {
    margin-bottom: 23px;
    gap: 81px;
  }
  ul {
    padding-left: 22px;
    margin-bottom: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0 80px;
    ${media.xxl`
       gap:0 2%;
      `}
    li {
      color: ${({ theme }) => theme.colors.textMedium};
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      margin-bottom: 8px;
      list-style: disc;
      min-width: 212px;
      max-width: 212px;
      padding-left: 2px;
      ${media.xxl`
        min-width:47%;
        width: 47%;
      `}
      ${media.md`
        font-size:13px;
        line-height:normal;
        width: 49%;
      `}
      ${media.xs`
        font-size:12px;
      `}
      @media screen and (max-width:374px) {
        width: 100%;
      }
    }
  }
  .static-image {
    ${media.sm`
        width:100%;
        margin-bottom:16px;
      `}
  }
`;

export default ChallengesWrapper;
