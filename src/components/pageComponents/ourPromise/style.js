import styled from "styled-components";
import IconStar from "/static/star.svg";

const PromiseWrapper = styled.section`
  border-bottom: 1px solid #d2dbdb;
  .section-head {
    text-align: left;
    margin-bottom: 80px;
    h4 {
      margin-bottom: 10px;
    }
    h2 {
      margin-bottom: 33px;
      max-width: 532px;
      letter-spacing: 0.3px;
      span {
        letter-spacing: -0.4px;
      }
    }
    .btn {
      margin-bottom: 8px;
    }
    p {
      color: var(--Body-Text-Medium, #576f6f);
      font-size: 14px;
      font-weight: 500;
      line-height: normal;
    }
  }
  .promise-reclaim {
    background-color: #006363;
    border-radius: 16px;
    min-height: 406px;
    padding-top: 40px;
    padding-left: 40px;
    padding-bottom: 40px;
    padding-right: 47px;
    h3 {
      color: var(--White, #fff);
      font-size: 32px;
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
      ul {
        padding-left: 0;
        li {
          background-image: url(${IconStar});
          background-size: 32px;
          padding-left: 48px;
          background-repeat: no-repeat;
          color: var(--White, #fff);
          font-size: 24px;
          font-weight: 600;
          line-height: 32px;
          margin-bottom: 24px;
          &:last-of-type {
            margin-bottom: 0;
          }
        }
      }
      .btn {
        margin-top: 56px;
      }
    }
  }
`;

export default PromiseWrapper;
