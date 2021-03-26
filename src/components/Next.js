import React from "react";
import RightArrow from "./RightArrow";

const Next = ({ movies, page, setpage }) => {
  const nextPage = () => {
    if (movies[page.end] !== undefined) {
      setpage({
        start: page.start + 5,
        end: page.end + 5,
      });
    }
  };

  return (
    <>
      <RightArrow className="pageButton" onclick={nextPage} />
    </>
  );
};

export default Next;
