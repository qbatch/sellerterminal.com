import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const PromiseWrapper = styled.section`
  border-bottom: 1px solid #d2dbdb;
  .section-head {
    text-align: left;
    margin-bottom: 80px;
    ${media.md`
      margin-bottom:42px;
      `}
    h4, .h4-style {
      margin-bottom: 10px;
    }
    h2,
    .h2-style {
      margin-bottom: 33px;
      max-width: 532px;
      letter-spacing: 0.3px;
      @media screen and (min-width: 1440px) {
        line-height: 56px;
      }
      span {
        letter-spacing: -0.4px;
      }
    }
    .btn {
      margin-bottom: 8px;
    }
    p {
      color: ${({ theme }) => theme.colors.textMedium};
      font-size: 14px;
      font-weight: 500;
      line-height: normal;
    }
  }
  .promise-reclaim {
    background-color: #006363;
    border-radius: 16px;
    padding-top: 40px;
    padding-left: 40px;
    padding-bottom: 40px;
    padding-right: 47px;
    h3,
    .h3-style {
      color: ${({ theme }) => theme.colors.whiteColor};
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-bottom: 16px;
    }
    .reclaim-main {
      display: flex;
      align-items: start;
      gap: 23px;
    }
    .reclaim-left {
      padding-top: 24px;
      ${media.md`
          padding-top:16px;
        `}
      ul {
        padding-left: 0;
        ${media.md`
          margin-bottom:0;
        `}
        li {
          background-image: url("/star.svg");
          background-size: 32px;
          padding-left: 48px;
          background-repeat: no-repeat;
          color: var(--White, #fff);
          font-size: 24px;
          font-weight: 600;
          line-height: 32px;
          margin-bottom: 24px;
          @media screen and (max-width: 1200px) {
            font-size: 20px;
            line-height: normal;
          }
          @media screen and (max-width: 991px) {
            font-size: 18px;
            margin-bottom: 16px;
            background-size: 20px;
            padding-left: 30px;
            &:last-of-type {
              margin-bottom: 0;
            }
          }
          @media screen and (max-width: 480px) {
            font-size: 16px;
            margin-bottom: 8px;
            background-size: 18px;
            padding-left: 24px;
            &:last-of-type {
              margin-bottom: 0;
            }
          }
          &:last-of-type {
            margin-bottom: 0;
          }
        }
      }
      .btn {
        margin-top: 56px;
        ${media.md`
          margin-top:24px;
        `}
      }
    }
    .reclaim-right {
      img {
        animation: pulseR 2s infinite;
        max-height: 224px;
      }
      ${media.md`
      padding-top:0px;
      img {
          height:150px;
      }
      `}
      @media screen and (max-width:415px) {
        display: none;
      }
    }
    ${media.md`
      padding:24px;
      .reclaim-main{
        justify-content:space-between;
      }
    `}
  }
`;

export default PromiseWrapper;
