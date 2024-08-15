import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const FooterWrapper = styled.div`
  background: linear-gradient(327.02deg, #008989 -50.21%, #002323 78.69%);
  overflow: hidden;
  position: relative;
  z-index: 2;
  &::before, &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-repeat: no-repeat;
    z-index: -1;
  }

  &::before {
    left: 0;
    background-image: url('/footer-bg-left.svg');
    background-position: left top;
    ${media.sm`
      background-image: url('/footer-bg-left2.svg');
    `}
  }

  &::after {
    right: 0;
    background-image: url('/footer-bg-right.svg');
    background-position: right top;
    ${media.sm`
      background-image: url('/footer-bg-right2.svg');
    `}
  }
  .footer-top {
    border-bottom: 1px solid #1F6D6D;
    padding: 88px 0 96px;
    ${media.sm`
      padding: 24px 0;
      border-bottom: none;
    `}
    .footer-respond {
      h2 {
        color: ${({ theme }) => theme.colors.whiteColor};
      }
    }
    .logo {
      svg {
        height: 49px;
        width: 219px;
        ${media.xs`
          width:150px;
          height:35px;
      `};
      }
    }
  }
  .footer-mid {
    padding: 72px 0;
    border-bottom: 1px solid #1F6D6D;
    ${media.sm`
      padding: 32px 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.dividingColor};
    `}
    .footer-links {
      ul {
        padding-left: 0;
        margin-bottom: 0;
        li {
          color: ${({ theme }) => theme.colors.whiteColor};
          line-height: 24px;
          margin-bottom: 12px;
          &:last-of-type {
            margin-bottom: 0;
          }
          ${media.sm`
            margin-bottom: 24px;
          `}
          a {
            color: ${({ theme }) => theme.colors.whiteColor};
            text-decoration: none;
            ${media.xs`
              font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
              line-height: 18px;
            `}
          }
        }
      }
    }
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr) 2fr;
    gap: 20px;
    ${media.md`
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
    `}
    ${media.sm`
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto;
    `}
  }
  .footer-bottom {
    .bottom-padding {
      padding: 16px 0;
      ${media.md`
        padding: 16px 0 0;
    `}
    }
    .logo {
      ${media.md`
        display: flex;
        justify-content: center;
      `}
    }
    .bottom-border {
      border-left: 1px solid #1F6D6D;
      border-right: 1px solid #1F6D6D;
      ${media.md`
        border-left: none;
        border-right: none;
      `}
    }
    p {
      margin-bottom: 0;
      color: ${({ theme }) => theme.colors.dividingColor};
      font-size: 16px;
      line-height: 24px;
    }
    @media screen and (max-width: 375px) {
      p {
        font-size: 14px;
        line-height: 22px;
      }
    }
    .copy-right {
      ${media.xs`
        p {
          font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
          line-height: 18px;
        }
      `}
    }
    .footer-social {
      ${media.md`
        padding-bottom: 16px;
        justify-content: center;
      `}
      p {
        color: ${({ theme }) => theme.colors.whiteColor};
        font-weight: ${({ theme }) => theme.fontWeight.bold}; 
        font-family: "Space Grotesk", sans-serif;
        line-height: 24px;
        margin-bottom: 0;
      }
      ul {
        display: flex;
        gap: 12px;
        margin-bottom: 0;
        padding-left: 0;
      }
      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
  .newsletter-div {
    ${media.sm`
      grid-column: 1 / -1;
    `}
  }
  .newsletter {
    ${media.sm`
      width: 100%;
      margin-top: 48px;
    `}
    p {
      color: ${({ theme }) => theme.colors.textHighlight};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      font-family: "Space Grotesk", sans-serif;
      margin-bottom: 16px;
    }
    span {
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      margin-bottom: 24px;
      display: block;
      line-height: 20px;
      max-width: 370px;
      ${media.xs`
        font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
        line-height: 18px;
        max-width: 100%;
      `}
    }
    .nl-input {
      border: 1px solid #C8CACE;
      border-radius: 12px;
      padding: 8px;
      max-width: max-content;
      ${media.sm`
        max-width: none;
        width: 100%;
      `}
      input {
        font-family: "Space Grotesk", sans-serif;
        border: none;
        background-color: transparent;
        color: ${({ theme }) => theme.colors.bodyTextVariant};
        width: 226px;
        ${media.sm`
          width: 100%;
          height: 100%;
        `}
        &::placeholder {
          color: ${({ theme }) => theme.colors.bodyTextVariant};
        }
        &:focus-visible {
          outline: none;
        }
      }
      button {
        padding: 14px 30px;
        ${media.sm`
          width: 100%;
          padding: 8px 12px;
          display: flex;
          justify-content: center;
        `}
      }
    }
  }
`;
export default FooterWrapper;
