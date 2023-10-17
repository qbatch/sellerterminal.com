import styled from "styled-components";
import { media } from "../../theme/media-mixins";

const CollpaseWrapper = styled.div`
  margin-bottom: 24px;
  padding: 15px 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.dividingColor};
  background: ${({ theme }) => theme.colors.whiteColor};
  &:last-child {
    margin-bottom: 0px;
  }
  &:has(.show) {
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    .collpase-select {
      .title {
        color: ${({ theme }) => theme.colors.textMedium};
      }
    }
  }
  .collpase-select {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      color: #5e718d;
      font-size: 20px;
      font-weight: 500;
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
      min-width: 24px;
      min-height: 24px;
    }
  }
  .collapse-content {
    margin-top: 12px;
    color: ${({ theme }) => theme.colors.bodyText};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    ${media.sm`
        font-size:14px;
        line-height:22px;
    `};
  }
`;
export default CollpaseWrapper;
