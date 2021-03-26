import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const LeftArrow = ({ type }) => {
  return (
    <div className="searchBtn">
      <FontAwesomeIcon icon={faSearch} type={type} size="2x"></FontAwesomeIcon>
    </div>
  );
};

export default LeftArrow;
