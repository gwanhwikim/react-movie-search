import React, { useState } from "react";
import Card from "./Card";
import SearchBtn from "./SearchBtn";

const InputField = ({ movies }) => {
  const [search, setSearch] = useState("");
  const [searchMovieList, setSearchMovieList] = useState([]);

  const searchMovie = (event) => {
    event.preventDefault();
    setSearchMovieList(
      movies.filter((movie) => {
        return movie.movieTitle.indexOf(search) !== -1;
      })
    );
    setSearch("");
  };

  const renderSearchMovieList = searchMovieList.map((movie) => {
    return (
      <div key={movie.id}>
        <Card movie={movie} />
      </div>
    );
  });

  return (
    <>
      <form className="searchform" onSubmit={searchMovie}>
        <SearchBtn />
        <input
          className="inputBox"
          placeholder="작품 제목을 검색해보새요."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </form>
      <div className="FilterBox">{renderSearchMovieList}</div>
    </>
  );
};

export default InputField;
