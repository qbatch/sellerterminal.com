import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const InvestigateWrapper = styled.section`
  &.st-section {
    padding-bottom: 152px;
    ${media.md`
       padding-bottom:75px;
      `};
  }
  background-size: cover;
  background-image: url("/investigate-bg.png");
  position: relative;
  z-index: 1;
  .investigate-inner {
    gap: 32px;
    justify-content: center;
    position: relative;
    ${media.md`
      justify-content:left;
    `};
    svg {
      margin-top: 9px;
      &.investigate-icon {
        width: 64px;
      }
    }
    &:after {
      content: "";
      width: 1px;
      height: 59px;
      background-color: #d2dbdb;
      position: absolute;
      right: 0;
      top: 29px;
      @media screen and (max-width: 1340px) {
        right: -15px;
      }
    }
  }
  .investigate-section {
    &:last-of-type {
      .investigate-inner {
        &:after {
          display: none;
        }
      }
    }
    .investigate-inner {
      ${media.md`
        &:after{
          display:none;
        }
      `};
    }
    ${media.md`
      padding-bottom:24px;
      &:last-of-type{
        padding-bottom:0;
      }
    `};
  }
  .investigate-row {
    ${media.md`
    max-width:650px;
    margin:0 auto;
    `};
    ${media.xs`
    max-width:300px;
    margin:0 auto;
    `};
  }
  h2 {
    text-align: center;
    margin-bottom: 80px;
    display: flex;
    justify-content: center;
    gap: 24px;
    font-weight: 700;
    align-items: center;
    flex-wrap: wrap;
    ${media.md`
    gap:0 4px;
    margin-bottom:35px;
    svg{
      width: 30px;
    }
    `};
  }
  .h1-style,
  h1 {
    color: ${({ theme }) => theme.colors.whiteColor};
    font-weight: 700;
    margin-bottom: 4px;
    text-align: left;
    display: flex;
    align-items: baseline;
    gap: 4px;
    span {
      color: ${({ theme }) => theme.colors.whiteColor};
    }
    ${media.sm`
      svg{
        width: 22px;
        height: 22px;
      }
    `};
  }
  h4,
  .h4-style {
    color: ${({ theme }) => theme.colors.dividingColor};
    margin-bottom: 0;
  }
`;

export default InvestigateWrapper;
