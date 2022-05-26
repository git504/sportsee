import React from "react";
import { useNavigate } from "react-router-dom";

// CSS
import { StyledHome } from "./styles/Home.styled";

/**
 * @file Home, a REACT functional component. HOME PAGE
 */

// components
const Home = () => {
  const navigate = useNavigate();

  /**
   * @function SetUserToken
   * @param {number} id user id in url
   * @description login function : new ID "accessToken" , then navigate to the single user dashboard thanks to his id.
   */
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
        <button
          className="home__links--link"
          onClick={() => {
            SetUserToken(12);
          }}
        >
          user __mock12__
        </button>
      </div>
    </StyledHome>
  );
};
export default Home;
