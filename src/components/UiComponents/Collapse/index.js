import React from "react";
import Collapse from "react-bootstrap/Collapse";
import ScrollAnimation from "react-animate-on-scroll";

import IconPlus from "../../../assets/svgs/st-plus-icon.svg";
import IconClose from "../../../assets/svgs/st-close-icon.svg";
import ArrowDown from "../../../assets/svgs/arrow-down-white.svg";

import CollpaseWrapper from "./style";

function Accordion(props) {
  const { title, children, open, onClick, className } = props;
  const closeIcon = <IconClose className="cursor-pointer" onClick={onClick} />;
  const openIcon = <IconPlus className="cursor-pointer" onClick={onClick} />;
  const smallOpenIcon = <ArrowDown className="cursor-pointer open-arrow" onClick={onClick} />;
  const smallCloseIcon = <ArrowDown className="cursor-pointer" onClick={onClick} />;

  return (
    <ScrollAnimation animateIn="fadeIn">
      <CollpaseWrapper className={className}>
        <>
          <div className="collpase-select d-flex justify-content-between">
            <h3 className="title h4-style">{title}</h3>
            {className === 'small-collapse' ?
              open ? smallOpenIcon : smallCloseIcon
              :
              open ? closeIcon : openIcon
            }
          </div>
        </>
        <Collapse in={open}>
          <div id="collapse-text" className="collapse-content">
            {children}
          </div>
        </Collapse>
      </CollpaseWrapper>
    </ScrollAnimation>
  );
}

export default Accordion;
