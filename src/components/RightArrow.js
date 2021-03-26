import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

const RightArrow = ({ className, onclick }) => {
  return (
    <FontAwesomeIcon
      icon={faChevronCircleRight}
      className={className}
      onClick={onclick}
      size="2x"
      color="lightgray"
    />
  );
};

export default RightArrow;
