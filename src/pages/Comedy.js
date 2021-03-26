import React from "react";
import GenreFilter from "../components/GenreFilter";

const Comedy = ({ movies }) => {
  return (
    <div className="body">
      <h1>드라마</h1>
      <GenreFilter movies={movies} genre="코미디" key={movies.id} />;
    </div>
  );
};

export default Comedy;
