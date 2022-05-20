import React from "react";
import { Link } from "react-router-dom";

// components

const Home = () => {
  return (
    <div className="home">
      <ul className="home__links">
        <Link to="/profil/12" className="home__link home__link-api">
          <li className="home__item">__Mocks12__</li>
        </Link>
        <Link to="/profil/18" className="home__link home__link-api">
          <li className="home__item">__Mocks18__</li>
        </Link>
      </ul>
    </div>
  );
};
export default Home;
