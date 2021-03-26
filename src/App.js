import React from "react";
import Nav from "./components/Nav";
import routes from "./router/routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const movies = [
    {
      id: "1",
      movieTitle: "귀멸의 칼날",
      movieYear: 20200911,
      movieGenre: "애니메이션",
      movieReservePer: 14,
      movieAudience: 1260000,
      movieImage: "a.jpg",
      movieStar: 3.6,
    },
    {
      id: "2",
      movieTitle: "반지의 제왕: 두 개의 탑",
      movieYear: 20020713,
      movieGenre: "판타지",
      movieReservePer: 10,
      movieAudience: 7612,
      movieImage: "b.jpg",
      movieStar: 3.2,
    },
    {
      id: "3",
      movieTitle: "미나리",
      movieYear: 20200201,
      movieGenre: "드라마",
      movieReservePer: 5,
      movieAudience: 570000,
      movieImage: "c.jpg",
      movieStar: 2.6,
    },

    {
      id: "4",
      movieTitle: "라야의 마지막 드래곤",
      movieYear: 20210930,
      movieGenre: "애니메이션",
      movieReservePer: 5,
      movieAudience: 230000,
      movieImage: "d.jpg",
      movieStar: 3.9,
    },
    {
      id: "5",
      movieTitle: "아이카",
      movieYear: 20211214,
      movieGenre: "드라마",
      movieReservePer: 0.3,
      movieAudience: 300,
      movieImage: "e.jpg",
      movieStar: 1.9,
    },

    {
      id: "6",
      movieTitle: "랜드",
      movieYear: 20211123,
      movieGenre: "드라마",
      movieReservePer: 0.2,
      movieAudience: 1207,
      movieImage: "f.jpg",
      movieStar: 2.6,
    },
    {
      id: "7",
      movieTitle: "극한직업",
      movieYear: 20180213,
      movieGenre: "코미디",
      movieReservePer: 18,
      movieAudience: 15000000,
      movieImage: "g.jpg",
      movieStar: 4.7,
    },
    {
      id: "8",
      movieTitle: "청년경찰",
      movieYear: 20171019,
      movieGenre: "코미디",
      movieReservePer: 11,
      movieAudience: 9000000,
      movieImage: "s.jpg",
      movieStar: 4.6,
    },
    {
      id: "9",
      movieTitle: "검객",
      movieYear: 20200721,
      movieGenre: "무협",
      movieReservePer: 3,
      movieAudience: 300000,
      movieImage: "i.jpg",
      movieStar: 3.3,
    },
    {
      id: "10",
      movieTitle: "디지몬 어드벤쳐",
      movieYear: 20030930,
      movieGenre: "애니메이션",
      movieReservePer: 7,
      movieAudience: 3000000,
      movieImage: "j.jpg",
      movieStar: 4.2,
    },
    {
      id: "11",
      movieTitle: "라따뚜이",
      movieYear: 20101215,
      movieGenre: "애니메이션",
      movieReservePer: 3,
      movieAudience: 2300000,
      movieImage: "k.jpg",
      movieStar: 4.0,
    },
    {
      id: "12",
      movieTitle: "라라랜드",
      movieYear: 20171111,
      movieGenre: "드라마",
      movieReservePer: 5,
      movieAudience: 5000000,
      movieImage: "l.jpg",
      movieStar: 3.9,
    },
    {
      id: "13",
      movieTitle: "업",
      movieYear: 20141212,
      movieGenre: "애니메이션",
      movieReservePer: 0.6,
      movieAudience: 70000,
      movieImage: "m.jpg",
      movieStar: 3.1,
    },
    {
      id: "14",
      movieTitle: "덩케르트",
      movieYear: 20151202,
      movieGenre: "전쟁",
      movieReservePer: 0.9,
      movieAudience: 303020,
      movieImage: "n.jpg",
      movieStar: 3.3,
    },
    {
      id: "15",
      movieTitle: "라푼젤",
      movieYear: 20130212,
      movieGenre: "애니메이션",
      movieReservePer: 5,
      movieAudience: 1300000,
      movieImage: "o.jpg",
      movieStar: 3.8,
    },
    {
      id: "16",
      movieTitle: "태극기 휘날리며",
      movieYear: 20020712,
      movieGenre: "전쟁",
      movieReservePer: 2,
      movieAudience: 13000000,
      movieImage: "p.jpg",
      movieStar: 4.9,
    },
    {
      id: "17",
      movieTitle: "해리포터 불의 잔",
      movieYear: 20050712,
      movieGenre: "판타지",
      movieReservePer: 9.5,
      movieAudience: 7130000,
      movieImage: "q.jpg",
      movieStar: 4.5,
    },
    {
      id: "18",
      movieTitle: "엽문2",
      movieYear: 20070122,
      movieGenre: "무협",
      movieReservePer: 1.5,
      movieAudience: 1130000,
      movieImage: "r.jpg",
      movieStar: 4.2,
    },
    {
      id: "19",
      movieTitle: "엽기적인 그냐",
      movieYear: 20071112,
      movieGenre: "코미디",
      movieReservePer: 3.5,
      movieAudience: 6750000,
      movieImage: "t.jpg",
      movieStar: 4.0,
    },
    {
      id: "20",
      movieTitle: "어벤져스 앤드 게임",
      movieYear: 20190202,
      movieGenre: "판타지",
      movieReservePer: 21,
      movieAudience: 11130000,
      movieImage: "u.jpg",
      movieStar: 4.5,
    },
    {
      id: "21",
      movieTitle: "완벽한 타인",
      movieYear: 20180630,
      movieGenre: "코미디",
      movieReservePer: 10.5,
      movieAudience: 8790821,
      movieImage: "v.jpg",
      movieStar: 4.5,
    },
  ];
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {routes.map((route) => {
            return (
              <Route key={route.path} path={route.path} exact>
                <route.component movies={movies} />
              </Route>
            );
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
