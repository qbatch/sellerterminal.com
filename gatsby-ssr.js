import React from "react";
import { withPrefix } from 'gatsby';

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents([
    <link
      key="space-grotesk-bold-woff2"
      rel="preload"
      href={withPrefix('/fonts/SpaceGrotesk-Bold.woff2')}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="space-grotesk-regular-woff2"
      rel="preload"
      href={withPrefix('/fonts/SpaceGrotesk-Regular.woff2')}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="inter-bold-woff2"
      rel="preload"
      href={withPrefix('/fonts/Inter18pt-Bold.woff2')}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="inter-regular-woff2"
      rel="preload"
      href={withPrefix('/fonts/Inter18pt-Regular.woff2')}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="inter-medium-woff2"
      rel="preload"
      href={withPrefix('/fonts/Inter18pt-Medium.woff2')}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link 
      key="logo"
      rel="preload" 
      href="/seller-terminal-logo.svg" 
      as="image"
    />,
  ]);

  // Inline critical CSS
  setPreBodyComponents([
    <style
      key="critical-css"
      dangerouslySetInnerHTML={{
        __html: `
          @font-face {
            font-family: 'Space Grotesk';
            src: url('/fonts/SpaceGrotesk-Bold.woff2') format('woff2');
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Space Grotesk';
            src: url('/fonts/SpaceGrotesk-Regular.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Inter 18pt';
            src: url('/fonts/Inter18pt-Bold.woff2') format('woff2');
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Inter 18pt';
            src: url('/fonts/Inter18pt-Regular.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
            @font-face {
            font-family: 'Inter 18pt';
            src: url('/fonts/Inter18pt-Medium.woff2') format('woff2');
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }
        `,
      }}
    />,
  ]);
};
