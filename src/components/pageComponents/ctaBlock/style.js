import styled from "styled-components";
import TimeHoldBg from "/static/hold-bg.png";

const TimeWrapper = styled.section`
  background-color: #026363;
  background-image: url(${TimeHoldBg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top right;
  &.buy-software {
    padding-top: 148px;
    padding-bottom: 148px;
    background-position: 122px 0px;
  }

  .section-head {
    text-align: left;
    margin-bottom: 0;
    h2 {
      margin-bottom: 24px;
      max-width: 869px;
      color: var(--White, #fff);
      font-size: 68px;
      font-weight: 700;
      line-height: normal;
      margin-bottom: 24px;
    }
    .btn {
      margin-top: 32px;
      margin-bottom: 0;
    }
    p {
      color: var(--BG, #f0f2f2);
      /* H4 */
      font-family: Lato;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px;
    }
  }
`;

export default TimeWrapper;
