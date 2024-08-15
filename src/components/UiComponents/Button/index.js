import React from "react";

import ArrowRight from "../../../assets/svgs/icons/arrow-right.svg";
import Arrow from "../../../assets/svgs/icons/arrow-simple.svg";

import ButtonWrapper from "./style";

const index = (props) => {
  const { text, className, type, onClick, arrow, arrowSimple, variant } = props;

  return (
    <ButtonWrapper
      variant={variant ? variant : "text"}
      className={className}
      onClick={onClick}
    >
      {text}
      {arrow && (
        <div className="button-icon">
          <div>
            <ArrowRight className={type} />
          </div>
        </div>
      )}
      {arrowSimple && (
        <div className="button-icon">
          <div>
            <Arrow className={type} />
          </div>
        </div>
      )}
    </ButtonWrapper>
  );
};

export default index;
