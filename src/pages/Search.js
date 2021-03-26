import React from "react";
import InputField from "../components/InputField";

const Search = ({ movies }) => {
  return (
    <div className="body">
      <InputField movies={movies} />
    </div>
  );
};

export default Search;
