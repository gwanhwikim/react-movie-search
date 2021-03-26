import React from "react";
import GenreFilter from "../components/GenreFilter";

const Drama = ({ movies }) => {
  return (
    <div className="body">
      <h1>드라마</h1>
      <GenreFilter movies={movies} genre="드라마" key={movies.id} />;
    </div>
  );
};

export default Drama;
