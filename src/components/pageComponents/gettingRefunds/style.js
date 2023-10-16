import styled from "styled-components";
import TimeHoldBg from "/static/hold-bg.png";

const RefundWrapper = styled.section`
  &.st-section {
    padding-bottom: 119px;
  }
  .section-head {
    text-align: center;
    margin-bottom: 58px;
    h2 {
      margin-bottom: 16px;
      padding-left: 7px;
      span {
        line-height: 60px;
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
    }
  }
  .refund-content {
    /* max-width: 1106px; */
    /* margin: 0 auto; */
    .refund-section-content {
      max-width: 454px;
      margin: 0 auto;
      h3 {
        color: var(--title-heading, #2b3030);
        /* H3 */
        font-size: 32px;
        font-weight: 600;
        line-height: 40px; /* 125% */
        letter-spacing: 0.64px;
        margin-bottom: 12px;
      }
      p {
        color: var(--Body-Text-Medium, #576f6f);
        /* H4 Regular */
        font-size: 24px;
        font-weight: 400;
        line-height: 32px; /* 133.333% */
        margin-bottom: 0;
        min-width: 490px;
      }
    }
    .refund-image {
      border-radius: 12px;
      background: var(--Grey-Light, #f3f5f7);
      min-height: 303px;
      display: flex;
      align-items: center;
      justify-content: center;
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
      }
      &:after {
        content: "";
        width: 2px;
        height: 241px;
        background-color: #d2dbdb;
        left: 50%;
        position: absolute;
        bottom: -118px;
      }
      &:last-of-type {
        &:after {
          display: none;
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
