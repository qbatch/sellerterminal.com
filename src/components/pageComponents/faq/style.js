import styled from "styled-components";
import TimeHoldBg from "/static/hold-bg.png";

const FaqWrapper = styled.section`
  background: var(--White, #fff);
  border-bottom: 1px solid var(--Dividing-Line, #d2dbdb);
  .section-head {
    text-align: center;
    margin-bottom: 58px;
    h2 {
      margin-bottom: 16px;
    }
    .btn {
      margin-top: 32px;
      margin-bottom: 0;
    }
    p {
      font-size: 24px;
      font-weight: 600;
      line-height: 32px;
    }
  }
  .faq-section {
    max-width: 930px;
    margin: 0 auto;
  }
`;

export default FaqWrapper;
