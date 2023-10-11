import styled from "styled-components";
import { media } from "../../theme/media-mixins";

const HeaderWrapper = styled.header`
  /* height: 81px; */
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 99;
  box-sizing: border-box;

  .header-main {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      svg {
        min-width: 70px;
        ${media.xs`
          width: 70px;
        `}
      }
    }
    .header-menu {
      margin-left: 124px;
      margin-top: 2px;
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
        li {
          padding-left: 28px;
          padding-right: 28px;
          &:first-of-type {
            padding-left: 0;
          }
          &:last-of-type {
            padding-right: 0;
          }
          ${media.lg`
            padding-left: 20px;
          `}
          a {
            color: ${({ theme }) => theme.colors.textMedium};
            font-weight: ${({ theme }) => theme.fontWeight.normal};
            &:hover {
              color: ${({ theme }) => theme.colors.primaryColor};
              font-weight: ${({ theme }) => theme.fontWeight.medium};
            }
          }
          /* .active {
            color: ${({ theme }) => theme.colors.primaryColor};
            font-weight: ${({ theme }) => theme.fontWeight.medium};
            span {
              transform: translateY(-2px);
              &::before {
                content: "";
                position: absolute;
                left: 0;
                bottom: -2px;
                height: 2px;
                width: 18px;
                border-bottom: 2px solid ${({ theme }) =>
            theme.colors.dangerColor};
                transition: all 0.3s ease-out;
              }
            }
          } */
          cursor: pointer;
          position: relative;

          span {
            transition: all 0.3s ease-in-out;
            display: inline-block;
          }
          /* 
          &:first-child {
            min-width: 112px;
            ${media.lg`
              min-width: 96px;
            `}
          }
          &:nth-child(2) {
            min-width: 167px;
            ${media.lg`
              min-width: 151px;
            `}
          }
          &:nth-child(3) {
            min-width: 122px;
            ${media.lg`
              min-width: 106px;
            `}
          }
          &:nth-child(4) {
            min-width: 110px;
            ${media.lg`
              min-width: 92px;
            `}
          }
          &:last-child {
            min-width: 88px;
            ${media.lg`
              min-width: 70px;
            `}
          }
          &::after {
            position: absolute;
            content: "";
            width: 1px;
            height: 16px;
            background-color: ${({ theme }) => theme.colors.dividerColor};
            right: 0;
          }
          &:last-child::after {
            width: 0px;
          }
          &:hover {
            span {
              transform: translateY(-2px);
              &::before {
                width: 18px;
              }
            }
          } */
        }
      }
    }
  }
  .menu-items {
    display: flex;
    align-items: center;
    gap: 48px;
    ${media.lg`
      gap: 20px;
    `}
    .burger-icon {
      width: 32px;
      height: 32px;
      position: relative;
      cursor: pointer;
      span {
        display: block;
        width: 100%;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.textMedium};
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
      color: ${({ theme }) => theme.colors.primaryColor};
      font-weight: 700;
    }
  }
`;

export default HeaderWrapper;
