"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[233],{8233:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var n=r(7294),o=r(682),l=r(4051),a=r(1555),s=r(3025),i=r(1317),c=r.n(i),m=r(6066);var d=e=>{let{duration:t,onComplete:r}=e;const{0:o,1:l}=(0,n.useState)(0);return(0,n.useEffect)((()=>{const e=setInterval((()=>{l((n=>n>=100?(clearInterval(e),r(),100):n+100/(t/1e3)))}),100);return()=>clearInterval(e)}),[t,r]),n.createElement("div",{className:"services-progressbar"},n.createElement("div",{className:"progress",style:{width:`${o}%`}}))},u=r(6870),p=r(5086),h=r(7325);var g=p.default.div.withConfig({displayName:"style__OurServicesWrapper",componentId:"sc-1hhd8zh-0"})(["padding:96px 0;border-bottom:1px solid ",";"," h2{margin-bottom:56px;","}.refund-bg{background-color:",";background-image:",";background-position:right 0 top 0;background-repeat:no-repeat;border-radius:25px;padding:40px;.refund-box{background-color:",';border-radius:20px;padding:16px 24px 16px 16px;margin-bottom:24px;position:relative;cursor:pointer;flex:1;&:last-child{margin-bottom:0;}label{font-family:"Space Grotesk",sans-serif;font-size:',";font-weight:",";color:",";line-height:26px;margin-bottom:12px;}span{font-size:",";color:",";line-height:20px;display:block;}&.active{background-color:",";label{color:",";}span{color:",";}}}}.slick-track:has(.mobile-refund){display:flex;gap:10px;}.mobile-refund{background-color:",";border:none;border-radius:10px;padding:4px;min-height:502px;"," .card-title{color:",";font-size:",";line-height:32px;margin-bottom:8px;","}.card-text{font-size:",";color:",";line-height:24px;","}}.services-img{display:flex !important;justify-content:flex-end;margin-top:32px;"," img{width:584px;}}.progress-position{position:absolute;top:10px;}"],(e=>{let{theme:t}=e;return t.colors.dividingColor}),h.B.sm`
    padding: 48px 0 72px;
  `,h.B.xs`
      margin-bottom: 36px;
    `,(e=>{let{theme:t}=e;return t.colors.bgColor}),(e=>`url(${e.imageLoaded?"/easy-refund-bg.svg":""})`),(e=>{let{theme:t}=e;return t.colors.whiteColor}),(e=>{let{theme:t}=e;return t.fonts.baseFontSizeSm}),(e=>{let{theme:t}=e;return t.fontWeight.bold}),(e=>{let{theme:t}=e;return t.colors.secondaryColor}),(e=>{let{theme:t}=e;return t.fonts.baseFontSizeMediumSmal}),(e=>{let{theme:t}=e;return t.colors.textMedium}),(e=>{let{theme:t}=e;return t.colors.primaryColor}),(e=>{let{theme:t}=e;return t.colors.whiteColor}),(e=>{let{theme:t}=e;return t.colors.bodyTextVariant}),(e=>{let{theme:t}=e;return t.colors.primaryColor}),h.B.xs`
      font-size: ${e=>{let{theme:t}=e;return t.fonts.baseFontSizeSm}};
      min-height: 320px;
    `,(e=>{let{theme:t}=e;return t.colors.whiteColor}),(e=>{let{theme:t}=e;return t.fonts.baseFontSizeLg}),h.B.xs`
        font-size: ${e=>{let{theme:t}=e;return t.fonts.baseFontSizeSm}};
        line-height: 26px;
      `,(e=>{let{theme:t}=e;return t.fonts.baseFontSize}),(e=>{let{theme:t}=e;return t.colors.bodyTextVariant}),h.B.xs`
        font-size: ${e=>{let{theme:t}=e;return t.fonts.baseFontSizeMediumSmal}};
        line-height: 20px;
      `,h.B.md`
      justify-content: center;
    `);var b=()=>{const{0:e,1:t}=(0,n.useState)(0),{0:r,1:i}=(0,n.useState)(!1),p=(0,n.useRef)(),h=(0,n.useRef)(null);(0,n.useEffect)((()=>{const t=setTimeout((()=>{const t=(e+1)%u.lX.length;b(t)}),9e4);return()=>clearTimeout(t)}),[e]);const b=e=>{t(e),h.current.slickGoTo(e)},f=()=>{const t=(e+1)%u.lX.length;b(t)};(0,n.useEffect)((()=>{const e=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting&&(i(!0),e.unobserve(p.current))}))}),{rootMargin:"0px",threshold:.1});return e.observe(p.current),()=>{p.current&&e.unobserve(p.current)}}),[]);const x={dots:!1,infinite:!1,autoplay:!1,lazyLoad:!0,speed:600,slidesToShow:1,slidesToScroll:1,beforeChange:(e,r)=>{t(r)}},v={dots:!0,infinite:!0,autoplay:!0,lazyLoad:!0,speed:600,autoplaySpeed:5e3,slidesToShow:1,slidesToScroll:1};return n.createElement(g,{imageLoaded:r},n.createElement(o.Z,{className:"custom-container"},n.createElement(c(),{animateIn:"fadeIn"},n.createElement("h2",null,"Our ",n.createElement("span",null,"Services")),n.createElement("div",{className:"refund-bg d-none d-md-block",ref:p},n.createElement(l.Z,null,n.createElement(a.Z,{lg:6},u.lX.map(((t,r)=>n.createElement("div",{key:r,className:"refund-box "+(e===r?"active":""),onClick:()=>{b(r)}},e===r&&n.createElement(d,{duration:9e4,onComplete:f}),n.createElement("label",null,t.label),n.createElement("span",null,t.desc))))),n.createElement(a.Z,{lg:6},n.createElement("div",{className:"mt-4"},n.createElement(m.Z,Object.assign({ref:h},x),u.lX.map(((e,t)=>n.createElement("div",{key:t,className:"services-img"},n.createElement("img",{src:e.img,alt:e.label,title:e.label,loading:"lazy",width:"100%",height:"100%"})))))))))),n.createElement("div",{className:"d-block d-md-none"},n.createElement(m.Z,v,u.lX.map(((e,t)=>n.createElement(s.Z,{key:t,className:"mobile-refund"},n.createElement(s.Z.Img,{variant:"top",src:e.img,alt:e.label,loading:"lazy",width:"100%",height:"100%"}),n.createElement(s.Z.Body,null,n.createElement(s.Z.Title,null,e.label),n.createElement(s.Z.Text,null,e.desc)))))))))}}}]);
//# sourceMappingURL=233-0e24c9c7c4b790fa6691.js.map