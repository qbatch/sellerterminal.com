import React from "react";
import Collapse from "react-bootstrap/Collapse";
import IconPlus from "../../assets/images/icons/icon-plus-accordion.svg";
import IconMinus from "../../assets/images/icons/icon-minus-accordion.svg";

import CollpaseWrapper from "./style";

function Accordion(props) {
  const { title, children, open, onClick } = props;
  const openIcon = <IconMinus className="cursor-pointer" onClick={onClick} />;
  const closeIcon = <IconPlus className="cursor-pointer" onClick={onClick} />;

  return (
    <CollpaseWrapper>
      <>
        <div className="collpase-select d-flex justify-content-between">
          <h4 className="title">{title}</h4>
          {open ? openIcon : closeIcon}
        </div>
      </>
      <Collapse in={open}>
        <div id="collapse-text" className="collapse-content">
          {children}
        </div>
      </Collapse>
    </CollpaseWrapper>
  );
}

export default Accordion;
