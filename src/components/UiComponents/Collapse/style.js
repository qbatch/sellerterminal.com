import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const CollpaseWrapper = styled.div`
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 10px;
  border: none;
  background: ${({ theme }) => theme.colors.whiteColor};
  &:has(.show) {
    background: ${({ theme }) => theme.colors.bgColor};
    box-shadow: 0px 10px 10px -3.75px #0C15270D;
    .collpase-select {
      .title {
        color: ${({ theme }) => theme.colors.secondaryColor};
      }
    }
  }
  .collpase-select {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title,
    .h4-style {
      color: ${({ theme }) => theme.colors.secondaryColor};
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      font-weight: ${({ theme }) => theme.fontWeight.bold}; 
      line-height: 32px;
      margin-bottom: 0;
      ${media.sm`
        font-size:18px;
        line-height:normal;
      `};
      ${media.xs`
        font-size:16px;
      `};
    }
    svg {
      min-width: 16px;
      min-height: 16px;
    }
  }
  .collapse-content {
    margin-top: 24px;
    color: ${({ theme }) => theme.colors.textMedium};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    ${media.sm`
      font-size:14px;
      line-height:22px;
    `};
  }
  &.small-collapse {
    background: transparent;
    padding: 0;
    .collpase-select {
      background: ${({ theme }) => theme.colors.primaryColor};
      padding: 16px 12px;
      border-radius: 8px;
      .title,
      .h4-style {
        color: ${({ theme }) => theme.colors.whiteColor};
      }
    }
    .collapse-content {
      padding-bottom: 24px;
    }
    &:has(.show) {
      box-shadow: none;
    }
  }
  .open-arrow {
    rotate: 180deg;
  }
`;
export default CollpaseWrapper;
