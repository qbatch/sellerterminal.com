import { createGlobalStyle } from "styled-components";
import { media } from "./media-mixins";

const GlobalStyles = createGlobalStyle`
    body{
        font-size:${({ theme }) => theme.fonts.baseFontSize};    
        font-weight:400;
        line-height:normal;
        font-family: 'Lato', sans-serif!important;
        margin: 0;
        padding: 0;
        background-color: ${({ theme }) => theme.colors.backgroundColor};  
        box-sizing: border-box;
    }
    h1,h2,h3,h4,h5,h6{
        font-weight:700;
        color:${({ theme }) => theme.colors.textMedium}
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
        font-weight:500;
        line-height: normal;
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
        line-height:60px;
        &.light{
          color:${({ theme }) => theme.colors.bodyTextVariant};
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
       font-size:${({ theme }) => theme.fonts.baseFontSize};
       color: ${({ theme }) => theme.colors.bodyText};    
       line-height:24px;
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
      padding-left: 20px;
      padding-right: 20px;
        `}
    }
    .section-head {
    h4, .h4-style {
      color: ${({ theme }) => theme.colors.bodyLight};;
      margin-bottom: 8px;
    }
    h2, .h2-style {
      color: ${({ theme }) => theme.colors.textMedium};;
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
      }
      h2, .h2-style{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH3};
        line-height:40px;
      }
    }
    @media (max-width: 768px) {
      h1, .h1-style{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH3};
      }
      h2, .h2-style{
        font-size:${({ theme }) => theme.fonts.baseFontSizeLg};
        line-height:normal;
      }
      h4, .h4-style{
        font-size:${({ theme }) => theme.fonts.baseFontSizeSm};     
      }
      p{
       font-size:${({ theme }) => theme.fonts.baseFontSize};       
      }
      h3, .h3-style{
        font-size:${({ theme }) => theme.fonts.baseFontSizeLg}
      }
    }
    @media (max-width: 480px) {
      h1, .h1-style{
        font-size:${({ theme }) => theme.fonts.baseFontSizeLg};
      }
      h2, .h2-style{
        font-size:${({ theme }) => theme.fonts.baseFontSizeSm};
      }
      h4, .h4-style{
        font-size:${({ theme }) => theme.fonts.baseFontSize};     
      }
      p{
       font-size:${({ theme }) => theme.fonts.baseFontSizeMediumSmal};       
      }
      h3, .h3-style{
        font-size:${({ theme }) => theme.fonts.baseFontSizeSm}
      }
      .header-drawer{
        width:100%!important;
      }
    }
    @media screen and (max-width:400px){
      h2, .h2-style{
        font-size:18px;
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
`;
export default GlobalStyles;
