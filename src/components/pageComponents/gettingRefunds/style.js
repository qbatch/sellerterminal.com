import styled from "styled-components";
import TimeHoldBg from "/static/hold-bg.png";
import { media } from "../../../theme/media-mixins";

const RefundWrapper = styled.section`
  &.st-section {
    padding-bottom: 119px;
    ${media.md`
      padding-bottom:75px;
    `}
  }
  .section-head {
    text-align: center;
    margin-bottom: 58px;
    h2 {
      margin-bottom: 16px;
      padding-left: 7px;
      span {
        line-height: 60px;
        @media screen and (max-width: 1200px) {
          line-height: normal;
        }
      }
    }
    .btn {
      margin-top: 32px;
      margin-bottom: 0;
    }
    p {
      font-size: 24px;
      font-weight: 600;
      line-height: 32px;
      @media screen and (max-width: 768px) {
        font-size: 20px;
        line-height: normal;
      }
      @media screen and (max-width: 480px) {
        font-size: 16px;
      }
    }
  }
  .refund-content {
    .refund-section-content {
      max-width: 454px;
      margin: 0 auto;
      h3 {
        color: ${({ theme }) => theme.colors.secondaryColor};
        letter-spacing: 0.64px;
        margin-bottom: 12px;
      }
      p {
        color: ${({ theme }) => theme.colors.textMedium};
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;
        margin-bottom: 0;
        min-width: 490px;
        ${media.xl`
        min-width:10px;
        `}
        ${media.md`
          font-size:20px;
          line-height:normal;
        `}
        ${media.xs`
          font-size:16px;
        `}
      }
    }
    .refund-image {
      border-radius: 12px;
      background: var(--Grey-Light, #f3f5f7);
      min-height: 303px;
      display: flex;
      align-items: center;
      justify-content: center;
      ${media.sm`
          margin-bottom:16px;
        `}
      ${media.xs`
      padding-left:40px;
      padding-right:40px;
      min-height:200px;
          svg{
            width: 100%;
            height:auto;
          }
        `}
    }
    .refund-text {
      ${media.sm`
          margin-bottom:42px;
        `}
    }
    .refund-row {
      position: relative;
      &:before {
        content: attr(data-value);
        width: 64px;
        height: 64px;
        border: 1px solid #d2dbdb;
        position: absolute;
        left: 47.7%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 64px;
        color: var(--Body-Text-Light, #95a9a9);
        text-align: center;
        font-size: 32px;
        font-weight: 600;
        line-height: 40px; /* 125% */
        letter-spacing: 0.64px;
        margin-top: -5px;
        ${media.xl`
          margin-left: -3px;
        `}
        ${media.lg`
          display:none;
        `}
      }
      &:after {
        content: "";
        width: 2px;
        height: 241px;
        background-color: #d2dbdb;
        left: 50%;
        position: absolute;
        bottom: -118px;
        ${media.lg`
          display:none;
        `}
      }
      &:last-of-type {
        &:after {
          display: none;
        }
        .refund-text {
          ${media.sm`
          margin-bottom:0;
        `}
        }
      }
      &:first-of-type {
        &:before {
          margin-top: -5px;
        }
      }
    }
  }
`;

export default RefundWrapper;
