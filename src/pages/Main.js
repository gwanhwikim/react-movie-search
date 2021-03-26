import React, { useState } from "react";
import List from "../components/List";
import Prev from "../components/Prev";
import Next from "../components/Next";

const Main = ({ movies }) => {
  const [page, setPage] = useState({ start: 0, end: 5 });
  const [audiencePage, setAudiencePage] = useState({ start: 0, end: 5 });
  const [currentPage, setCurrentPage] = useState({ start: 0, end: 5 });
  const [starPage, setStarPage] = useState({ start: 0, end: 5 });

  return (
    <div className="body">
      <h1>박스오피스</h1>

      <div className="movieListBox">
        <Prev page={page} setpage={setPage} />
        <List movies={movies} sortBy="movieReservePer" page={page} />
        <Next movies={movies} page={page} setpage={setPage} />
      </div>

      <h1>관객순 정렬</h1>

      <div className="movieListBox">
        <Prev page={audiencePage} setpage={setAudiencePage} />
        <List movies={movies} sortBy="movieAudience" page={audiencePage} />
        <Next movies={movies} page={audiencePage} setpage={setAudiencePage} />
      </div>
      <h1>최신순 정렬</h1>

      <div className="movieListBox">
        <Prev page={currentPage} setpage={setCurrentPage} />
        <List movies={movies} sortBy="movieYear" page={currentPage} />
        <Next movies={movies} page={currentPage} setpage={setCurrentPage} />
      </div>

      <h1>별점순 정렬</h1>
      <div className="movieListBox">
        <Prev page={starPage} setpage={setStarPage} />
        <List movies={movies} sortBy="movieStar" page={starPage} />
        <Next movies={movies} page={starPage} setpage={setStarPage} />
      </div>
    </div>
  );
};

export default Main;
