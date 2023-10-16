import styled from "styled-components";

const CollpaseWrapper = styled.div`
  margin-bottom: 24px;
  padding: 15px 16px;
  border-radius: 8px;
  border: 1px solid var(--Dividing-Line, #d2dbdb);
  background: var(--White, #fff);
  &:last-child {
    margin-bottom: 0px;
  }
  &:has(.show) {
    border: 1px solid var(--heading-button, #008989);
    .collpase-select {
      .title {
        color: var(--Body-Text-Medium, #576f6f);
      }
    }
  }
  .collpase-select {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      color: var(--text-field-body-color, #5e718d);
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 32px;
      margin-bottom: 0;
    }
  }
  .collapse-content {
    margin-top: 12px;
    color: var(--Body-Text, #658486);
    /* Body/Paragraph 01 */
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;
export default CollpaseWrapper;
