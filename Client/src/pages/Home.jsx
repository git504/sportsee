import React from "react";
import { Link } from "react-router-dom";

// CSS
import { StyledHome } from "./styles/Home.styled";

// components
let setUserToken12 = () => {
  localStorage.setItem("accessToken", 12);
};

const Home = () => {
  return (
    <StyledHome className="home">
      <ul className="home__links">
        <Link to="/user/12" className="home__links--link">
          <li onClick={setUserToken12}>Infos utilisateur __mock12__</li>
        </Link>
      </ul>
    </StyledHome>
  );
};
export default Home;
