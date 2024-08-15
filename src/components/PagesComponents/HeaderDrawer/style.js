import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const DrawerWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteColor};
  color: #fff;
  padding: 70px 0 15px;
  box-sizing: border-box;
  background: rgba(2, 99, 99, 1);
  background-size: cover;
  position: relative;
  min-height: 100vh;
  .cross-icon {
    position: absolute;
    right: 24px;
    top: 24px;
    cursor: pointer;
  }
  .menu-main {
    padding: 0px 24px;
    margin-bottom: 0;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .drawer-logo {
      text-align: center;
      margin-bottom: 48px;
      @media screen and (max-height: 575px) {
        margin-bottom: 32px;
      }
    }
    @media screen and (max-width: 350px) {
      padding-left: 0px 16px;
    }
    ul {
      padding-left: 0;
      width: 100%;
      text-align: center;
      margin-bottom: 0;
      li {
        font-size: 24px;
        margin-bottom: 24px;
        @media screen and (max-height: 575px) {
          margin-bottom: 16px;
        }
        color: ${({ theme }) => theme.colors.whiteColor};
        ${media.sm`
          font-size:20px;
        `}
        &:hover {
          color: #008989;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }

  .bottom-content {
    padding-top: 0;
    padding: 0 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    margin-top: 48px;
    @media screen and (max-height: 575px) {
      margin-top: 32px;
    }
    @media screen and (max-width: 350px) {
      gap: 7px;
      padding: 0 0px;
    }
    a {
      text-decoration: none;
      display: inline-block;
      font-size: 18px;
      color: #ffffff;
      @media screen and (max-width: 350px) {
        font-size: 16px;
      }
    }
    .btn {
      width: 100%;
      justify-content: space-between;
      @media screen and (max-width: 350px) {
        gap: 8px;
      }
    }
  }
  .header-drawer-content {
    height: calc(100vh - 95px);
    overflow: auto;
  }
  .header-drawer {
    @media screen and (max-width: 410px) {
      width: 350px !important;
    }
  }
  @media (max-width: 1314px) {
    .menu-main {
      gap: 90px;
      ${media.lg`
        gap: 60px;
      `}
      ${media.md`
       gap: 17px;
      `}
      ${media.sm`
       height: 100%;
       flex-direction: column;
       gap: 5px;
      `}
      .hire-developers-menu {
        ${media.md`
         gap: 30px;
        `}
        ${media.sm`
          flex-wrap: wrap;
        `}
        .inner-menu {
          ${media.md`
            gap: 30px;
        `}
        }
      }
    }
  }
`;

export default DrawerWrapper;
