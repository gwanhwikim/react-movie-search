import React from "react";
import GenreFilter from "../components/GenreFilter";

const War = ({ movies }) => {
  return (
    <div className="body">
      <h1>드라마</h1>
      <GenreFilter movies={movies} genre="전쟁" key={movies.id} />;
    </div>
  );
};

export default War;
