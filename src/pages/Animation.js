import React from "react";
import GenreFilter from "../components/GenreFilter";

const Animation = ({ movies }) => {
  return (
    <div className="body">
      <h1>애니메이션</h1>
      <GenreFilter movies={movies} genre="애니메이션" key={movies.id} />;
    </div>
  );
};

export default Animation;
