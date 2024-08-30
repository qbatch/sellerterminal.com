import { createGlobalStyle } from "styled-components";
import { media } from "./media-mixins";

const GlobalStyles = createGlobalStyle`
    body{
        font-size:${({ theme }) => theme.fonts.baseFontSize};    
        font-weight:400;
        line-height:normal;
        font-family: "Inter", sans-serif;
        margin: 0;
        padding: 0;
        background-color: ${({ theme }) => theme.colors.whiteColor};  
        box-sizing: border-box;
    }
    h1,h2,h3,h4,h5,h6{
        font-family: "Space Grotesk", sans-serif;
        font-weight:700;
        color:${({ theme }) => theme.colors.secondaryColor}
    }
    a{
        color:${({ theme }) => theme.colors.primaryColor};
        text-decoration:none;
    }
    ul{
        margin:0;
        padding:0;
        list-style:none;
      }
    h1, .h1-style{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH1};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        line-height: 66px;
        span{
          font-weight:700;
          color:${({ theme }) => theme.colors.primaryColor};
        }
        &.light{
          color:${({ theme }) => theme.colors.bodyTextVariant};
          span{
            color:${({ theme }) => theme.colors.bodyTextVariant};
          }
        }
    }
    h2, .h2-style{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH2};
        line-height: 52px;
        &.light{
          color:${({ theme }) => theme.colors.bodyTextVariant};
        }
        span{
          color:${({ theme }) => theme.colors.primaryColor};
        }
    }
    h3, .h3-style{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH3}
    }
    h4, .h4-style{
        font-size:${({ theme }) => theme.fonts.baseFontSizeLg};  
        font-weight: 600;
        line-height: 32px;   
        display: block;
        &.light{
            color: ${({ theme }) => theme.colors.bodyLight};
        }
    }
    p{
       font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
       color: ${({ theme }) => theme.colors.textMedium};  
       font-weight: ${({ theme }) => theme.fontWeight.medium}; 
       line-height: 32px;
    }
    label,caption{
        font-size:${({ theme }) => theme.fonts.baseFontSize};      
    }
    .color-danger {
      color: ${({ theme }) => theme.colors.dangerColor};
    }
    .color-primary {
      color: ${({ theme }) => theme.colors.primaryColor};
    }
    .fw-light {
      font-weight: ${({ theme }) => theme.fontWeight.light};
    }
    .heading {
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 0;
    }
    .cursor-pointer{
      cursor:pointer;
    }
    .section-heading {
      h1, .h1-style {
        color: ${({ theme }) => theme.colors.primaryColor};
        margin-bottom: 16px;
      }
      p {
        line-height: 32px;
      }
    }

  .underline-heading{
    color: ${({ theme }) => theme.colors.bodyText};
    font-weight: 700;
    position: relative;
    margin: 0;
    &::before{
      content: "";
      position: absolute;
      height: 1px;
      width: 24px;
      bottom: 0px;
      background-color: #ED1C24;
    }
  }
    img,svg{
        max-width:100%;
    }
    .header-drawer {
      overflow: auto;
    }
    .container.custom-container{
      max-width: 100%;
      padding-left:50px;
      padding-right:50px;
      @media screen and (min-width: 1440px){
        max-width: 1408px;
        padding-left:0;
        padding-right:0;
      }
      ${media.lg`
      padding-left: 24px;
      padding-right: 24px;
        `}
    }
    .section-head {
    h4, .h4-style {
      color: ${({ theme }) => theme.colors.bodyLight};
      margin-bottom: 8px;
    }
    h2, .h2-style {
      color: ${({ theme }) => theme.colors.textMedium};
      font-weight: 400;
      margin-bottom: 32px;
      ${media.md`
        margin-bottom:16px;
      `}
      span {
        color: #008989;
        font-weight: 700;
      }
    }
    .btn {
    }
  }
  section.st-section{
    padding-top:120px;
    padding-bottom: 120px;
    ${media.md`
      padding-top:75px;
      padding-bottom:75px;
    `}
  }
  .responsive-none{
    ${media.md`
      display:none!important;
    `}
  }
    @media (max-width: 1200px) {
      h1, .h1-style{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH2};
        line-height: 52px;
      }
      h2, .h2-style{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH3};
        line-height:40px;
      }
    }
    @media (max-width: 768px) {
      h1, .h1-style{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH3};
        line-height: 40px;
      }
      h2, .h2-style{
        font-size:${({ theme }) => theme.fonts.baseFontSizeLg};
        line-height: 32px;
      }
      h4, .h4-style{
        font-size:${({ theme }) => theme.fonts.baseFontSizeSm};     
      }
      p{
       font-size:${({ theme }) => theme.fonts.baseFontSize};  
       line-height: 24px;      
      }
      h3, .h3-style{
        font-size:${({ theme }) => theme.fonts.baseFontSizeLg}
      }
    }
    @media (max-width: 480px) {
      h1, .h1-style{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH3};
        line-height: 38px;
      }
      h2, .h2-style{
        font-size:${({ theme }) => theme.fonts.baseFontSizeLg};
        line-height: 32px;
      }
      h4, .h4-style{
        font-size:${({ theme }) => theme.fonts.baseFontSize};     
      }
      p{
       font-size:${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
       line-height: 18px;      
      }
      h3, .h3-style{
        font-size:${({ theme }) => theme.fonts.baseFontSizeSm} !important;
      }
      .header-drawer{
        width:100%!important;
      }
    }
    .fs-24{
      font-size:${({ theme }) => theme.fonts.baseFontSizeLg};
    }
    @keyframes pulseR {
	0% {
		transform: scale(0.95) rotate(2deg);
	}

	70% {
		transform: scale(1) rotate(-2deg);
	}

	100% {
		transform: scale(0.95) rotate(2deg);
	}
}
.banner-bg {
  background-color: ${({ theme }) => theme.colors.bgColor};
}

  .slick-dots {
    text-align: center;
    bottom: -34px;
  }

  .slick-dots li {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin: 0 3px;
    background-color: lightgray;
    border-radius: 50%;
  }
  .slick-dots li button::before {
    opacity: 0;
  }
  .slick-dots li.slick-active {
    background-color: ${({ theme }) => theme.colors.primaryColor};
    width: 32px;
    border-radius: 4px;
  }
  .slick-dots li.slick-active button::before {
    opacity: 0;
  }
  .slick-arrow {
    display: none !important;
  }
  .slick-dots li button:hover {
    opacity: 0;
  }
  .services-progressbar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 16px;
    background-color: #64A8A8;
    height: 6px;
    border-radius: 0 0 20px 20px;
    overflow: hidden;
    .progress {
      height: 100%;
      background-color: #ffffff;
      transition: width 0.1s linear;
    }
  }
  .hr {
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  }
`;
export default GlobalStyles;
