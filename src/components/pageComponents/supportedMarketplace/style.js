import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const MarketplaceWrapper = styled.div`
  padding-top: 120px;
  .section-head {
    gap: 32px;
    justify-content: center;
    position: relative;
    h4 {
      text-align: center;
    }
    h2 {
      text-align: center;
      max-width: 871px;
      margin: 0 auto;
      margin-bottom: 32px;
    }
    .btn {
      margin: 0 auto;
    }
  }
  .marketplace-content {
    margin-top: 72px;
    background: linear-gradient(90deg, #fff 0%, #f0f2f8 50.42%, #fff 100%);
    padding-top: 58px;
    padding-bottom: 58px;
    .marquee-item {
      margin-right: 16px;
      img {
        max-height: 80px;
      }
    }
    .marketplace-marq-sec {
      margin-top: 29px;
    }
  }
`;

export default MarketplaceWrapper;
