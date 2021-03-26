import React from "react";
import LeftArrow from "./LeftArrow";

const Prev = ({ page, setpage }) => {
  const prevPage = () => {
    if (page.start !== 0) {
      setpage({
        start: page.start - 5,
        end: page.end - 5,
      });
    }
  };

  return (
    <>
      <LeftArrow className="pageButton" onclick={prevPage} />
    </>
  );
};

export default Prev;
