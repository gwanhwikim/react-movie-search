import React from "react";
import { Link } from "react-router-dom";
const Nav = ({ movies }) => {
  return (
    <div className="headerBox">
      <div className="header">
        <div className="logoBox">
          <Link to="/react-movie-search">
            <img
              src={process.env.PUBLIC_URL + "logo3.png"}
              alt="로고"
              width="170"
              height="45"
            />
          </Link>
        </div>
        <div className="navMenu">
          <span>
            <div className="dropdown">
              <span>
                <button className="dropdownBtn">장르별 영화 조회</button>
              </span>
              <div className="dropdown-content">
                <Link className="link" to="/drama">
                  <p className="option">드라마</p>
                </Link>
                <hr></hr>
                <Link className="link" to="/animation">
                  <p className="option">애니메이션</p>
                </Link>
                <hr></hr>
                <Link className="link" to="/war">
                  <p className="option">전쟁</p>
                </Link>
                <hr></hr>
                <Link className="link" to="/comedy">
                  <p className="option">코미디</p>
                </Link>
                <hr></hr>
                <Link className="link" to="/fantasy">
                  <p className="option">판타지</p>
                </Link>
                <hr></hr>
                <Link className="link" to="/fight">
                  <p className="option">무협</p>
                </Link>
                <hr></hr>
              </div>
            </div>
          </span>
        </div>
        <Link to="/search">
          <button className="searchBox">검색으로 영화 조회</button>
        </Link>
        <div className="loginBox">
          <Link to="/login">
            <button className="signIn">로그인</button>
          </Link>
          <Link to="signup">
            <button className="signUp">회원가입</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
