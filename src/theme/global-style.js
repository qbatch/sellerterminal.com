import { createGlobalStyle } from "styled-components";

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
        color:${({ theme }) => theme.colors.bodyTextVariant}
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
    h1{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH1};
    }
    h2{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH2};
    }
    h3{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH3}
    }
    h4{
        font-size:${({ theme }) => theme.fonts.baseFontSizeLg};     
    }
    p{
       font-size:${({ theme }) => theme.fonts.baseFontSizeSm};
       color: ${({ theme }) => theme.colors.textMedium};    
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
    .pointer{
      cursor:pointer;
    }
    .section-heading {
      h1 {
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
      @media screen and (min-width: 1400px){
        max-width: 1408px;
      }
    }
    .section-head {
    h4 {
      color: var(--Body-Text-Light, #95a9a9);
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px;
      margin-bottom: 8px;
    }
    h2 {
      color: var(--Body-Text-Medium, #576f6f);
      font-size: 48px;
      font-style: normal;
      font-weight: 400;
      line-height: 56px;
      max-width: 871px;
      margin: 0 auto;
      margin-bottom: 32px;
      span {
        color: #008989;
        font-weight: 700;
      }
    }
    .btn {
    }
  }
    @media (max-width: 1200px) {
      h1{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH2};
      }
      h2{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH3};
      }
    }
    @media (max-width: 768px) {
      h1{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH3};
      }
      h2{
        font-size:${({ theme }) => theme.fonts.baseFontSizeLg};
      }
      h4{
        font-size:${({ theme }) => theme.fonts.baseFontSizeSm};     
      }
      p{
       font-size:${({ theme }) => theme.fonts.baseFontSize};       
      }
      h3{
        font-size:${({ theme }) => theme.fonts.baseFontSizeLg}
      }
    }
    @media (max-width: 480px) {
      h1{
        font-size:${({ theme }) => theme.fonts.baseFontSizeLg};
      }
      h2{
        font-size:${({ theme }) => theme.fonts.baseFontSizeSm};
      }
      h4{
        font-size:${({ theme }) => theme.fonts.baseFontSize};     
      }
      p{
       font-size:${({ theme }) => theme.fonts.baseFontSizeMediumSmal};       
      }
      h3{
        font-size:${({ theme }) => theme.fonts.baseFontSizeSm}
      }
    }
    .fs-24{
      font-size:${({ theme }) => theme.fonts.baseFontSizeLg};
    }
`;
export default GlobalStyles;
