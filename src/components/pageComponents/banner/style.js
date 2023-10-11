import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const BannerWrapper = styled.div`
  padding-top: 56px;
  text-align: center;
  h3 {
    color: var(--Body-Text-Light, #95a9a9);
    text-align: center;
    /* H4 */
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
  }
  h1 {
    color: var(--Body-Text-Medium, #576f6f);
    text-align: center;
    /* H1 Medium */
    font-family: Lato;
    font-size: 68px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 24px;
    span {
      color: var(--heading-button, #008989);
      font-weight: 700;
    }
  }
  h4 {
    color: var(--Body-Text-Medium, #576f6f);
    text-align: center;
    /* H4 */
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    max-width: 723px;
    margin: 0 auto;
    margin-bottom: 16px;
  }
  p {
    color: var(--Body-Text, #658486);
    text-align: center;
    /* Body/Paragraph 01 */
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    max-width: 907px;
    margin: 0 auto;
    margin-bottom: 32px;
  }
  .btn {
    margin: 0 auto;
  }
  .banner-main {
    position: relative;
    .image-fixed-left {
      position: absolute;
      left: 0;
      top: 55px;
    }
    .image-fixed-right {
      position: absolute;
      right: 0;
      top: 107px;
    }
    .image-banner {
      margin-right: 155px;
    }
  }
`;

export default BannerWrapper;
