import React from "react";
import { Link } from "react-router-dom";

// CSS
import { StyledHeader } from "./styles/Header.styled";
import logo from "../design/logo.svg";


const Header = () => {
  return (
    <StyledHeader className="header">
      <nav className="header__nav">
        <Link to="/" className="header__link-img-wrapper">
          <img src={logo} alt="" className="header__img" />
        </Link>
        <ul className="header__links">
          <Link to="/" className="header__link">
            <li>Accueil</li>
          </Link>
          <Link to="/user" className="header__link">
            <li>Profil</li>
          </Link>
          <Link to="/settings" className="header__link">
            <li>Réglage</li>
          </Link>
          <Link to="community" className="header__link">
            <li>Communauté</li>
          </Link>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
