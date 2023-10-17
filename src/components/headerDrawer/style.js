import styled from "styled-components";
import { media } from "../../theme/media-mixins";

const DrawerWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteColor};
  color: #fff;
  padding: 40px 0 15px;
  box-sizing: border-box;
  background-image: url("/drawer-bg.svg");
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
    padding-left: 24px;
    @media screen and (max-width: 350px) {
      padding-left: 16px;
    }
    ul {
      padding-left: 0;
      width: 70%;
      li {
        font-size: 24px;
        margin-bottom: 16px;
        color: #576f6f;
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
      }
    }
  }

  .bottom-content {
    border-top: 1px solid rgba(255, 255, 255, 0.25);
    padding-top: 0;
    padding-left: 24px;
    display: flex;
    align-items: center;
    gap: 16px;
    @media screen and (max-width: 350px) {
      gap: 7px;
      padding-left: 16px;
    }
    a {
      text-decoration: none;
      display: inline-block;
      font-size: 18px;
      color: #008989;
      @media screen and (max-width: 350px) {
        font-size: 16px;
      }
    }
    .btn {
      @media screen and (max-width: 350px) {
        gap: 8px;
      }
    }
  }
  .header-drawer-content {
    height: calc(100vh - 70px);
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
       height: auto;
       margin-bottom: 20px;
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
