import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

const LeftArrow = ({ className, onclick }) => {
  return (
    <FontAwesomeIcon
      icon={faChevronCircleLeft}
      className={className}
      onClick={onclick}
      size="2x"
      color="lightgray"
    >
      prev
    </FontAwesomeIcon>
  );
};

export default LeftArrow;
