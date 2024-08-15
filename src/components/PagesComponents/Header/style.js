import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const HeaderWrapper = styled.header`
  background: ${({ isScrolled }) => (isScrolled ? 'rgba(255, 255, 255, 1)' : 'transparent')};
  transition: background-color 0.3s ease;
  box-shadow: ${({ isScrolled }) => (isScrolled ? '0px 4px 24px rgba(0, 0, 0, 0.05)' : 'none')};
  position: sticky;
  top: 0;
  z-index: 99;
  box-sizing: border-box;
  font-family: "Space Grotesk", sans-serif;

  .header-main {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      svg {
        min-width: 70px;
      }
    }
    .header-menu {
      margin-left: 160px;
      margin-top: 1px;
      ${media.xxl`
        margin-left:64px;
      `}
      ${media.lg`
        margin-left: 0;
      `}
      ${media.md`
        display: none;
      `}
      ul {
        display: flex;
        align-items: center;
        margin-bottom: 0;
        ${media.xxl`
        padding-left:0;
      `}
        li {
          padding-left: 24px;
          padding-right: 24px;
          ${media.xl`
            padding-left: 14px;
            padding-right: 14px;
          `}
          ${media.lg`
            padding-left: 10px;
            padding-right: 10px;
          `}
          &:first-of-type {
            padding-left: 0;
          }
          &:last-of-type {
            padding-right: 0;
          }
          a {
            color: ${({ isScrolled, theme }) => (isScrolled ? theme.colors.textMedium : theme.colors.whiteColor)};
            font-weight: ${({ theme }) => theme.fontWeight.medium};
            &:hover,
            &.active {
              color: ${({ isScrolled, theme }) => (isScrolled ? theme.colors.primaryColor : theme.colors.textHighlight)};
              font-weight: ${({ theme }) => theme.fontWeight.medium};
            }
          }
          cursor: pointer;
          position: relative;

          span {
            transition: all 0.3s ease-in-out;
            display: inline-block;
          }
        }
      }
    }
  }
  .menu-items {
    display: flex;
    align-items: center;
    gap: 56px;
    ${media.xl`
      gap: 42px;
    `}
    ${media.lg`
      gap: 20px;
    `}
    .burger-icon {
      width: 32px;
      height: 32px;
      position: relative;
      @media screen and (min-width: 992px) {
        display: none;
      }
      cursor: pointer;
      span {
        display: block;
        width: 100%;
        height: 2px;
        background-color: ${({ isScrolled, theme }) => (isScrolled ? theme.colors.textMedium : theme.colors.whiteColor)};
        position: absolute;
        right: 0;
        transition: transform 0.3s ease-in;
        &:first-child {
          top: 8px;
        }
        &:nth-child(2) {
          top: 48%;
          transform: translateY(-50%);
        }
        &:last-child {
          bottom: 8px;
          width: 12px;
        }
      }
      &:hover {
        span {
          &:first-child {
            transform: translateY(0px);
            background-color: ${({ theme }) => theme.colors.primaryColor};
          }
          &:nth-child(2) {
            transform: translateY(6px);
            width: 12px;
            background-color: ${({ theme }) => theme.colors.textMedium};
          }
          &:last-child {
            transform: translateY(-7px);
            width: 100%;
            background-color: ${({ theme }) => theme.colors.primaryColor};
          }
        }
      }
    }
    a {
      text-decoration: none;
      color: ${({ isScrolled, theme }) => (isScrolled ? theme.colors.primaryColor : theme.colors.whiteColor)};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
  }
`;

export default HeaderWrapper;
