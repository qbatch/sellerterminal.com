import styled from "styled-components";

const ChallengesWrapper = styled.section`
  border-bottom: 1px solid #d2dbdb;
  .section-head {
    padding-top: 11px;
    h2 {
      margin-bottom: 16px;
      span {
        font-style: italic;
        letter-spacing: -1px;
      }
    }
    p {
      color: var(--Body-Text, #658486);
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      margin-bottom: 24px;
    }
  }
  .challenge-list {
    margin-bottom: 23px;
    gap: 81px;
  }
  ul {
    padding-left: 22px;
    margin-bottom: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0 80px;
    li {
      color: var(--Body-Text-Medium, #576f6f);
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      margin-bottom: 8px;
      list-style: disc;
      min-width: 212px;
      max-width: 212px;
      padding-left: 2px;
    }
  }
`;

export default ChallengesWrapper;
