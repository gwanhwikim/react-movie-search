import React from "react";
import Card from "./Card";

const List = ({ movies, sortBy, page }) => {
  const renderMovie = movies
    .sort((a, b) => {
      if (sortBy === "movieReservePer") {
        if (a.movieReservePer > b.movieReservePer) {
          return -1;
        }
        if (a.movieReservePer < b.movieReservePer) {
          return 1;
        }
        return 0;
      }
      if (sortBy === "movieAudience") {
        if (a.movieAudience > b.movieAudience) {
          return -1;
        }
        if (a.movieAudience < b.movieAudience) {
          return 1;
        }
        return 0;
      }
      if (sortBy === "movieYear") {
        if (a.movieYear > b.movieYear) {
          return -1;
        }
        if (a.movieYear < b.movieYear) {
          return 1;
        }
        return 0;
      }
      if (sortBy === "movieStar") {
        if (a.movieStar > b.movieStar) {
          return -1;
        }
        if (a.movieStar < b.movieStar) {
          return 1;
        }
        return 0;
      }
      return 0;
    })

    .slice(page.start, page.end)
    .map((movie) => {
      return <Card movie={movie} key={movie.id} />;
    });
  return (
    <>
      <div className="movieListBox">{renderMovie}</div>
    </>
  );
};
export default List;
