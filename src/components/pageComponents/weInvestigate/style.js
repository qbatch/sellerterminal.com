import styled from "styled-components";
import { media } from "../../../theme/media-mixins";
import Investigatebg from "/static/investigate-bg.png";

const InvestigateWrapper = styled.section`
  &.st-section {
    padding-bottom: 152px;
  }
  background-size: cover;
  background-image: url(${Investigatebg});
  position: relative;
  z-index: 1;
  .investigate-inner {
    gap: 32px;
    justify-content: center;
    position: relative;
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
  }
  h2 {
    color: var(--BG, #f0f2f2);
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
    text-align: center;
    margin-bottom: 80px;
    display: flex;
    justify-content: center;
    gap: 24px;
    align-items: center;
  }
  h3 {
    color: var(--White, #fff);
    font-size: 68px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 4px;
    text-align: left;
    display: flex;
    align-items: baseline;
    gap: 4px;
  }
  p {
    color: var(--Dividing-Line, #d2dbdb);
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    text-align: left;
    margin-bottom: 0;
  }
`;

export default InvestigateWrapper;
