import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const RespondWrapper = styled.section`
  background: var(--White, #fff);
  overflow: hidden;
  &.st-section {
    padding-bottom: 76px;
  }
  .section-head {
    text-align: left;
    ${media.lg`
      margin-bottom:42px;
    `}
  }
  .calendly-inline-widget iframe {
  }
  .calendly-inline-widget iframe .xahN8AEzyAvQtVj17TPv {
    padding-right: 0 !important;
    justify-content: end !important;
  }
  ${media.lg`
    .calendly-container{
      .calendly-inline-widget{
        margin-top:0!important;
        margin-left:0!important;
      }
    }
  `}
`;

export default RespondWrapper;
