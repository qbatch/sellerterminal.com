import styled from "styled-components";
import Footerbg from "/static/footer-bg.png";
import { media } from "../../theme/media-mixins";

const FooterWrapper = styled.div`
  background-size: cover;
  background-image: url(${Footerbg});
  padding-top: 64px;
  overflow: hidden;
  @media screen and (max-width: 375px) {
    padding-top: 30px;
  }
  .footer-top {
    border-bottom: 1px solid #d2dbdb;
    padding-bottom: 24px;
    @media screen and (max-width: 375px) {
      padding-bottom: 16px;
    }
    .logo {
      svg {
        height: 49px;
        width: 219px;
        ${media.xs`
        width:150px;
        height:35px;
      `};
        @media screen and (max-width: 375px) {
          width: 120px;
          height: 30px;
        }
      }
    }
    .auth-buttons {
      display: flex;
      align-items: center;
      gap: 32px;
      ${media.xs`
        gap:10px;
      `};
      a {
        padding: 12px 16px;
        text-decoration: none;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        color: ${({ theme }) => theme.colors.primaryColor};
        ${media.xs`
        padding:12px 4px;
      `};
        @media screen and (max-width: 375px) {
          font-size: 12px;
          line-height: 18px;
        }
      }
      .btn-primary {
        gap: 48px;
        ${media.xs`
        gap:10px;
      `};
        .button-icon {
          width: 12px;
          height: 12px;
          padding: 0;
          line-height: 12px;
        }
        @media screen and (max-width: 375px) {
          font-size: 12px;
          line-height: 18px;
          .button-icon {
            width: 8px;
            height: 8px;
            line-height: 8px;
          }
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
    @media screen and (max-width: 375px) {
      padding-top: 30px;
      padding-bottom: 30px;
    }
    border-bottom: 1px solid #d2dbdb;
    .footer-links {
      ul {
        padding-left: 0;
        margin-bottom: 0;
        li {
          color: #658486;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          margin-bottom: 12px;
          &:last-of-type {
            margin-bottom: 0;
          }
          ${media.sm`
            margin-bottom:12px;
          `}
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
      ${media.sm`
        justify-content:start;
        margin-top:-30px;
      `};
      ${media.sm`
        margin-top:16px;
      `};
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
    @media screen and (max-width: 375px) {
      padding: 16px 0;
      p {
        font-size: 14px;
        line-height: 22px;
      }
    }
  }
  .footer-img {
    ${media.sm`
      margin-top:-30px;
    `};
  }
`;
export default FooterWrapper;
