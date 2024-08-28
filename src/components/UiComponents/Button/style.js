import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { media } from "../../../theme/media-mixins";

const ButtonWrapper = styled(Button)`
  display: flex;
  align-items: center;
  gap: 11px;
  color: ${({ theme }) => theme.colors.secondaryColor};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: "Space Grotesk", sans-serif;
  padding: 11px 15px 11px 15px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  position: relative;
  white-space: nowrap;
  border: none;
  ${media.xs`
    font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
    padding: 6px 12px;
  `}
  .button-icon {
    box-sizing: border-box;
    transition: all 0.3s ease-in-out;
    svg {
      transition: transform 0.3s ease-in-out;
      transform: rotate(0deg);
    }
  }
  &.btn-primary {
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.whiteColor};
    background-color: ${({ theme }) => theme.colors.primaryColor};
    display: flex;
    align-items: center;
    gap: 16px;
    .button-icon {
      width: 24px;
      height: 24px;
      padding: 0;
      margin-top: -4px;
      svg {
      }
    }
    &:hover {
      color: ${({ theme }) => theme.colors.primaryColor};
      background-color: ${({ theme }) => theme.colors.whiteColor};
      border: 1px solid ${({ theme }) => theme.colors.primaryColor};
      &::after {
        width: 0;
      }
      .button-icon {
        path {
          &.svg-fill-primary {
            fill: ${({ theme }) => theme.colors.primaryColor};
          }
          &.svg-fill-secondary {
            fill: ${({ theme }) => theme.colors.whiteColor};
          }
          &.svg-stroke {
            stroke: ${({ theme }) => theme.colors.primaryColor};
          }
        }
        svg {
          transform: rotate(90deg);
        }
      }
    }
  }
  &.btn-secondary {
    border: 1px solid ${({ theme }) => theme.colors.whiteColor};
    color: ${({ theme }) => theme.colors.primaryColor};
    background-color: ${({ theme }) => theme.colors.whiteColor};
    display: flex;
    align-items: center;
    gap: 16px;
    .button-icon {
      width: 24px;
      height: 24px;
      padding: 0;
      margin-top: -4px;
      svg {
        path {
          &.svg-fill-primary {
            fill: ${({ theme }) => theme.colors.primaryColor};
          }
          &.svg-fill-secondary {
            fill: ${({ theme }) => theme.colors.whiteColor};
          }
          &.svg-stroke {
            stroke: ${({ theme }) => theme.colors.primaryColor};
          }
        }
      }
    }
    &:hover {
      color: ${({ theme }) => theme.colors.primaryColor};
      background-color: ${({ theme }) => theme.colors.whiteColor};
      border: 1px solid ${({ theme }) => theme.colors.whiteColor};
      .button-icon {
        path {
          &.svg-fill-primary {
            fill: ${({ theme }) => theme.colors.primaryColor};
          }
          &.svg-fill-secondary {
            fill: ${({ theme }) => theme.colors.whiteColor};
          }
          &.svg-stroke {
            stroke: ${({ theme }) => theme.colors.primaryColor};
          }
        }
        svg {
          transform: rotate(90deg);
        }
      }
    }
  }
  &.btn-outline-primary {
    color: ${({ theme }) => theme.colors.primaryColor};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    display: flex;
    align-items: center;
    gap: 16px;
    .button-icon {
      width: 26px;
      height: 26px;
      padding: 0;
      margin-top: -2px;
      path {
        &.svg-fill-primary {
          fill: ${({ theme }) => theme.colors.whiteColor};
        }
        &.svg-fill-secondary {
          fill: ${({ theme }) => theme.colors.textMedium};
        }
        &.svg-stroke {
          stroke: ${({ theme }) => theme.colors.primaryColor};
        }
      }
      svg {
        transform: rotate(0deg);
      }
    }
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.primaryColor};
      color: ${({ theme }) => theme.colors.whiteColor};
      background-color: ${({ theme }) => theme.colors.primaryColor};
      &::after {
        width: 0;
      }
      .button-icon {
        path {
          &.svg-fill-primary {
            fill: ${({ theme }) => theme.colors.whiteColor};
          }
          &.svg-fill-secondary {
            fill: ${({ theme }) => theme.colors.primaryColor};
          }
          &.svg-stroke {
            stroke: ${({ theme }) => theme.colors.whiteColor};
          }
        }
        svg {
          transform: rotate(90deg);
        }
      }
    }
  }
  &.btn-outline-secondary {
    color: ${({ theme }) => theme.colors.whiteColor};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.whiteColor};
    display: flex;
    align-items: center;
    gap: 13px;
    .button-icon {
      width: 26px;
      height: 26px;
      padding: 0;
      margin-top: -2px;
      path {
        &.svg-fill-primary {
          fill: ${({ theme }) => theme.colors.whiteColor};
        }
        &.svg-fill-secondary {
          fill: ${({ theme }) => theme.colors.textMedium};
        }
        &.svg-stroke {
          stroke: #d2d9dc;
        }
      }
      svg {
        transform: rotate(0deg);
      }
    }
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.primaryColor};
      color: ${({ theme }) => theme.colors.whiteColor};
      background-color: ${({ theme }) => theme.colors.primaryColor};
      .button-icon {
        path {
          &.svg-fill-primary {
            fill: ${({ theme }) => theme.colors.whiteColor};
          }
          &.svg-fill-secondary {
            fill: ${({ theme }) => theme.colors.primaryColor};
          }
          &.svg-stroke {
            stroke: ${({ theme }) => theme.colors.whiteColor};
          }
        }
        svg {
          transform: rotate(90deg);
        }
      }
    }
  }
  &.btn-text {
    text-align: center;
    justify-content: center !important;
    &:hover {
      border: 0px;
    }
    &.text-white {
      color: ${({ theme }) => theme.colors.whiteColor};
    }
  }

  &.secondary-btn {
    color: ${({ theme }) => theme.colors.whiteColor};
    .button-icon {
      border-color: ${({ theme }) => theme.colors.dangerColor};
      svg {
        fill: ${({ theme }) => theme.colors.primaryColor};
      }
    }
    &:hover {
      .button-icon {
        border-color: ${({ theme }) => theme.colors.primaryColor};
      }
    }
  }
`;

export default ButtonWrapper;
