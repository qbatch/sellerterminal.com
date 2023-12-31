import React from "react";
import Collapse from "react-bootstrap/Collapse";
import ScrollAnimation from "react-animate-on-scroll";

import IconPlus from "../../assets/svgs/icons/icon-plus-accordion.svg";
import IconMinus from "../../assets/svgs/icons/icon-minus-accordion.svg";

import CollpaseWrapper from "./style";

function Accordion(props) {
  const { title, children, open, onClick } = props;
  const openIcon = <IconMinus className="cursor-pointer" onClick={onClick} />;
  const closeIcon = <IconPlus className="cursor-pointer" onClick={onClick} />;

  return (
    <ScrollAnimation animateIn="fadeIn">
      <CollpaseWrapper>
        <>
          <div className="collpase-select d-flex justify-content-between">
            <h3 className="title h4-style">{title}</h3>
            {open ? openIcon : closeIcon}
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
