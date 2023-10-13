import styled from "styled-components";
import Footerbg from "/static/footer-bg.png";

const FooterWrapper = styled.div`
  background-size: cover;
  background-image: url(${Footerbg});
  padding-top: 64px;
  .footer-top {
    border-bottom: 1px solid #d2dbdb;
    padding-bottom: 24px;
    .auth-buttons {
      display: flex;
      align-items: center;
      gap: 24px;
      a {
        padding: 12px 16px;
        text-decoration: none;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        color: ${({ theme }) => theme.colors.primaryColor};
      }
      .btn-primary {
        gap: 48px;
        .button-icon {
          width: 12px;
          height: 12px;
          padding: 0;
          line-height: 12px;
        }
        &:hover {
          background-color: ${({ theme }) => theme.colors.primaryColor};
          color: ${({ theme }) => theme.colors.whiteColor};
        }
      }
    }
  }
  .footer-mid {
    padding-top: 48px;
    padding-bottom: 48px;
    border-bottom: 1px solid #d2dbdb;
    .footer-links {
      ul {
        padding-left: 0;
        margin-bottom: 0;
        li {
          color: #658486;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          margin-bottom: 12px;
          &:last-of-type {
            margin-bottom: 0;
          }
          a {
            color: #658486;
            text-decoration: none;
          }
        }
      }
    }
    .footer-social {
      display: flex;
      align-items: center;
      gap: 16px;
      justify-content: end;
      p {
        color: #576f6f;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        margin-bottom: 0;
      }
      ul {
        display: flex;
        gap: 16px;
        margin-bottom: 0;
        padding-left: 0;
      }
    }
  }
  .footer-bottom {
    text-align: center;
    padding: 24px 0;
    p {
      margin-bottom: 0;
      color: #95a9a9;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
  }
`;
export default FooterWrapper;
