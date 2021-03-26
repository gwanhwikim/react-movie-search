import React from "react";

const Card = ({ movie }) => {
  let year = String(movie.movieYear).split("");
  const renderYear = year[0] + year[1] + year[2] + year[3];

  let renderAudience = "";

  if (movie.movieAudience > 10000) {
    renderAudience = String(movie.movieAudience).split("");
    renderAudience.splice(-4, 4);
    renderAudience = renderAudience.join("") + "만명";
  } else {
    renderAudience = movie.movieAudience + "명";
  }
  return (
    <div className="movieList">
      <div>
        <img
          className="image"
          src={process.env.PUBLIC_URL + movie.movieImage}
          width="250"
          height="380"
          alt={movie.movieTitle}
        />
      </div>
      <div className="title">{movie.movieTitle}</div>
      <div className="year">
        {renderYear}・<span className="genre">{movie.movieGenre}</span>
      </div>
      <div>평균 ★{movie.movieStar}</div>

      <div className="reserve">
        예매율 {movie.movieReservePer}%
        <span className="audience"> 누적 관객 {renderAudience}</span>
      </div>
    </div>
  );
};

export default Card;
