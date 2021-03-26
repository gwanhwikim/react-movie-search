import React from "react";
import GenreFilter from "../components/GenreFilter";

const Fight = ({ movies }) => {
  return (
    <div className="body">
      <h1>드라마</h1>
      <GenreFilter movies={movies} genre="무협" key={movies.id} />;
    </div>
  );
};

export default Fight;
