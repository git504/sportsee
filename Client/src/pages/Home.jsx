import React from "react";
import { useNavigate } from "react-router-dom";

// CSS
import { StyledHome } from "./styles/Home.styled";

// components
const Home = () => {
  const navigate = useNavigate();

  const SetUserToken = (id) => {
    localStorage.removeItem("accessToken");
    localStorage.setItem("accessToken", id);
    navigate(`/user/${id}`);
  };

  return (
    <StyledHome className="home">
      <div className="home__links">
        <button
          className="home__links--link"
          onClick={() => {
            SetUserToken(18);
          }}
        >
          user __mock18__
        </button>
      </div>
    </StyledHome>
  );
};
export default Home;
