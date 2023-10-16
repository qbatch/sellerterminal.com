import styled from "styled-components";
import TimeHoldBg from "/static/hold-bg.png";
import { media } from "../../../theme/media-mixins";

const TimeWrapper = styled.section`
  background-color: #026363;
  background-image: url(${TimeHoldBg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top right;
  @media screen and (max-width: 1599px) {
    background-size: cover;
  }
  &.buy-software {
    padding-top: 148px;
    padding-bottom: 148px;
    background-position: 122px 0px;
    ${media.md`
      padding-top:75px;
      padding-bottom:75px;
      background-position:top right;
    `}
  }
  .section-head {
    text-align: left;
    margin-bottom: 0;
    h1 {
      color: ${({ theme }) => theme.colors.whiteColor};
      max-width: 869px;
      margin-bottom: 24px;
      font-weight: 700;
      ${media.sm`
        margin-bottom:16px;
      `}
    }
    .btn {
      margin-top: 32px;
      margin-bottom: 0;
    }
    h4 {
      color: ${({ theme }) => theme.colors.bodyTextVariant};
    }
  }
`;

export default TimeWrapper;
