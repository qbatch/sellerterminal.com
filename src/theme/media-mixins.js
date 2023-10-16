import { css } from "styled-components";

const breakpoints = {
  xs: "575px",
  sm: "767px",
  md: "991px",
  lg: "1199px",
  xl: "1300px",
  xxl: "1440px",
};

export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export const bgMixin = (color) => css`
  &:hover {
    background-color: ${color};
  }
`;
