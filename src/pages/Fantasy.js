import React from "react";
import GenreFilter from "../components/GenreFilter";

const Fantasy = ({ movies }) => {
  return (
    <div className="body">
      <h1>드라마</h1>
      <GenreFilter movies={movies} genre="판타지" key={movies.id} />;
    </div>
  );
};

export default Fantasy;
