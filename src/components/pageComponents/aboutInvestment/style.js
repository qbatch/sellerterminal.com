import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const AboutWrapper = styled.section`
  border-bottom: 1px solid #d2dbdb;
  &.st-section {
    ${media.md`
        padding-bottom:51px;
      `}
  }
  .section-head {
    text-align: center;
    margin-bottom: 80px;
    ${media.md`
        margin-bottom:35px;
      `}
    h4 {
      margin-bottom: 12px;
      ${media.md`
        margin-bottom:8px;
      `}
    }
    h2 {
      @media screen and (min-width: 1440px) {
        line-height: 56px;
      }
      @media screen and (min-width: 1599px) {
        margin-bottom: 33px;
      }
    }
    p {
      max-width: 930px;
      margin: 0 auto;
    }
  }
  .about-section {
    text-align: center;
    p {
      border-top: 1px solid ${({ theme }) => theme.colors.dividingColor};
      margin-top: 40px;
      padding-top: 32px;
      color: ${({ theme }) => theme.colors.textMedium};
      text-align: center;
      font-size: 24px;
      font-weight: 600;
      line-height: 32px;
      margin-bottom: 0;
      ${media.md`
        font-size:20px;
        margin-top:20px;
        padding-top:16px;
        br{
          display:none;
        }
      `}
    }
    ${media.sm`
    p{   
       margin-bottom:48px;
        br{
          display:block;
        }
      } 
      svg{
        width:70px;
        height:70px;
      }
      `}
    ${media.xs`
      p{
        font-size:16px;
        line-height:normal;
        br{
          display:none;
        }
      }
      `}
  }
  .about-section-col {
  }
`;

export default AboutWrapper;
