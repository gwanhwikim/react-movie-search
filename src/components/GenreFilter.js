import React from "react";
import Card from "./Card";

const GenreFilter = ({ movies, genre }) => {
  const renderDramaMovie = movies
    .filter((movie) => {
      return movie.movieGenre === genre;
    })
    .map((movie) => {
      return <Card movie={movie} key={movie.id} />;
    });

  return <div className="FilterBox">{renderDramaMovie}</div>;
};

export default GenreFilter;
