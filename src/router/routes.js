import Main from "../pages/Main";
import Drama from "../pages/Drama";
import Animation from "../pages/Animation";
import Comedy from "../pages/Comedy";
import War from "../pages/War";
import Fantasy from "../pages/Fantasy";
import Fight from "../pages/Fight";
import Search from "../pages/Search";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

export default [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/drama",
    component: Drama,
  },
  {
    path: "/animation",
    component: Animation,
  },
  {
    path: "/comedy",
    component: Comedy,
  },
  {
    path: "/war",
    component: War,
  },
  {
    path: "/fantasy",
    component: Fantasy,
  },
  {
    path: "/fight",
    component: Fight,
  },
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/signup",
    component: SignUp,
  },
];
