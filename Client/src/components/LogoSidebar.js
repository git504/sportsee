import React from "react";

// PROPS
import PropTypes from "prop-types";

// CSS
import { StyledLogoSidebar } from "./styles/LogoSidebar.styled";

/**
 * @description Component that show the icons in the sidebar
 * @param { String } image - image of the icon
 * @returns { HTMLElement}
 */
const LogoSidebar = ({ image }) => {
  return (
    <StyledLogoSidebar className="logo">
      <img src={image} alt="each sports" className="logo__img" />
    </StyledLogoSidebar>
  );
};

LogoSidebar.propTypes = {
  image: PropTypes.string.isRequired,
};

export default LogoSidebar;
