import React from "react";
import { useNavigate } from "react-router-dom";

// CSS
import { StyledHome } from "./styles/Home.styled";

/**
 * @file Home, a REACT functional component. HOME PAGE
 * @todo Write the page.
 * @todo Implement this function.
 */

// components
/**
 * @description The home page
 * @property {Function} Home 2 buttons linked to use mocked data
 * @returns { HTMLElement}
 */
const Home = () => {
  const navigate = useNavigate();

  /**
   * @function SetUserToken
   * @param {number} id user id in url
   * @description login function : new ID "accessToken" , then navigate to the single user dashboard thanks to his id.
   */
  const SetUserToken = (user, id) => {
    localStorage.removeItem("accessToken");
    localStorage.setItem("accessToken", id);
    navigate(`/${user}/${id}`);
  };

  return (
    <StyledHome className="home">
      <div className="home__links">
        <div>
          <button
            className="home__links--link"
            onClick={() => {
              SetUserToken("user", 12);
            }}
          >
            🏆 API_user_⑫
          </button>
        </div>
        <div>
          <button
            className="home__links--link"
            onClick={() => {
              SetUserToken("user", 18);
            }}
          >
            🏆 API_user_⑱
          </button>
        </div>
        <div>
          <button
            className="home__links--link"
            onClick={() => {
              SetUserToken("mock", 18);
            }}
          >
            🏅 MOCK_user_Cécilia 👩
          </button>
        </div>
        <div>
          <button
            className="home__links--link"
            onClick={() => {
              SetUserToken("mock", 12);
            }}
          >
            🏅 MOCK_user_Karl 🧑
          </button>
        </div>

      </div>
    </StyledHome>
  );
};
export default Home;
