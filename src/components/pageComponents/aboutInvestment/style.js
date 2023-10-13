import styled from "styled-components";

const AboutWrapper = styled.section`
  border-bottom: 1px solid #d2dbdb;
  .section-head {
    text-align: center;
    margin-bottom: 80px;
    h4 {
      margin-bottom: 12px;
    }
    h2 {
      margin-bottom: 33px;
    }
    p {
      color: var(--Body-Text, #658486);
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      max-width: 930px;
      margin: 0 auto;
    }
  }
  .about-section {
    text-align: center;
    p {
      border-top: 1px solid #d2dbdb;
      margin-top: 40px;
      padding-top: 32px;
      color: var(--Body-Text-Medium, #576f6f);
      text-align: center;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px;
      margin-bottom: 0;
    }
  }
`;

export default AboutWrapper;
